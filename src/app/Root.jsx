import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';


var App = require('./App.jsx');
var Parent = require('./Parent.jsx');
var Child = require('./Child.jsx');
var AssholeGenerator = require('./modules/AssholeGenerator/index.jsx');

var Root = React.createClass({
  componentWillReceiveProps: function (nextProps){
    console.log('nextProps are', nextProps)
  },

  render: function() {
    console.log('root props',this.props);

    var assholeGeneratorState = this.props.store.getState().assholeGenerator;
    console.log('caption is',assholeGeneratorState.caption)
    return (
      <div>
        <Provider store={this.props.store}>
          <Router>
            <Route path="/" component={App} {...this.props}>
              <Route path="/generator" component={AssholeGenerator} 
                
                

                

              />
              <Route path="view" component={Child} />
              <Route path="view/:id" component={Child} />
            </Route>
          </Router>
        </Provider>
<DebugPanel top right bottom>
          <DevTools store={this.props.store} monitor={LogMonitor} />
        </DebugPanel>        
      </div>
    );
  }
});

export default Root;

// store={this.props.store}

//                 assholeName={assholeGeneratorState.assholeName}
//                 assholeBreed={assholeGeneratorState.assholeBreed}
//                 ownerLocation={assholeGeneratorState.ownerLocation}
//                 ownerName={assholeGeneratorState.ownerName}
//                 caption={assholeGeneratorState.caption}
//                 date={assholeGeneratorState.date}
//                 image={assholeGeneratorState.image}
//                 imageStyle={assholeGeneratorState.imageStyle}

//                 email={assholeGeneratorState.email} 
//                 charLimit={assholeGeneratorState.charLimit}
//                 naturalImageDimensions={assholeGeneratorState.naturalImageDimensions}
//                 heroStyle={assholeGeneratorState.heroStyle}