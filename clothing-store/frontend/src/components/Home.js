import React, { useState, useEffect } from 'react';

function Home() {
    const [userName, setUserName] = useState('');
    const [savedName, setSavedName] = useState('');
  
    useEffect(() =>{
      const savedNameFromLocalStorage = localStorage.getItem('userName');
      if(savedNameFromLocalStorage){
        setSavedName(savedNameFromLocalStorage);
      }
    }, []);
    useEffect(() => {
      if (userName){
        localStorage.setItem('userName', userName);
        setSavedName(userName);
      }
    }, [userName]);
    
    return (
        <div>
            <h2>Home Page</h2>
            <h1>
        Hello, {' '} 
            <span className={`glitter ${savedName ? '' : 'glitter-hidden'}`}>
            {savedName ? savedName : 'World'}</span>
            </h1>
            <input 
            type="text" 
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}/>
        </div>
    );
}

export default Home;