import img from '../assets/connected_world_rose.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HomePageHeader = () => {
  return (
    <Wrapper>
      <img src={img} alt='connected world' />
      <article className='headerContent'>
        <h2>The Future Is Now</h2>
        <p>
          Regardless of how complex your task is, a solution is available within
          our diverse measuring, positioning and visualising portfolio to help
          you collaborate, be more efficient and succeed.Everything you do in
          the geospatial world leaves a mark. You want accurate, reliable, and
          intelligent solutions.World-leading solutions that let you make your
          mark with permanence.<span>Make Your Mark.</span>
        </p>
        <Link to='/products' className='btn shopBtn'>
          Shop now
        </Link>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-gap: 4rem;
  padding: 1rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 450px;
  }
  p {
    line-height: 2;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--headerHomeParagraph);
  }
  .shopBtn {
    margin: 2rem 0;
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
  .headerContent {
    margin-top: -5rem;
  }
  @media (min-width: 992px) {
    max-width: var(--max-width);
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    /* height: calc(100vh - (5rem + 10vh)); */
    height: 100vh;
    .headerContent {
      margin-top: 5rem;
    }
    .shopBtn {
      margin-top: 3rem;
    }
  }
`;

export default HomePageHeader;
