// import React from 'react';
import './App.css';
import { Card } from './components';

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Card 
        title="Java Script"
        content="JavaScript is a scripting web-language"
        color="yellow"
        // backdropFilter="invert(0.7)"
        image='https://it.astin.co/Content/img/vacancy/1b2df3d2-daa6-41ca-9576-300e09cb1b55bd2fe724-d0a0-4982-8f0b-d28e2c52f22evacancyJs.png'
      />
      <Card
        title="React"
        content="Framework by Facebook"
        // backdropFilter="invert(0.7)"
      />
      <Card
        title="Node JS"
        content="JavaScript runtime built on Chrome's V8"
        color="rgba(13, 214, 103, 0.911)"
        image='https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg'
      />
      <Card
        title="Webpack"
        content="Module bundler"
        image='https://cdn.worldvectorlogo.com/logos/webpack.svg'
      />
    </div>
  );
}

export default App;
