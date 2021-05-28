import React from "react";
import './loader.css';
import { CircularProgress } from '@material-ui/core';

const Loading = () => {
    return(
        <div id='loader' className='loading'> 
            <CircularProgress size={80} />
        </div>
    )
}
 
export default Loading;