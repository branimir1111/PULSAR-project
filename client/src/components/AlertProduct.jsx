import { useContextProducts } from '../context/contextProducts';
import styled from 'styled-components';

const Alert = () => {
  const { alertTypeProduct, alertTextProduct } = useContextProducts();
  return (
    <Wrapper>
      <div className={`alert alert-${alertTypeProduct}`}>
        {alertTextProduct}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .alert {
    padding: 0.4rem 0.8rem;
    margin-bottom: 1rem;
    border-color: transparent;
    border-radius: var(--radius);
    text-align: center;
    letter-spacing: var(--spacing);
  }

  .alert-danger {
    color: #870f0f;
    background: #f0b2b2;
  }
  .alert-success {
    color: #0d7515;
    background: #93f59b;
  }
`;

export default Alert;
