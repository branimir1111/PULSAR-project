import styled from 'styled-components';
import { useContextFilters } from '../context/contextFilters';
import { DashboardProduct } from '../components';
import { useState } from 'react';

const DashboardAllProducts = () => {
  const { allProducts } = useContextFilters();
  const [end, setEnd] = useState(0);
  let newListProduct = allProducts.slice(0, 9 + end);
  // newListProduct = allProducts.slice(9, end);

  return (
    <Wrapper>
      <div className='mainGrid'>
        {newListProduct.map((product) => {
          return <DashboardProduct key={product._id} {...product} />;
        })}
      </div>

      <div className='loadMore'>
        <button
          type='button'
          className='loadMoreBtn'
          onClick={() => setEnd(end + 9)}
        >
          Load More
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .mainGrid {
    background: #f2f4f6;
    padding: 0.5rem;
    display: grid;
    justify-items: center;
    gap: 2rem 1.5rem;
  }

  .loadMore {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    .loadMoreBtn {
      padding: 1rem 1.5rem;
      border: transparent;
      text-transform: uppercase;
      background: #994ff3;
      cursor: pointer;
      border-radius: var(--radius);
      &:hover {
        background: #c398f7;
      }
    }
  }
  @media (min-width: 820px) {
    .mainGrid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1170px) {
    .mainGrid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default DashboardAllProducts;
