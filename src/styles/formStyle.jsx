import styled from 'styled-components';

const FormArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 8rem;
  font-weight: 700;
  input, select {
    padding: 10px;
    outline: none;
    &::placeholder {
      color: #000000a8;
    }
    border: none;
    border-bottom: 5px solid var(--green-nike);
  }
  select {
    padding: 10px 15px;
  }
  button {
    padding: 14px 29px;
    background-color: var(--green-nike);
    color: #000000;
    border: none;
    border-radius: 0.25rem ;
    font-weight: 800;
    cursor: pointer;
  }

  @media screen and (max-width:600px) {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      padding: 0 50px;
  }
`;

export default FormArea;
