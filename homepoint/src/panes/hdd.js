import React from 'react';
import ReactDOM from 'react-dom';
import { deflateSync } from 'zlib';

const API = "http://192.168.10.104:5000/dirlist"
function fetchJSON(url){
    console.log("Fetching Hard Drive Info from homepoint");
    return fetch(url)
}

function getDir(){
    const dirNum = fetchJSON(API)
    dirNum.then(function(response){
        return response.json();
    })
    .then(function(dir){
        let returned = (JSON.stringify(dir));
        let parsed = JSON.parse(returned);
        const element =( 
            
            <div>
                <h4>MOTHERBASE || STATUS</h4>
                <i className="fas fa-hdd fa-7x"></i>
                <p>{parsed.movies} <strong>Movies</strong></p>
                <p>{parsed.anime} <strong>Anime Series</strong></p>

            </div>
        );
        ReactDOM.render(element, document.getElementById('hddPane'));
    })
}
getDir();
setInterval(getDir, 300000) //Refreshes after 5min
