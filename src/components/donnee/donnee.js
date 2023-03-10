import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './public/css/donnee.css'

export const Donnee = ({ data, setSelectedData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleOnClick = (data) => {
    setSelectedData(data);
  };

  const filteredData = data.filter(
    (data) =>
      data.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className='donnee'>
        <input
          type='text'
          placeholder='Rechercher par titre'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      {filteredData.map((data) => (
        <Link className="donneeLink" to={`/donnee/${data.id}`} key={data.id} onClick={() => handleOnClick(data)}>
          <h2 className='donneTitre'>{data.title}</h2>
        </Link>
      ))}
    </div>
  );
};