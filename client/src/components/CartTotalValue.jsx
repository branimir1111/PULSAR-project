import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContextCart } from '../context/contextCart';
import { useContextUser } from '../context/contextUser';
const CartTotalValue = () => {
  const { totalAmount, shippingFee } = useContextCart();
  const { user } = useContextUser();

  return (
    <Wrapper>
      <div className='mainContent'>
        <article>
          <h5>
            Subtotal :{' '}
            <span>
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(totalAmount / 100)}
            </span>
          </h5>
          <p>
            Shipping fee :{' '}
            <span>
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(shippingFee / 100)}
            </span>
          </p>
          <h4>
            total value:{' '}
            <span id='totalValue'>
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format((totalAmount + shippingFee) / 100)}
            </span>
          </h4>
        </article>
        <div className='btnContainer'>
          {user ? (
            <Link to='/payment' className='finishBtn'>
              go to payment page
            </Link>
          ) : (
            <Link to='/login' className='finishBtn' id='loginBtn'>
              you must be <span>logged</span> in
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  article {
    border: 1px solid #00473e;
    padding: 1rem;
    border-radius: var(--radius);
    background: #fffffe;
  }
  h5,
  h4,
  p {
    display: grid;
    grid-template-columns: 250px auto;
    color: #00473e;
  }
  h4 {
    padding-top: 1.5rem;
  }
  .btnContainer {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  .finishBtn {
    display: block;
    margin: 0 auto;
    width: 20rem;
    padding: 0.8rem 1rem;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: var(--radius);
    background: #faae2c;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: #f0c06e;
      box-shadow: var(--light-shadow);
    }
  }
  #loginBtn {
    background: #00473e;
    color: #faae2b;
    &:hover {
      background: #17a794;
      box-shadow: var(--light-shadow);
    }
    span {
      color: #fa5246;
    }
  }
  #totalValue {
    background: #76ebdb;
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
  }
`;

export default CartTotalValue;
