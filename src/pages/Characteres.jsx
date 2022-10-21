import React from 'react'
import Form from '../components/Form';
import Lista from '../components/Lista';
import RickProvider from '../context/RickProvider';
import styled from 'styled-components';
import rickImg from '../imgs/rickmorty.jpg'

const PageArea = styled.div`
  display: flex;
  flex-direction:column ;
  width: 90%;
  display: block;
  margin: auto;
`;

function Characteres() {
  return (
    <PageArea>
      <img src={rickImg} className="img_header" alt="rick-morty-title" />
      <RickProvider>
        <Form />
        <Lista />
      </RickProvider>
    </PageArea>
  )
}

export default Characteres;

