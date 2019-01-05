import React from 'react';
import ReactDOM from 'react-dom';

const API = "http://192.168.10.104:5000/network"
function fetchJSON(url){
  console.log("Fetching Network");
  return fetch(url)
}

function getDevices(){
  const devices = fetchJSON(API)
  devices.then(function(response){
    return response.json();
  })
  .then(function(devices){
    let returned = (JSON.stringify(devices));
    let parsed = JSON.parse(returned);
    const element = (
      <div className="pane col-lg col-md-12 text-center" id="networkCol">
        <h4>Devices on Network</h4>
        <p>{parsed.devices}</p>
      </div>
      );
    ReactDOM.render(element, document.getElementById('networkPane'))
    
  })
}
getDevices();
setInterval(getDevices, 300000)
