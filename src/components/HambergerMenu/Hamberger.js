import classes from './Hamberger.module.css';
import React from 'react'
const Hamberger=(props)=>{
    // console.log(props.open);
    let classAttached=[classes.nav_icon];
    if(props.open){
        classAttached=[classes.nav_icon,classes.open];
    }
    return(
        <div className={classAttached.join(' ')}
            onClick={props.clicked}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
export default Hamberger;