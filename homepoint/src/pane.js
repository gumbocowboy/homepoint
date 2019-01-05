import React from 'react';

import ReactDOM from 'react-dom';


const element = <div className="bar">


    <div className="pane col-lg col-md-12 text-center" id="statusCol">
        <h4>MOTHERBASE//STATUS</h4>
        <i className="fas fa-hdd fa-7x"></i>
        {/* <h4>{{grandFree}} GB free</h4> */}
        
    </div>
    </div>;

ReactDOM.render(element, document.getElementById('panes'));