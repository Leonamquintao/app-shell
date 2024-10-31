import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../store/actions';

import '../styles/theme.scss';
import logo from "../assets/react.png";

class Messenger extends Component {

  constructor(props) {
    super(props);
    this.state = { title: 'App-shell', sender: 'Shell', message: '' };
  };

  
  render() {

    return (
      <div className={`container ${this.props.mainState.theme}`}>

        <div className="header">
          <h2 className="title">{this.state.title}</h2>
          <img src={logo} className="app-logo" alt="logo" />
        </div>

        <div className="formContainer">
          <h3 className="title">Sender: {this.state.sender.toUpperCase()}</h3>
          <input type="text" name="text" 
           value={ this.state.message } className="input-style"
           onChange={ this.handleChangeText.bind(this) } 
          />

          <button className="btnStyle" onClick={ this.updateMessage.bind(this) }>Enviar</button>
          <br />
          <small className="item">{this.props.mainState.theme}</small>

        </div>

        { this.renderLastMessage() }

      </div>
    );
  }

  /*METHODS*/
  handleChangeText(event) {
    this.setState({ message: event.target.value });
  }

  updateMessage() {
    this.props.addMessage({
      sender: this.state.sender,
      message: this.state.message,
      at: new Date().toISOString()
    });

    this.setState({ message: '' });
  }

  renderLastMessage() {
    if(this.props.mainState.messages.length > 0) {
      let messages = this.props.mainState.messages;
      let lastEmement = messages[messages.length -1];
      return (
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <p className="msgStyle">
            <span> last msg:</span> { lastEmement.message }
          </p>
          <p className="msgStyle"><small>
            <span>From: </span> {lastEmement.sender} 
            <span> AT:</span> {lastEmement.at}</small>
          </p>
        </div>
      );
    }
  }

}

const mapStateToProps = state => {
  return { mainState: state.mainReducer }
};

export default connect(mapStateToProps, actions)(Messenger);
