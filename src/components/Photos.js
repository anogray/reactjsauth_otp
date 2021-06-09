import React, { useEffect, useState } from 'react';
// const axios = require("axios");
import axios from "axios"
import LiImages from '../LiImages';
const Photos = () => {

    const [data, setdata] = useState([])
    const [currData, setcurrData] = useState([])
    const [totalPic, settotalPic] = useState(0);
    const [currPage, setcurrPage] = useState(0);
    const [isLoading, setisLoading] = useState(true)

    useEffect(() =>
    {
        const dataArr = async()=> {
             // let data = await axios.get("https://jsonplaceholder.typicode.com/photos")
            // let data = await axios.get("http://localhost:3002/photos")
             let data = await axios.get("https://nodejwtauth-email.herokuapp.com/photos");


            // console.log("resp",data);
            settotalPic(data.data.totalPics)
            setcurrPage(499);
            setdata(data.data.photosArr);
            const currPageData = data.data.photosArr?.slice(0,10);
            // console.log("First DB currPageData",currPageData);
            setcurrData(currPageData);
        } 
        dataArr() 
    }, [])
    // console.log(data)    
    const prevPage = (e)=>{
        e.preventDefault();
        let nxtPage = currPage;
        nxtPage--;
        const currPageData = data.slice((nxtPage-1)*10,nxtPage*10);
        setcurrPage(nxtPage);
        //console.log("currPageData",currPageData);
        setcurrData(currPageData);

    }

    const nextPage = (e)=>{
        e.preventDefault();
        let nxtPage = currPage;
        nxtPage++;
        const currPageData = data.slice(currPage*10,nxtPage*10);
        setcurrPage(nxtPage);
        //console.log("currPageData",currPageData);
        setcurrData(currPageData);

    }

    return (
        <div>
        {totalPic>0  && 
        <div>
            {currPage>1 && <button onClick={prevPage}> {`<`} </button>}
            {currPage}
            {currPage>=1 && currPage<totalPic/10 && <button onClick={nextPage}> {`>`} </button>}
        </div> }            
            {!currData  && currData.length > 0 ? 
                currData.map((data)=> 
            <div key={data.id}>
            <li >{data.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={data.url}/>   </li>
            </div>
            )  : "Loading Pics"}


        </div>
    );
}

export default Photos;
