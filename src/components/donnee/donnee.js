import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//imporatation du style
import './public/css/donnee.css'

//importation du composant 
export const Donnee = ({ data, setSelectData }) => {
  //etat de recherche 
  const [recherche, setRecherche] = useState('');

  //fonction qui appelle la fct de changement d'etat setSelectData
  const click = (data) => {
    setSelectData(data);
  };

  //creation d'un nouveau tab contenant uniquement les element contenue dans l'eat recherche
  const filtre = data.filter(
    (data) =>
      data.title.toLowerCase().includes(recherche.toLowerCase()) 
  );

  return (
    <div className='donnee'>
        {/* barre de recherche */}
        <input
          type='text'
          placeholder='Rechercher par titre'
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
        {/* creation de liste de liens à partir de chaque donnée*/}
        {filtre.map((data) => (
          //appelle de la fct au click
          <Link className="donneeLink" to={`/donnee/${data.id}`} key={data.id} onClick={() => click(data)}>
            {/* affichage du titre */}
            <h2 className='donneTitre'>{data.title}</h2>
          </Link>
        ))}
    </div>
  );
};