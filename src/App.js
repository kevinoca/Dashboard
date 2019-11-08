import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import BlockUi from "../src/components/blockUi"
import AppLayout from "../src/components/appLayout"
import { toast as toastify } from 'react-toastify'
import { showNotification } from "../src/components/utils"
import 'react-toastify/dist/ReactToastify.css'

import PrivateRouter from "../src/components/PrivateRouter"
import Home from "../src/views/home"
import Login from "../src/views/login"
import Dashboard from "../src/views/dashboard"
import UserProfile from "../src/views/userProfile"
import PageNotFound from "../src/views/pageNotFound"
import Authentication from "./components/authentication"

toastify.configure()

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      blocking: false,
      authed: localStorage.length > 0,
      user: JSON.parse(localStorage.getItem("USER_DATA"))
    }

    this.Authentication = new Authentication()

  }

  signIn = userData => this.setState({ authed: true, user: userData })

  signOut = () => this.setState({ authed: false, user: null })

  setBlocking = status => this.setState({ blocking: status })

  showNotification = (data, type) => showNotification(data, type)

  render = () => {

    const { authed, user, blocking } = this.state

    const commonData = {
      authed: authed,
      setBlocking: this.setBlocking,
      showNotification: this.showNotification
    }

    return <>

      <div className="App" style={{ position: "relative", padding: "1em" }}>

        <BlockUi blocking={blocking} message="Please wait" color="#dc2127" />

        <AppLayout>

          <Router>
            <Switch>
              <Route exact path="/" render={props => <Home {...props} {...commonData} />} />
              <Route exact path="/home" render={props => <Home {...props} {...commonData} />} />
              <Route exact path="/login" render={props =>
                (authed)
                  ? <Redirect to="/dashboard" />
                  : <Login {...props} {...commonData} signIn={this.signIn} />
              } />
              <PrivateRouter exact path="/dashboard" component={Dashboard} {...commonData} user={user} signOut={this.signOut} />
              <PrivateRouter exact path="/user-profile" component={UserProfile} {...commonData} user={user} signOut={this.signOut} />
              <Route render={props => <PageNotFound {...props} />} />
            </Switch>
          </Router>

        </AppLayout>

      </div>

    </>

  }

}
export default App;