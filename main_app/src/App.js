import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import about_me from './about_me/about_me.js';
import team from './team.png';

function MeetingPage() {
  return (
    <div className="MeetingPage">
      <h1>New Meeting Page</h1>
      {/* Add your meeting content here */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <img src="https://www.atlantahistorycenter.com/app/uploads/2022/02/ASL_Logo_Block-1440x810.jpg" alt="Logo" />
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">How we did it</a></li>
              <li><a href="#">About us</a></li>
              <p style={{ paddingLeft: '650px', fontFamily: 'cursive', color: '#FF5733', fontWeight: '800', fontSize: '25px' }}> ASL for Everyone</p>
            </ul>
          </nav>
        </header>

        <div className='Home Page' style={{ paddingBottom: '450px' }}>
          <div className="Body" style={{ width: '100%' }}>
            <div style={{ padding: "40px", marginLeft: '100px', marginTop: '20vh', width: '80vh', backgroundColor: "#fff0db", borderWidth: '3px', float: 'left', display: 'inline', width: '40%', borderRadius: '25px' }}>
              <p className="main text" style={{ fontSize: '40px', fontWeight: '300', fontFamily: 'arial', marginTop: '0px' }}>
                Video Calls for those with Hearing Dissabilities
              </p>
              <p className="sub text" style={{ marginTop: "0vh", fontSize: '20px', fontWeight: '300', fontFamily: 'arial', }}>
                Real-time translation to communicate with those you love
              </p>
              <div className="Buttons" style={{ marginTop: "20px", zIndex: '-1' }}>
                <div clasName="main_button_rectanlge">
                  <Link to="/new-meeting" className="button-51" role="button">New Meeting</Link>
                  <button className="button-51" style={{ paddingRight: "50px" }} role="button">Enter a code</button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ float: 'left', display: 'inline', width: '60%' }}>
            <img src="https://media.istockphoto.com/id/1329488849/vector/gesturing-children-showing-signs-with-hands-expression-of-joy-and-approval-boys-and-kids.jpg?s=612x612&w=0&k=20&c=wcQj2DB0La1l4Otr4CMoovErlQSOENNS2Ub1hMHqVJ0=" alt="" style={{ width: "800px", height: "250px", marginTop: '-300px', marginRight: '-400px', float: 'right', display: 'inline', width: '49%' }} />
          </div>
          <div className="RightBody"></div>
        </div>

        <div className='Our Mission' style={{ paddingBottom: '450px' }}>
          <hr style={{ marginTop: '100px', color: '#d3d3d3', width: '75%' }} />
          <div className="Body" style={{ width: '100%' }}>
            <div style={{ padding: "40px", marginLeft: '700px', marginTop: '20vh', width: '80vh', backgroundColor: "#fff0db", borderWidth: '3px', float: 'left', display: 'inline', width: '40%', borderRadius: '25px' }}>
              <p className="main text" style={{ fontSize: '40px', fontWeight: '300', fontFamily: 'arial', marginTop: '0px' }}>
                Our Mission
              </p>
              <p className="sub text" style={{ marginTop: "0vh", fontSize: '20px', fontWeight: '300', fontFamily: 'arial', textAlign: 'left' }}>
                Having grown up facing the challenges of communicating with those with hearing disabilities, we felt the need to improve and better the current systems in place. We hope to improve connections with those with hearing problems and their loved ones.
              </p>
            </div>
          </div>
          <div style={{ float: 'left', display: 'inline', width: '60%', marginLeft: '-690px' }}>
            <img src="https://as1.ftcdn.net/v2/jpg/03/60/88/96/1000_F_360889653_lYT2lrNCUfz0N3Ibj9UB2ghEcjj1r8nS.jpg" alt="" style={{ width: "800px", height: "250px", marginTop: '-300px', marginRight: '-400px', float: 'right', display: 'inline', width: '49%' }} />
          </div>
          <div className="RightBody"></div>
          <div></div>
        </div>

        <div className='How We Did It' style={{ paddingBottom: '450px' }}>
          <hr style={{ marginTop: '100px', color: '#d3d3d3', width: '75%' }} />
          <div className="Body" style={{ width: '100%' }}>
            <div style={{ padding: "40px", marginLeft: '100px', marginTop: '20vh', width: '80vh', backgroundColor: "#fff0db", borderWidth: '3px', float: 'left', display: 'inline', width: '40%', borderRadius: '25px' }}>
              <p className="main text" style={{ fontSize: '40px', fontWeight: '300', fontFamily: 'arial', marginTop: '0px' }}>
                How we Did It
              </p>
              <p className="sub text" style={{ marginTop: "0vh", fontSize: '20px', fontWeight: '300', fontFamily: 'arial', textAlign: 'left' }}>
                We used a TensorFlow Keras model to run the data. We got the WLASL dataset from Kaggle, and preprocessed the data and used a 3D convolutional neural network as the model. We then set up a website with a video call and used TensorFlow for JavaScript to detect ASL and convert to text, and spoke live with text-to-speech.
              </p>
            </div>
          </div>
          <div style={{ float: 'left', display: 'inline', width: '60%' }}>
            <img src="https://as1.ftcdn.net/v2/jpg/05/16/11/90/1000_F_516119045_AuyJJYx6wKrDSdrFjNiqrRIJqxc0hMMs.jpg" alt="" style={{ width: "800px", height: "250px", marginTop: '-300px', marginRight: '-400px', float: 'right', display: 'inline', width: '49%' }} />
          </div>
          <div className="RightBody"></div>
        </div>

        <div className='About us' style={{ paddingBottom: '450px' }}>
          <hr style={{ marginTop: '100px', color: '#d3d3d3', width: '75%' }} />
          <div className="Body" style={{ width: '100%' }}>
            <div style={{ padding: "40px", marginLeft: '700px', marginTop: '20vh', width: '80vh', backgroundColor: "#fff0db", borderWidth: '3px', float: 'left', display: 'inline', width: '40%', borderRadius: '25px' }}>
              <p className="main text" style={{ fontSize: '40px', fontWeight: '300', fontFamily: 'arial', marginTop: '0px' }}>
                About us
              </p>
              <p className="sub text" style={{ marginTop: "0vh", fontSize: '20px', fontWeight: '300', fontFamily: 'arial', textAlign: 'left' }}>
                {/* Add your about us content here */}
              </p>
            </div>
          </div>
          <div style={{ float: 'left', display: 'inline', width: '60%', marginLeft: '-690px' }}>
            <img src="https://drive.google.com/file/d/1oFp7K77x6XgNCDZQw3V8GmVZjDCoWjsG/view?usp=sharing" alt="" style={{ width: "800px", height: "250px", marginTop: '-300px', marginRight: '-400px', float: 'right', display: 'inline', width: '49%' }} />
          </div>
          <div className="RightBody"></div>
          <div></div>
        </div>

        <div className='Bottom part'>
          <p style={{ backgroundColor: '#ADD8E6', width: '100%', height: '200px', paddingTop: '100px', marginBottom: '0px' }}>
            @Copyright 2024 Cuperinto Coders
          </p>
        </div>

        <Switch>
          <Route path="/new-meeting" component={MeetingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
