import styled from 'styled-components';
import FeaturedProduct from './FeaturedProduct';

const AllProductsGrid = ({ filteredProducts }) => {
  return (
    <Wrapper>
      {filteredProducts.map((product) => {
        return <FeaturedProduct key={product._id} {...product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0;
  display: grid;
  gap: 2rem 1.5rem;
  img {
    height: 170px;
  }

  @media (min-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default AllProductsGrid;
