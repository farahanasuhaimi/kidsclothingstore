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
            <h2>Nurza Kids Clothing Store</h2>
            <h1>Welcome</h1>
        </div>
    );
}

export default Home;