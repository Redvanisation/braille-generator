import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Input from './components/Input';
// import Output from './components/Output';

import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';


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
    fetch('http://localhost:3002/api/speech-to-text/token')
    .then(function(response) {
        return response.text();
    }).then((token) => {
      console.log(token);
      var stream = recognizeMic({
          token: token, // use `access_token` as the parameter name if using an RC service
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
      });
      stream.on('data', (data) => {
        // console.log(data);
        this.setState({
          'text': data.alternatives[0].transcript
        });




        // const wht = '\s*';
        let one = this.state.text.split(' ').join('%20');

        one = one.slice(0, one.length-3);

        this.setState({
          'textToBe': one
        });

        // console.log('text to be: ', this.state.textToBe);
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

    fetch(`https://api.funtranslations.com/translate/braille/unicode.json?text=${this.state.textToBe}`)
    .then((resp) => resp.json())
    .then((data) => {
      
      this.setState({
        braille: data.contents.translated.join(' ')
      })
      console.log(this.state.braille);
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

          <button className="main__btn main__btn--record" onClick={this.callWatson}>Click to Record!</button>
          <button className="main__btn main__btn--stop" id="stop">Stop Recording!</button>
          
          <div className="main__input-div">{this.state.text}</div>


          <button className="main__btn main__btn--convert" onClick={this.callBraille}>convert to braille!</button>
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
