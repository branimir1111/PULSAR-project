import styled from 'styled-components';
import { useContextFilters } from '../context/contextFilters';
import AllProductsGrid from './AllProductsGrid';
import AllProductsList from './AllProductsList';

const AllProducts = () => {
  const { gridView, filteredProducts } = useContextFilters();
  if (filteredProducts.length < 1) {
    return (
      <Wrapper>
        <h5>
          Sorry, but there are no products matching your search. Try something
          else.
        </h5>
      </Wrapper>
    );
  }

  if (gridView === false) {
    return <AllProductsList filteredProducts={filteredProducts} />;
  }
  return <AllProductsGrid filteredProducts={filteredProducts} />;
};

const Wrapper = styled.div`
  h5 {
    color: #181818;
    text-transform: none;
    text-align: center;
    padding: 2rem 0;
  }
`;

export default AllProducts;
