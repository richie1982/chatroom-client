import React, { useState } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom'
import { sendChat } from './services/server'
import { Store } from './Store'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import LogIn from './components/LogIn';

const style = {
  display: "flex",
  justifyContent: 'center',
  alignItems: "center",
  flexDirection: 'column',
}

const App = () => {

  let user = "richie"

  const [ textValue, setTextValue ] = useState("")

  const handleSubmit = (user, msg) => {
    sendChat(user, msg)
    setTextValue("")
  }

  return (
    <Store>
      <Switch>
        <Route exact path='/' component={props => <HomePage {...props}/>} />  
        <Route path='/signup' component={props => <SignUp {...props}/>} />  
        <Route path='/login' component={props => <LogIn {...props}/>}/>
        <Route path='/:id' component={props => <UserPage {...props}/>} />   
      </Switch>
    </Store>
  );
}

export default withRouter(App);
