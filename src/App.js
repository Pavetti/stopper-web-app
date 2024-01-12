import React, {Component} from 'react'; 
import './App.css';
import { type } from '@testing-library/user-event/dist/type';
import styled from 'styled-components';
import { GlobalStyle } from './font';



class Cloak extends Component {

  constructor(props) {
    super(props);
    this.state = {button1:"start",button2:"restart", cloakActive:false, time:0,rounds:[]}
    this.button2Logic = this.button2Logic.bind(this);
    this.button1Logic = this.button1Logic.bind(this);
    this.interval = null;

  }
  button2Logic(event) {
    event.preventDefault();
    if(this.state.cloakActive){
      const roundTime = formatTime(this.state.time);
      const rounds = this.state.rounds;
      rounds.push(roundTime);
      this.setState({rounds:rounds});
    }
    else{
      this.setState({time:0});
      this.setState({rounds:[]})
    }
  }
  button1Logic(event) {
    event.preventDefault();
    let active = !this.state.cloakActive;
    this.setState({cloakActive:active});
    if(active){
      this.interval = setInterval(() => this.setState({time:this.state.time+1}),10);
      this.setState({button1:"stop"});
      this.setState({button2:"round"});
    }
    else{
      clearInterval(this.interval)
      this.setState({button1:"start"});
      this.setState({button2:"restart"}); 
    }
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.rounds.forEach(round => {
          <li>{round}</li>
          console.log(typeof this.state.rounds)
        })}
        {this.state.rounds.map(round => {     
           return (<li>{round}</li>) 
        })}
        </ul>
        <p>{formatTime(this.state.time)}</p>
        <BetterButton onClick = {this.button1Logic}>{this.state.button1}</BetterButton>
        <BetterButton onClick = {this.button2Logic}>{this.state.button2}</BetterButton>
      </div>
    );
  }

}
const BetterButton = styled.button`
        paddiong 10px
        border: none;
        background-color: #50404D;
        color: white;
        margin: 10px;
`;

const GridDiv = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #40404F;
        color: white;
        margin: 60px;
        padding: 20px;
`;



function formatTime(time) {
  let minutes = Math.floor(time / 6000);
  let seconds = Math.floor((time % 6000) / 100);
  let milliseconds = time % 100;

  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }
  if (milliseconds < 10) {
    milliseconds = "0" + milliseconds.toString();
  }

  return minutes + ":" + seconds + ":" + milliseconds;
}



class App extends Component {
  constructor(props) {
      super(props);
  }
  render() { 
      return (
          <GridDiv>
            <GlobalStyle/>
            <h1>Stopper</h1>
            <Cloak/>
          </GridDiv>
      );
  }
}
export default App;