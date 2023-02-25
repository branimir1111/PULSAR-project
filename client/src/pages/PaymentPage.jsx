import PageTape from '../components/PageTape';
import styled from 'styled-components';

const PaymentPage = () => {
  return (
    <main>
      <PageTape title='payment' />
      <Wrapper className='page-100'>
        <h2>PaymentPage</h2>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export default PaymentPage;
