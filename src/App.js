import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useRoutes } from 'react-router-dom';
import {Donnee} from './components/donnee/donnee.js'
import { DonneeInfo } from './components/donneeInfo/donneInfo.js';
//composant App
export const App = () => {
  //les etats de ce composant
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      
  }, []);
  //l'ensemble des routes 
  let routes = useRoutes ([
    {
      path : "/",
      element : <Donnee data={data} setSelectedData={setSelectedData}/>
    }, 
    {
      path : "/donnee/:id",
      element : <DonneeInfo data={selectedData}  />
    }
    
  ])
    
  return (
    <div className="container">
      {/* compo navbar et ses props */}
      {/* affichage des routes */}
      {routes}
</div>
  );
};