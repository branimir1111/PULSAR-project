import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PageTape = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='sectionCenter'>
        <h4>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  /* background: var(--headerHomeParagraph); */
  background: #232946;
  width: 100%;
  min-height: 7vh;
  display: grid;
  align-items: center;
  color: var(--headerHomeBackground);
  box-shadow: var(--dark-shadow);
  z-index: 1;
  a {
    color: #4fc4cf;
    padding: 0.1rem;
    transition: all 0.1s linear;
  }
  .sectionCenter {
    padding-left: 4.5rem;
  }
  h4 {
    margin: 0;
  }
  a:hover {
    color: var(--red-light);
  }
`;
export default PageTape;
