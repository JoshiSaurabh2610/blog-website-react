import classes from './SideDrawer.module.css';
import React from 'react'
import Navitem from '../NavItem/Navitem'
import Hamberger from '../../HambergerMenu/Hamberger';
const SideDrawer=(props)=>{
    let classAttached=[classes.SideDrawer,classes.close];
    if(props.show){
        classAttached=[classes.SideDrawer,classes.open];
    }
    return(
        <div className={classAttached.join(' ')}>
           <Hamberger clicked={props.toggle}
                        open={props.show}/>
            <Navitem link="/">Home</Navitem>
            <Navitem link="/create-post">Create Post</Navitem>
            <Navitem link="/about">About</Navitem>
        </div>
    );
};
export default SideDrawer;