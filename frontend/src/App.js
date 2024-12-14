import { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/dashboard';
import UserAccountSetting from './components/Dashboard/UserAccountSetting';
import UserProfile from './components/Dashboard/UserProfile';
import SignIn from './components/user/SignIn';
import Signup from './components/user/Signup';
import { Provider, Context } from './context/userContext';

const ProtectRoute = ({ component: Component, ...rest }) => {
  const { state: { user, error, loading, userinfo }, userSignUp, userSignIn } = useContext(Context);
  return (
    <Route
      {...rest}
      render={props => (
        userinfo ?
          <Component {...props} /> :
          <Redirect to='/signin' />
      )}
    />
  )
}

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signin" component={SignIn} />
          <ProtectRoute path="/user_account_setting" component={UserAccountSetting} />
          <ProtectRoute path="/dashboard" component={Dashboard} />
          <ProtectRoute path="/userprofile" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
