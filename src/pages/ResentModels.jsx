import React, { useEffect, useState } from 'react';


const ResentModels = () => {
    const [data, setData] = useState([]);
    useEffect ( () => {
        fetch('http://localhost:3000/latest-models')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    },[]);
  
    console.log (data)
    return (
        <div>
            <h1>im from Resent DaTa </h1>
            
        </div>
    );
};

export default ResentModels;