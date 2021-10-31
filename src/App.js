import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutRoute from './LayoutRoute.js';
import LandingScreen from './LandingScreen.js';
import RegistrationScreen from './RegistrationScreen.js';
import LoginScreen from './LoginScreen.js';
import ProfileScreen  from './ProfileScreen.js';
import JobPostScreen from './JobPostScreen.js';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={LandingScreen} />
                <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
                <LayoutRoute path="/login" exact={true} component={LoginScreen} />
                <LayoutRoute path="/profile" exact={true} component={ProfileScreen} />
                <LayoutRoute path="/jobs/create" exact={true} component={JobPostScreen} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;