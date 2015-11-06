'use strict';

import React from 'react';
import Preview from './Preview'
import Memeform from './Memeform'


var BootstrapCSS = require('bootstrap/dist/css/bootstrap.css');
var FontAwesome = require("font-awesome-webpack");

var AssholeGenerator = React.createClass({

    render: function () {

        console.log('main generator ',this.props, this.state)
        console.log(this);
        return (
            <div className="AssholeGenerator container">
               <div className="row">
                    <div className="col-lg-7">
                        <Preview {...this.props} />
                    </div>
                    <div className="col-lg-5">
                        <Memeform {...this.props}/>
                    </div>
                </div>
           </div>
        );
    }
});

export default AssholeGenerator;
                           
  