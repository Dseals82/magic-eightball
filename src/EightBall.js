import React, {Component} from 'react';
import './EightBall.css'

const inputStyle = {
  width: 250,
  margin:'2rem',
  borderRadius: 3
}

class EightBall extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
  ask(){
    if (this.state.userInput){
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event){
    this.setState({
      userInput: event.target.value
    });
  }
  render(){
    const possibleAnswers = [
    '"It is certain"',
    '"It is decidedly so"',
    '"Without a doubt"',
    '"Yes, definitely"',
    '"You may rely on it"',
    '"As I see it, yes"',
    '"Outlook good"',
    '"Yes"',
    '"Signs point to yes"',
    '"Reply hazy try again"',
    '"Ask again later"',
    '"Better not tell you now"',
    '"Cannot predict now"',
    '"Concentrate and ask again"',
    '"Don\'t count on it"',
    '"My reply is no"',
    '"My sources say no"',
    '"Most likely"',
    '"Outlook not so good"',
    '"Very doubtful"'
  ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <div className="EightBall-outter">
          <div className="EightBall-inner">
            <h1 id="eight">8</h1>
            <h3>Answer:</h3>
            <p>{answer}</p>
          </div>
        </div><br/>
        <h2>Ask any question...</h2>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button className="btn" onClick={this.ask}>
          Press for Answer
        </button><br />
      </div>
    );
  }
}

export default EightBall;
