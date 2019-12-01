import React, { useContext, useEffect } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom'
import { CTX } from './Store'
import { validateUser } from './services/api'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import LogIn from './components/LogIn';


const App = (props) => {

  const [ , action ] = useContext(CTX)

  const validate = () => {
    if (!!localStorage.token) {
        validateUser()
        .then(data => {
          if (data.error) {
            alert(data.error)
            props.history.push('/')
            }
          action({type: "ADD_USER", payload: data})
          props.history.push(`/${data._id}`)
        })
    }
  }

  useEffect(() => {
    validate()
  }, [])

  return (
      <Switch>
        <Route exact path='/' component={props => <HomePage {...props}/>} />  
        <Route path='/signup' component={props => <SignUp {...props}/>} />  
        <Route path='/login' component={props => <LogIn {...props}/>}/>
        <Route path='/:id' component={props => <UserPage {...props}/>} />   
      </Switch>
  );
}

export default withRouter(App);
