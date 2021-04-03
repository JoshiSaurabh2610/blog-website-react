import React from 'react';
import classes from './backdrop.module.css'
const Backdrop=(props)=>{
    let classnames=classes.Backdrop;
    if(!props.show){
        classnames="Disable";
    }
    return(
        <div 
            className={classnames}
            onClick={props.cancel}>
        </div>
    );
};
export default Backdrop;