import React from 'react'

//importation du style
import './css/donneeInfo.css'

//composant DonneInfo
export const DonneeInfo = ({ data}) => {
    return (
        <div className='donneeInfo'>
            <h1>UserId : {data.userId}</h1>
            <h3>Id: {data.id}</h3>
            <h3 className='donneeInfoTitre'>Title:{data.title}</h3>
            <p>Body:{data.body}</p>

        </div>
    );
}