import styled from 'styled-components';

const PaymentCart = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='cartName' className='labelText'>
          Name on cart
        </label>
        <input
          type='text'
          name='cartName'
          className='formInput'
          placeholder='Name on cart'
        />
        <label htmlFor='cartName' className='labelText'>
          Cart Number
        </label>
        <input
          type='text'
          name='cartNumber'
          className='formInput'
          placeholder='0000 0000 0000 0000'
        />
        <div className='smallInputs'>
          <div className='smallInput'>
            <label htmlFor='cartName' className='labelText'>
              CVC/CVV
            </label>
            <input
              type='text'
              name='cartNumber'
              className='formInput'
              placeholder='CVC/CVV'
            />
          </div>
          <div className='smallInput'>
            <label htmlFor='cartName' className='labelText'>
              Expiry date
            </label>
            <input
              type='text'
              name='cartNumber'
              className='formInput'
              placeholder='MM/YY'
            />
          </div>
        </div>
        <button type='submit' className='submitButton'>
          <em>Pay</em>
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fffffe;
  border-radius: var(--radius);
  .form {
    padding: 1rem;
  }
  .labelText {
    display: block;
    margin: 0.5rem 0;
    color: #232946;
  }
  .formInput {
    border: 1px solid #b8c1ec;
    width: 100%;
    border-radius: var(--radius);
    padding: 0.5rem;
  }
  .smallInputs {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  .submitButton {
    margin-top: 1rem;
    border: none;
    background: #222d65;
    color: #fffffe;
    padding: 0.5rem 4rem;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: #6374ca;
    }
  }
`;

export default PaymentCart;
