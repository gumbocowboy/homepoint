import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API = "http://192.168.10.104:5000/love";
function fetchJSON(url) {
  console.log("fetching python from localhost");
  return fetch(url)

}
const days = fetchJSON(API)

days.then(response => {
  return response.json();
  })
  .then(function(totaldays){
    let returned = (JSON.stringify(totaldays))
    let parsed = JSON.parse(returned);
    const element =(
      <div>
        <small>I've been in love for..</small>
        <div class="w-100"></div>
        <i class="fas fa-heart fa-7x" id="heartIcon"></i>
        <h2>{parsed.days} days! </h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('loveCol'))
  })

  //   return (
  //     <div className="Love">
  //     <p>{this.state.pyResp}</p>
  //     </div>
  //   )
  // }






// const request = require('request');
// request(API, function(error, response, body){
//     console.log('error', error);
//     console.log('statusCode:', response && response.statusCode);
//     console.log('body:', body);
// })





    // fetch(API)
    // .then(function(theResponseObject) {
    //   return theResponseObject.methodToGetToData()
    // })
    // .then(function(myUsableData) {
    //   // manipulate/show/log our data
    // })
    // .catch(function(error){
    //  // error handling here
    // })
    // // console.log("fetching python");
    // // fetch(API, {
    // //     method:"GET",
    // // })
    // // .then(function(response){
    // //     response.json().then(data => ({
    // //         data:data,
    // //         status:response.status
    // //     })
    // //     ).then(res => {
    // //         console.log(res.status, res.data.title);
    // //     }));
