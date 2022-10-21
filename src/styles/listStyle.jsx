import styled from 'styled-components';

const ListArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 3rem;
  grid-column-gap: 3rem ;
  margin-bottom: 80px;
  justify-content: center;
  flex-wrap: wrap;

  .character_conatiner {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    color: white;
    text-align: center;
  }
`;

export default ListArea;
