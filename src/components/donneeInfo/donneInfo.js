import React from 'react'
import './css/donneeInfo.css'

export const DonneeInfo = ({ data}) => {
    console.log(data);
// console.log(selectedData);
    return (
        <div className='donneeInfo'>
            <h1>UserId : {data.userId}</h1>
            <h3>Id: {data.id}</h3>
            <h3 className='donneeInfoTitre'>Title:{data.title}</h3>
            <p>Body:{data.body}</p>

        </div>
    );
}