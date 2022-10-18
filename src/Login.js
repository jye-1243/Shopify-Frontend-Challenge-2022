import React, { useEffect, useState } from 'react';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import {Button} from 'flowbite-react';
import {useNavigate} from 'react-router-dom';
import db from "./firebase";
import firebase from 'firebase/compat/app';
import { doc, getDoc } from "firebase/firestore";
import { onSnapshot, collection } from "firebase/firestore";


function Login() {

  const [ profile, setProfile ] = useState([]);

  const [ firstName, setFirstName ] = useState([]);
  const [ lastName, setLastName ] = useState([]);
  const [ email, setEmail ] = useState([]);
  const [ id, setId ] = useState([]);
  const [queries, setQueries] = useState([]);

  const clientId = '1044211576984-ieq8c2m6h75hqb24dvgrtol8krfdvci4.apps.googleusercontent.com';
  // const clientId = '';
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
      clientId: clientId,
      scope: '',
      });
    };
  gapi.load('client:auth2', initClient);
  });

  async function getMarker() {
    const events = await firebase.firestore().collection('queries')
    events.get().then((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
          return { id: doc.id }
        })
        console.log(tempDoc)
      })
  }

  useEffect(
    () =>
      onSnapshot(collection(db, "queries"), (snapshot) =>
        setQueries(snapshot.docs.slice(0,4).map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const onSuccess = (res) => {
    setProfile(res.profileObj.name);
    console.log('success:', res);
    setId(res.profileObj.googleId);
    setEmail(res.profileObj.email);
    setFirstName(res.profileObj.givenName);
    setLastName(res.profileObj.familyName);


    db.collection("user_info").add({
      email: email,
      first_name: firstName,
      id: id,
      last_name: lastName
    });

    console.log(queries);

    {queries.map((q) => (
      console.log(q.returns[0])
    ))}

  };

  const onFailure = (err) => {
    console.log('failed:', err);
  };
  const logOut = () => {
    console.log("Logged Out")
    setFirstName('');
    setLastName('');
    setEmail('');
    setId('');
    setProfile([]);
  };
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    height: '20vh',
    flexDirection: 'column',
  };

  const navigate = useNavigate();

  const navigateToQueries = () => {
    console.log(profile);
    // 👇️ navigate to /contacts
    console.log(email);
    navigate('/queries', { state: { uid: id, queries: queries} });
  };

  return (
    <div style={centerStyle} className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">

        <h2 className="text-3xl text-gray-700 font-bold mb-5">City of Cambridge Search Evaluator {firstName} </h2>
        
        <div>
        {profile.length === 0 ? <h3>Not logged into Google</h3>: <Button onClick={navigateToQueries}>Open survey</Button>} 
        {profile.length === 0 ?
            <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            redirectUri={'http://localhost:3000'}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
        :
          <GoogleLogout 
            clientId={clientId}
            buttonText="Log Out"
            onLogoutSuccess={logOut}
            redirectUri={'http://localhost:3000'}
          />
        }
        </div>
    </div>
  );
}

export default Login;
