import { HiShoppingCart } from 'react-icons/hi';
import { FaUserAstronaut, FaUserMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContextProducts } from '../context/contextProducts';
import { useContextCart } from '../context/contextCart';
import { useContextUser } from '../context/contextUser';

const CartLoginBtn = () => {
  const { closeSidebar } = useContextProducts();
  const { numberOfItems, clearShopCart } = useContextCart();
  const { user, logoutUser } = useContextUser();

  return (
    <Wrapper className='cartLoginWrapper'>
      {user ? (
        <Link
          to='/'
          className='logInOutBtn'
          onClick={() => {
            clearShopCart();
            closeSidebar();
            logoutUser();
            clearLocaleStorage();
          }}
        >
          Logout
          <FaUserMinus />
        </Link>
      ) : (
        <Link to='/login' className='logInOutBtn' onClick={closeSidebar}>
          Login
          <FaUserAstronaut />
        </Link>
      )}
      <Link to='/cart' className='shoppingBtn' onClick={closeSidebar}>
        <HiShoppingCart />
        <span className='cartItems'>{numberOfItems}</span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 150px;
  .shoppingBtn {
    margin-top: 5px;
    margin-left: 5px;
    color: var(--headerHomeParagraph);
    font-size: 1.8rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 2.5rem;
      margin-left: 10px;
    }
    .cartItems {
      position: absolute;
      top: -5px;
      right: -7px;
      background: var(--headerHomeButton);
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 40%;
      font-size: 0.85rem;
      font-weight: 800;
      color: #232946;
      padding: 12px;
    }
  }
  .shoppingBtn:hover {
    scale: 1.1;
    transition: all 0.3s ease-in-out;
  }
  .logInOutBtn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--headerHomeParagraph);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .logInOutBtn:hover {
    transition: all 0.3s ease-in-out;
    scale: 1.08;
    color: var(--headerHomeButton);
  }
`;

export default CartLoginBtn;
