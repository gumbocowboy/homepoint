import React from 'react';
import ReactDOM from 'react-dom';
var config = require('../config');

const API = config.networkAPI;
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
    let macs = [];
    let matched = [];
    let knownHeader 
    matched = parsed.matched;
    macs = parsed.macs;
    let foo = []
    //Listing all known device names
    if(matched.length === 0){
       knownHeader =(
        <p><strong>{matched.length} known devices.</strong></p>
      )
    } else{
       knownHeader = (
        // <div className="dropdown">
        //     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //     {matched.length} known devices.
        //   </button>
        //   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //     <a className="dropdown-item" href="#">Action</a>
        //     <a className="dropdown-item" href="#">Another action</a>
        //     <a className="dropdown-item" href="#">Something else here</a>
        //   </div>
        // </div>
      <p>{matched.length} devices</p>
        )
    }

    matched.forEach(element => {
      foo.push(
        <p>{element}</p>
      )
      
    });

    const element = (
      <div className="pane col-lg col-md-12 text-center" id="networkCol">
        <h4>Devices on Network</h4>
        <p>{parsed.devices}</p>
        <p>{macs[1]}</p>
        <p><strong>{matched.length} Known Devices</strong></p>
        {knownHeader}

      </div>
      );
    ReactDOM.render(element, document.getElementById('networkPane'))
    
  })
}


getDevices();
setInterval(getDevices, 300000)
