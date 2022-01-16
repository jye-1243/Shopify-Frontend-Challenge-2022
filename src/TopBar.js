import { useState } from 'react';
import './App.css'

function TopBar(props) {



    return (
        <div className="top-bar">
            <div className="top-bar-fill"> 
            
                <h1 className="title"> Spacestagram </h1>
            </div>
            <div className="search-bar-container">
                <h3> Search for Photo by Date </h3>
                <form>
                    <input className='search-bar' type="text" name="date" placeholder="yyyy-mm-dd"/>
                </form>
                
            </div> 
            
            <div className="top-bar-fill"> </div>
        </div>
    );
}

export default TopBar;
