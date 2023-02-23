import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const OrderBtns = ({ orderAmount, increase, decrease }) => {
  return (
    <Wrapper>
      <button type='button' className='amountBtn' onClick={decrease}>
        <FaMinus />
      </button>
      <h3 className='orderAmount'>{orderAmount}</h3>
      <button type='button' className='amountBtn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 10rem;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  .amountBtn {
    border: none;
    cursor: pointer;
    background: transparent;
  }
  .orderAmount {
    color: #2e2e2e;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

export default OrderBtns;
