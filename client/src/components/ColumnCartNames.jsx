import styled from 'styled-components';

const ColumnCartNames = () => {
  return (
    <Wrapper>
      <div className='namesContainer'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <h5 className='emptySpace'></h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #00473e;
  .namesContainer {
    display: none;
  }
  .emptySpace {
    width: 1.5rem;
  }
  @media (min-width: 776px) {
    .namesContainer {
      h5 {
        display: block;
        margin: 0;
        color: #00473e;
        padding: 0.8rem 0;
      }
      border-radius: var(--radius);
      display: grid;
      grid-template-columns: 320px repeat(3, 1fr) auto;
      justify-items: center;
      column-gap: 1rem;
      background: #ffa8ba;
      margin-bottom: 1rem;
    }
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 3rem;
    border-color: #92bbb7;
  }
`;

export default ColumnCartNames;
