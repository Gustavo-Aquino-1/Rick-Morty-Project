import React from 'react'
import { useContext } from 'react';
import RickContext from '../context/RickContext';
import FormArea from '../styles/formStyle';

function Form() {
  const { name, handleName, gender, handleGender, applyFilters,
    status, handleStatus, id, handleId, origins,
    originOption, handleOriginOption } = useContext(RickContext);
  return (
    <FormArea>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Name"
      />

      <input
        type="number"
        value={id}
        onChange={handleId}
        placeholder="Id"
      />

      <select
        value={gender}
        onChange={handleGender}
      >
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>


      <select
        value={status}
        onChange={handleStatus}
      >
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="All">All</option>
      </select>

      <select
        value={originOption}
        onChange={handleOriginOption}
      >
        {
          origins.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))
        }
      </select>

      <button
        type="button"
        onClick={applyFilters}
      >
        Filter
      </button>
    </FormArea>
  )
}

export default Form;

