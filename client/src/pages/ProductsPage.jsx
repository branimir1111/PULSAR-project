import styled from 'styled-components';
import { PageTape } from '../components';
import { Filters, GridListSort, AllProducts, PageNumbers } from '../components';

const ProductsPage = () => {
  return (
    <Wrapper>
      <PageTape title='products' />
      <section className='sectionCenter mainSection'>
        <aside className='allFilters'>
          <Filters />
        </aside>
        <div className='allProductsMain'>
          <div className='sortGridList'>
            <GridListSort />
          </div>
          <div className='allProducts'>
            <AllProducts />
          </div>
          {/* <div className='pagesNumbers'>
            <PageNumbers />
          </div> */}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #fffffe;
  h2 {
    margin: 0;
  }
  .mainSection {
    height: 100%;
    padding: 5rem 0;
    display: grid;
    /* align-items: center; */

    .pagesNumbers {
      background: transparent;
    }
    @media (min-width: 768px) {
      grid-template-columns: 230px 1fr;
    }
  }
`;
export default ProductsPage;
