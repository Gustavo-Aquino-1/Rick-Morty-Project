import React from 'react'
import { useContext } from 'react'
import RickContext from '../context/RickContext'
import ListArea from '../styles/listStyle';

function Lista() {
  const { list, name, id } = useContext(RickContext);
  return (
    <div>
      {
        list.length > 0 ? (
          <ListArea>
            {
              list?.filter((e) => e.name.toUpperCase().includes(name.toUpperCase()))
                .filter((e) => {
                  if (id === '') return e;
                  return +e.id === +id
                })
                .map((e) => (
                  <div className='character_conatiner' key={e.id}>
                    <img src={e.image} alt={e.name} />
                    <p>{e.name}</p>
                    <p>{e.gender}</p>
                    <p>{e.status}</p>
                    <p>{e.origin.name}</p>
                  </div>
                ))
            }
          </ListArea>
        ) : (
          <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2rem' }}>Sem Resultados!</h1>
        )
      }
    </div>
  )
}

export default Lista
