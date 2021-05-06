import React, {useState, useEffect} from "react";
import './loader.css';
import { CircularProgress } from '@material-ui/core';

const Loading = () => {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    // //   window.addEventListener('load', () => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000);
    // //   })
    // })
    return(
        <div className="container">
            <div id='loader' className='open'>
                <div className="cargando">
                    <CircularProgress />
                </div>
            </div>
        </div>
    )
}
 
export default Loading;