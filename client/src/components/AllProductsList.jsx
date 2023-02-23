import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AllProductsList = ({ filteredProducts }) => {
  const [end, setEnd] = useState(4);
  filteredProducts = filteredProducts.slice(0, end);

  return (
    <Wrapper>
      <section>
        {filteredProducts.map((product) => {
          const { _id, name, price, description, image, inventory, company } =
            product;
          return (
            <article key={_id}>
              <div className='imageContainer'>
                <p className='price'>
                  {Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(price / 100)}
                </p>
                <img src={image} alt={name} />
              </div>

              <div>
                <h4>{company}</h4>
                <p>
                  <span>Model : </span>
                  {name}
                </p>
                <p>
                  <span>Available : </span>
                  {inventory} products
                </p>
                <p>{description.substring(0, 50)}...</p>
                <Link to={`/products/${_id}`} className='btn btnMore'>
                  More about
                </Link>
              </div>
            </article>
          );
        })}
      </section>
      <div className='loadMore'>
        <button
          type='button'
          className='loadMoreBtn'
          onClick={() => setEnd(end + 4)}
        >
          Load More
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin: 1rem 0;
    box-shadow: var(--dark-shadow);
  }
  .btnMore {
    background: #994ff3;
    color: #fffffe;
    &:hover {
      background: #b281ee;
      box-shadow: var(--light-shadow);
    }
  }
  span {
    font-weight: 600;
    letter-spacing: var(--spacing);
  }
  .imageContainer {
    position: relative;
  }
  h4,
  h5,
  p {
    text-transform: none;
    color: #2e2e2e;
    margin-bottom: 0.7rem;
  }
  .price {
    position: absolute;
    padding: 0.5rem;
    background: #994ff3;
    border-radius: var(--radius) 0 var(--radius) 0;
    color: #fffffe;
    box-shadow: var(--dark-shadow);
  }
  .pages {
    h3 {
      color: #2e2e2e;
    }
  }
  .loadMore {
    display: flex;
    align-items: center;
    justify-content: center;
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
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default AllProductsList;
