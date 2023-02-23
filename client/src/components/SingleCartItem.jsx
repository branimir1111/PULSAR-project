import styled from 'styled-components';
import { useContextCart } from '../context/contextCart';
import { BsTrash } from 'react-icons/bs';
import OrderBtns from './OrderBtns';

const SingleCartItem = ({ id, image, name, color, price, amount }) => {
  const { toggleAmount, removeProduct } = useContextCart();

  const increase = () => {
    toggleAmount(id, 'increase');
  };
  const decrease = () => {
    toggleAmount(id, 'decrease');
  };

  return (
    <Wrapper>
      <div className='productTitle'>
        <img src={image} alt={name} />
        <div>
          <h5 className='productName'>{name}</h5>
          <p className='productColor'>
            Color : <span style={{ background: color }}></span>
          </p>
          <h5 className='productPriceSmall'>
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price / 100)}
          </h5>
        </div>
      </div>
      <h5 className='singleProductPrice'>
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price / 100)}
      </h5>
      <OrderBtns orderAmount={amount} increase={increase} decrease={decrease} />
      <h5 className='productSubtotal'>
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format((price * amount) / 100)}
      </h5>
      <button
        type='button'
        className='removeItemBtn'
        onClick={() => removeProduct(id)}
      >
        <BsTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .singleProductPrice {
    display: none;
  }
  .productSubtotal {
    display: none;
  }
  .productTitle {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    color: #00473e;
    font-size: 0.75rem;
    margin-bottom: 0;
  }
  .productColor {
    color: #475d5b;
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .productPriceSmall {
    color: #475d5b;
  }
  .amountBtn {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
  .removeItemBtn {
    color: var(--white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 1.2rem;
    cursor: pointer;
    margin-right: 0.4rem;
  }
  @media (min-width: 776px) {
    .productSubtotal {
      display: block;
      margin-bottom: 0;
      color: #00473e;
      font-weight: 400;
      font-size: 1rem;
    }
    .productPriceSmall {
      display: none;
    }
    .singleProductPrice {
      display: block;
      font-size: 1rem;
      color: #00473e;
      font-weight: 400;
    }
    .productName {
      font-size: 0.85rem;
    }
    .productColor {
      font-size: 0.85rem;
      span {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .productTitle {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amountBtn {
      width: 75px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  } ;
`;

export default SingleCartItem;
