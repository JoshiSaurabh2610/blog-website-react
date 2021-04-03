import classes from './Toolbar.module.css';
import React from 'react'
import Logo from '../../Logo/logo'
import Navitem from '../NavItem/Navitem'
import Hamberger from '../../HambergerMenu/Hamberger';

const Toolbar=(props)=>{
    return(
        <div className={classes.Toolbar}>
            <Hamberger clicked={props.toggle}
                        open={props.show}/>
            <Logo />
            <div className={classes.Navitems}>
                <Navitem active link="/">Home</Navitem>
                <Navitem link="/CreatPost">Create Post</Navitem>
                <Navitem link="/FullPost">FullPost</Navitem>
            </div>
        </div>
    );
}
export default Toolbar;