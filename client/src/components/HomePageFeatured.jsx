import { useContextProducts } from '../context/contextProducts';
import { Loading, Error, FeaturedProduct } from '../components';
import styled from 'styled-components';

const HomePageFeatured = () => {
  const { featured_loading, featured_error, featured_Products } =
    useContextProducts();
  if (featured_loading) {
    return <Loading />;
  }
  if (featured_error) {
    return <Error />;
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2 className='headingTitle'>Featured Products</h2>
      </div>
      <div className='sectionCenter '>
        <div className='fProductsContainerMob featured'>
          {featured_Products.slice(38, 41).map((fProduct) => {
            return <FeaturedProduct key={fProduct._id} {...fProduct} />;
          })}
        </div>
        {/* <div className='fProductsContainerDesc'> 
          {featured_Products.slice(0, 6).map((fProduct) => {
            return <FeaturedProduct key={fProduct._id} {...fProduct} />;
          })}
        </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--headerHomeParagraph);
  .headingTitle {
    color: var(--headerHomeBackground);
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
`;

export default HomePageFeatured;
