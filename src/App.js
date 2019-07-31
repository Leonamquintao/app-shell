import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    console.log(this.props.mainState.theme)
  }

  componentDidMount() {
    window.addEventListener('DIALOG_VALUE_CHANGE', this.fetchData);
  }

  componentWillUnmount() {
    window.removeEventListener('DIALOG_VALUE_CHANGE', this.fetchData);
  }
  
  render() {
    const { mainState } = this.props;
    return (
      <div style={styles.wrapper}>
       <h1>theme: {this.props.mainState.theme}</h1>

      </div>
    );
  }

  /* Methods */
  fetchData(event) {
    if(event.detail.action == 'reset state') {
      this.props.resetState();
    } else if(event.detail.sender == "theme-selector") {
      this.props.changeTheme(event.detail.message)
    }
    else {
      this.props.addMessage(event.detail);
    }
  }
}

const mapStateToProps = state => {
  return { mainState: state.mainReducer }
};

export default connect(mapStateToProps, actions)(App);

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}
