import { PageTape, PaymentCart } from '../components';
import styled from 'styled-components';
import { useContextCart } from '../context/contextCart';

const PaymentPage = () => {
  const { totalAmount } = useContextCart();

  return (
    <main>
      <PageTape title='payment' />
      <Wrapper className='page-100'>
        {totalAmount <= 0 ? (
          <h4>Your cart is empty...</h4>
        ) : (
          <div className='totalAmount'>
            <h4>Hello,</h4>
            <h5>
              Your total :{' '}
              <span>
                {' '}
                {Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(totalAmount / 100)}
              </span>
            </h5>
          </div>
        )}
        <PaymentCart />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  display: grid;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  background: #d4d8f0;
  h4 {
    color: #232946;
  }
  .totalAmount {
    background: #fffffe;
    width: 450px;
    padding: 1rem;
    border-radius: var(--radius);
    h4,
    h5 {
      color: #232946;
    }
    span {
      background: #eaea65;
      padding: 0.5rem;
      border-radius: var(--radius);
      color: #14837d;
    }
  }
`;

export default PaymentPage;
