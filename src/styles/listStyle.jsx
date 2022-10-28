import styled from 'styled-components';

const ListArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 7rem;

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
