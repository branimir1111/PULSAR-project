import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../assets/not_found.svg';
const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt='not found' />
        <h3>Sorry! Page not found</h3>
        <p>We can't find the page you're looking for</p>
        <button type='button' className='btn'>
          <Link to='/'>Back Home</Link>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: calc(100vh - 5rem);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    padding: 1rem;
    max-width: 500px;
    display: block;
    margin-bottom: 3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--headerHomeParagraph);
  }
  a {
    color: var(--red-dark);
    text-transform: capitalize;
  }
`;

export default ErrorPage;
