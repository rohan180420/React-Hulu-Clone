import React, { useState, useEffect } from 'react'
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';

function Results({ selectedOption }) {
  
const [movies, setMovies] = useState([]);

useEffect( () =>{
    async function fetchData() {
        const request = await axios.get(selectedOption);  //to wait till we get the response from axios call
        //console.log(request);
        setMovies(request.data.results); // to set the value of setMovies
        return request;  //jump out of async function
    }

    fetchData();
}, [selectedOption]);

    return (
        <div className="results">
        
            {
                movies.map((movie) => (
                    <VideoCard movie={movie}
                    key={movie.id} />
                ))
            }
        
            
            
            
        </div>
    )
}

export default Results