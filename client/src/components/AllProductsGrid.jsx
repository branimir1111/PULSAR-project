import styled from 'styled-components';
import FeaturedProduct from './FeaturedProduct';
import { useState } from 'react';

const AllProductsGrid = ({ filteredProducts }) => {
  const [end, setEnd] = useState(9);
  filteredProducts = filteredProducts.slice(0, end);
  return (
    <Wrapper>
      <div className='productsContainer'>
        {filteredProducts.map((product) => {
          return <FeaturedProduct key={product._id} {...product} />;
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
  .productsContainer {
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
  }
  .loadMore {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
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
`;

export default AllProductsGrid;
