import 'bulma/css/bulma.min.css';
import React from 'react';
import './App.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
      <div className="App">
          <section className="hero is-primary">
              <div className="hero-body">
                  <p className="title">Personal Digital Assistants</p>
              </div>
          </section>

          <div className="container">
              <section className="section">
                  <div className="columns">
                      <div className="column is-4">
                          <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa was created by amazon and helps you buy things"/>
                      </div>
                      <div className="column is-4">
                          <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} description="Cortana was made by Microsoft who knows what it does"/>
                      </div>
                      <div className="column is-4">
                          <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Siri was made by apple and is being phased out"/>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  );
}

export default App;
