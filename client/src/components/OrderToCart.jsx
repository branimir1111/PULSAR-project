import styled from 'styled-components';
import { useState } from 'react';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import OrderBtns from './OrderBtns';
import { Link } from 'react-router-dom';
import { useContextCart } from '../context/contextCart';

const OrderToCart = ({ singleProduct }) => {
  const { _id, colors, inventory } = singleProduct;
  const { orderToCart } = useContextCart();

  const [orderedColor, setOrderdColor] = useState(colors[0]);
  const [orderAmount, setOrderAmount] = useState(1);

  const increase = () => {
    setOrderAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > inventory) {
        tempAmount = inventory;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setOrderAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className='colors'>
        <h5>Colors :</h5>
        <div className='colorsContainer'>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                type='button'
                className={
                  orderedColor === color ? 'btnColor activeColor' : 'btnColor'
                }
                onClick={() => setOrderdColor(color)}
              >
                {orderedColor === color ? (
                  <MdOutlineCheckCircleOutline />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className='btnContainer'>
        <OrderBtns
          orderAmount={orderAmount}
          increase={increase}
          decrease={decrease}
        />
        <button
          className='addBtn'
          onClick={() =>
            orderToCart(_id, orderedColor, orderAmount, singleProduct)
          }
        >
          <Link to='/cart'>add to cart</Link>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0.5rem;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 5rem;
  /* background: #f6efef; */
  padding: 0.5rem 0;
  .colors {
    padding: 0.3rem;
    h5 {
      color: #181818;
    }
  }
  .colorsContainer {
    display: grid;
    grid-template-columns: repeat(5, 1.7rem);
    align-items: center;
  }
  .btnColor {
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 50%;
    margin-right: 0.2rem;
    cursor: pointer;
    svg {
      font-size: 1.5rem;
      color: var(--white);
      margin: 0;
      padding: 0;
    }
    opacity: 0.4;
  }
  .activeColor {
    opacity: 1;
  }
  .addBtn {
    width: 10rem;
    height: 2.5rem;
    border: none;
    border-radius: 3px;
    background: #994ff3;
    cursor: pointer;
    transition: var(--transition);
    a {
      color: #f6efef;
      font-size: 1rem;
      text-transform: uppercase;
    }
    &:hover {
      background: #c49af7;
      box-shadow: var(--light-shadow);
    }
  }
  .btnContainer {
    display: grid;
    justify-content: end;
  }
`;
export default OrderToCart;
