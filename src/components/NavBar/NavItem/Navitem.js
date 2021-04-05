import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Navitem.module.css'
const Navitem=(props)=>{
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                exact
                to={
                    {
                        pathname: props.link,
                        // hash: '#submit',
                        // search: '?quick-submit=true'
                    }
                }
                activeStyle={
                    {
                        backgroundColor:'white',
                        fontWeight:'bold',
                        borderBottom:'4px solid black',
                        color:'black'
                    }
                }
            >{props.children}
            </NavLink>
        </li>
    );
};
export default Navitem;