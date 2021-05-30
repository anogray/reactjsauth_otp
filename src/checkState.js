import React, { useState } from 'react';

const CheckState = () => {
    const [data, setdata] = useState(0)

    const handleChange = ()=>{
        let dt = data+1;
        setdata(data+1)
        console.log("state data",data);
    }

    return (
        <>
        <div onClick={handleChange}>
            See me state data {data}
        </div>
        <div >
            See me state data {data}
        </div>
        </>
        
    );
}

export default CheckState;
