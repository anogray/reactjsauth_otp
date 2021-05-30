import React, { useEffect, useState } from 'react';
import axios from "axios"

const LiImages = (props) => {

    const [data, setdata] = useState(2);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const callImg = ()=> {
            console.log("thumburl",props.imgUrl)
        // axios.get(`${props.thumbImages}`).then((imgData)=>{
        //     setdata(imgData.data)
        // })
    }
    callImg();
    }, []);

    return (
        <div>
            <img src={props.imgUrl}></img>
        </div>
    );
}

export default LiImages;
