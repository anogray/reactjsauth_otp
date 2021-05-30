import React, { useEffect, useState } from 'react';
// const axios = require("axios");
import axios from "axios"
import LiImages from '../LiImages';
const Photos = () => {

    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() =>
    {
        const dataArr = async()=> {
            //  let data = await axios.get("https://jsonplaceholder.typicode.com/photos")
             let data = await axios.get("http://localhost:3002/photos")

            // let data = [{
            //     "albumId": 1,
            //     "id": 1,
            //     "title": "accusamus beatae ad facilis cum similique qui sunt",
            //     "url": "https://via.placeholder.com/600/92c952/",
            //     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            //   },
            //   {
            //     "albumId": 1,
            //     "id": 2,
            //     "title": "reprehenderit est deserunt velit ipsam",
            //     "url": "https://picsum.photos/200",
            //     "thumbnailUrl": "https://via.placeholder.com/150/771796"
            //   }]
            setdata(data.data)

        } 
        dataArr() 
    }, [])
    console.log(data)
    //<LiImages thumbImages={data.thumbnailUrl}/> 
    
    return (
        <div>            
            {data.length > 0 ? 
            data.map((data)=> 
            <div key={data.id}>
            <li >{data.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={data.url}/>   </li>
            </div>
            )  : "Loadin Pics"}


        </div>
    );
}

export default Photos;
