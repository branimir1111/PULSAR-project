import PageTape from '../components/PageTape';
import styled from 'styled-components';
const PaymentPage = () => {
  return (
    <main>
      <PageTape title='payment' />
      <Wrapper className='page-100'>
        <h1>PaymentPage</h1>
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
