import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import {Donnee} from './components/donnee/donnee.js'
//composant App
export const App = () => {
  //les etats de ce composant
  //l'ensemble des routes 
  let routes = useRoutes ([
    {
      path : "/",
      element : <Donnee />
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