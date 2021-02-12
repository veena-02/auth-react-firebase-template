import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from './../../Constants/routes';

const Navigation=()=>{
    return(
        <div style={{display: 'flex',backgroundColor:'rgb(255,255,255,0.8)'}}>
                <div>
                    <NavLink style={{margin:'10px',textDecoration: 'none',color:'black'}} to={ROUTES.SIGN_IN}>Sign In</NavLink>
                </div>
                <div>
                    <NavLink style={{margin:'10px',textDecoration: 'none',color:'black'}} to={ROUTES.HOME}>Home</NavLink>
                </div>
                <div>
                    <NavLink style={{margin:'10px',textDecoration: 'none',color:'black'}} to={ROUTES.LANDING}>Landing</NavLink>
                </div>
                <div>
                    <NavLink style={{margin:'10px',textDecoration: 'none',color:'black'}} to={ROUTES.ACCOUNT}>Account</NavLink>
                </div>
                <div>
                    <NavLink style={{margin:'10px',textDecoration: 'none',color:'black'}} to={ROUTES.ADMIN}>Admin</NavLink>
                </div>
        </div>
    );
}
export default Navigation;