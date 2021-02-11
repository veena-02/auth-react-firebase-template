import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Navigation from './../Navigation/index';
import * as ROUTES from './../../Constants/routes';
import SignIn from './../SignIn/index';
import SignUp from './../SignUp/index';
import Landing from './../Landing/index';
import PasswordForget from './../PasswordForget/index';
import Home from './../Home/index';
import Account from './../Account/index';
import Admin from './../Admin/index';

const App=()=>{
    return(
        <BrowserRouter>
            <Navigation />
            <div>
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
                <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
                <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route exact path={ROUTES.ACCOUNT} component={Account} />
                <Route exact path={ROUTES.ADMIN} component={Admin} />
            </div>
        </BrowserRouter>
    );
}
export default App;