import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContextCart } from '../context/contextCart';
import ColumnCartNames from './ColumnCartNames';
import SingleCartItem from './SingleCartItem';
import CartTotalValue from './CartTotalValue';

const FullCart = () => {
  const { cartItems, clearShopCart } = useContextCart();

  return (
    <Wrapper>
      <div className='sectionCenter'>
        <ColumnCartNames />
        {cartItems.map((cartItem) => {
          return <SingleCartItem key={cartItem.id} {...cartItem} />;
        })}
        <hr />
        <div className='btnContainer'>
          <Link to='/products' className='singleBtn' id='singleBtnLink'>
            Back to products
          </Link>
          <button
            type='button'
            className='singleBtn'
            id='singleBtnClear'
            onClick={clearShopCart}
          >
            clear your cart
          </button>
        </div>
        <CartTotalValue />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  hr {
    border-color: #92bbb7;
  }
  .example {
    color: #00473e;
  }
  .btnContainer {
    display: flex;
    padding: 2rem 0;
    justify-content: space-between;
  }
  .singleBtn {
    padding: 0.7rem 1rem;
    border: none;
    background: #faae2b;
    width: 12rem;
    border-radius: var(--radius);
    font-size: 0.9rem;
    color: #00473e;
    text-transform: uppercase;
    transition: var(--transition);
    cursor: pointer;
  }
  #singleBtnLink {
    padding-left: 1.6rem;
    &:hover {
      background: #f9c365;
      box-shadow: var(--light-shadow);
    }
  }
  #singleBtnClear {
    background: #fa5246;
    &:hover {
      background: #f88981;
      box-shadow: var(--light-shadow);
    }
  }
`;

export default FullCart;
