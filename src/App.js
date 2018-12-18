import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faStop, faBraille } from '@fortawesome/free-solid-svg-icons';

// library.add(faIgloo)


class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      textToBe: '',
      braille: ''
    };
  }

  callWatson = () => {

      fetch('https://pacific-cliffs-60293.herokuapp.com/api/speech-to-text/token')
    .then(function(response) {
        return response.text();
    }).then((token) => {
      // console.log(token);
      var stream = recognizeMicrophone({
          token: token, // use `access_token` as the parameter name if using an RC service
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
      });
      stream.on('data', (data) => {
        this.setState({
          'text': data.alternatives[0].transcript
        });


        let one = this.state.text.split(' ').join('%20');

        one = one.slice(0, one.length-3);

        this.setState({
          'textToBe': one
        });

      });

      stream.on('error', function(err) {
          console.log(err);
      });
        document.querySelector('#stop').onclick = stream.stop.bind(stream);
      }).catch(function(error) {
          console.log(error);
      });
    
  }

  callBraille = () => {

    fetch(`https://api.funtranslations.com/translate/braille/unicode.json?text=${this.state.textToBe}`, {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
      'Access-Control-Allow-Origin': 'https://redvanisation.github.io/braille-generator/'
    })
    .then((resp) => resp.json())
    .then((data) => {
      
      this.setState({
        braille: data.contents.translated.join(' ')
      })
      // console.log(this.state.braille);
    })

}

  render() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          {/* <h2 className="main__h2 heading-secondary">Input</h2>
          <br /> */}
          {/* <h3 className="main__text">Pl</h3> */}
          

          
          <button className="main__btn main__btn--record" onClick={this.callWatson}> <FontAwesomeIcon icon={faMicrophone} className="main__btn--fa-icon"/> Click to Record!</button>
          <button className="main__btn main__btn--stop" id="stop"><FontAwesomeIcon icon={faStop} className="main__btn--fa-icon"/> Stop Recording!</button>
          
          <div className="main__input-div">{this.state.text}</div>


          <button className="main__btn main__btn--convert" onClick={this.callBraille}><FontAwesomeIcon icon={faBraille} className="main__btn--fa-icon"/> convert to braille!</button>
          <div className="main__output">{this.state.braille}</div>


        {/* <Input callWatson={this.callWatson.bind(this)} /> */}
        {/* <Output {...this.props.braille} /> */}
          {/* <h2 className="main__h2 heading-secondary">Output</h2> */}
        </div>
        <Footer />
      </div> 
    );
  }
}

export default App;
