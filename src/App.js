import React, { Component } from 'react';
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount = () => {
    const user = {
      name: "Mazen"
    }
    this.props.setUser(user)
  }
  render() {
    console.log(this.props.currentUser)
    return (
      <div>
        <h1>Redux Testing</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    setUser: (userObject) => {
      dispatch({type: "SET_USER", payload: userObject})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

