import styled from 'styled-components';
import { useContextCart } from '../context/contextCart';
import { Link } from 'react-router-dom';
import { PageTape, FullCart } from '../components';

const CartPage = () => {
  const { cartItems } = useContextCart();

  if (cartItems < 1) {
    return (
      <Wrapper>
        <div className='empty'>
          <h2 className='emptyHeading'>
            Your cart is empty, please fill it...
          </h2>
          <Link to='/products' className='backBtn'>
            Go to products
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageTape title='cart' />
      <Wrapper>
        <div className='fullCartContent'>
          <FullCart />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  /* Full cart styling */
  .fullCartContent {
    background: #f2f7f5;
    min-height: calc(100vh - 22vh);
  }
  /* Empty cart styling */
  .empty {
    background: #f2f7f5;
    text-align: center;
    min-height: calc(100vh - 22vh);
    .emptyHeading {
      padding: 5rem 3rem;
      color: #00473e;
    }
    .backBtn {
      border: none;
      padding: 1rem;
      background: #faae2b;
      border-radius: var(--radius);
      text-transform: uppercase;
      color: #00473e;
      transition: var(--transition);
      &:hover {
        background: #e4ba70;
        box-shadow: var(--light-shadow);
      }
    }
  }
`;

export default CartPage;
