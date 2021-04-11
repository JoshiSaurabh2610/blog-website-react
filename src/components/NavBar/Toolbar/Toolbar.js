import classes from './Toolbar.module.css';
import React from 'react'
import Logo from '../../Logo/logo'
import Navitem from '../NavItem/Navitem'
import Hamberger from '../../HambergerMenu/Hamberger';
import Aux from '../../Auxillary/Auxillary';

const Toolbar=(props)=>{
    return(
        <Aux>
            <div className={classes.Toolbar}>
                <Hamberger clicked={props.toggle}
                            open={props.show}/>
                <Logo />
                <div className={classes.Navitems}>
                    <Navitem link="/posts">Posts</Navitem>
                    <Navitem link="/create-post">Create Post</Navitem>
                    <Navitem link="/about">About</Navitem>
                </div>
            </div>
            <div className={classes.marginBottom}></div>
        </Aux>

    );
}
export default Toolbar;