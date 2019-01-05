import React from 'react';
import ReactDOM from 'react-dom';

const API = "http://192.168.10.104:5000/weather"
function fetchJSON(url){
    console.log("Fetching Weather from homepoint");
    return fetch(url)
}
//The three icons
function DisplayClear(props){
    return <span id="ClearIcon"><i className="fas fa-sun fa-7x"></i></span>

}
function DisplayRain(props){
    return <span id="RainIcon"><i className="fas fa-cloud-rain-7x"></i></span>

}
function DisplayClouds(props){
    return <span id="CloudsIcon"><i className="fas fa-cloud fa-7x"></i></span>

}
function IconDisplay(props){
    
}
const weather = fetchJSON(API)

weather.then(response => {
    return response.json();
})
.then(function(newWeather){
    let returned = (JSON.stringify(newWeather));
    let parsed = JSON.parse(returned);
    let element = 
    <div id="weatherWidget"> 
        <h1>{parsed.temp}&deg;</h1>
        <DisplayClear/> 
        <h2>{parsed.status}</h2>
        <small>At home</small>
</div>;

ReactDOM.render(element, document.getElementById('weatherCol'))
})

