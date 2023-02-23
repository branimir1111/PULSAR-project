import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContextProducts } from '../context/contextProducts';
import {
  Loading,
  Error,
  PageTape,
  SingleProductImages,
  Stars,
  OrderToCart,
} from '../components';
import styled from 'styled-components';

const SingleProductPage = () => {
  const {
    singleProduct_loading: loading,
    singleProduct_error: error,
    singleProduct,
    getSingleProduct,
  } = useContextProducts();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(`/api/v1/products/${productId}`);
  }, [productId]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    _id,
    name,
    price,
    description,
    inventory,
    averageRating,
    numberOfReviews,
    company,
    image,
    smallImages,
    freeShipping,
  } = singleProduct;

  return (
    <Wrapper>
      <PageTape product title={name} />
      <div className='mainSection'>
        <Link to='/products' className='btn backBtn'>
          Back To Products
        </Link>
        <div className='productCenter'>
          <section className='productSpec'>
            <h2 className='productName'>{name}</h2>
            <h4 className='aboutProduct'>About product:</h4>
            <p className='productDesc'>{description}</p>
            <p className='company'>
              <span>Company : </span>
              <span className='companyName'>{company}</span>
            </p>
            <p className='numOfRev'>
              <span>Number of reviews : </span>
              {numberOfReviews}
            </p>
            <Stars averageRating={averageRating} />
            <p className='inventory'>
              <span> Available : </span>
              {inventory > 0 ? `${inventory} products` : `not available`}
            </p>
            <p className='freeShipping'>
              <span>Free shipping : </span>
              {freeShipping ? 'Yes' : 'No'}
            </p>
            <hr />
            {inventory > 0 && <OrderToCart singleProduct={singleProduct} />}
          </section>
          <SingleProductImages
            image={image}
            smallImages={smallImages}
            price={price}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #fffffe;
  min-height: calc(90vh - 5rem);
  .mainSection {
    margin: 0 auto;
    padding: 5rem 0;
    width: 90vw;
    max-width: var(--max-width);
  }
  .backBtn {
    margin-top: 1rem;
    width: 220px;
    height: 50px;
    background: #4fc4cf;
    color: #181818;
    font-size: 1rem;
    padding-top: 0.9rem;
    padding-left: 1.35rem;
    &:hover {
      background: #5adeea;
      box-shadow: var(--dark-shadow);
    }
  }
  .productCenter {
    display: grid;
    gap: 2rem;
  }
  .productName {
    padding: 1.5rem 0 1rem 0;
    color: #181818;
  }
  .aboutProduct {
    color: #181818;
    text-transform: none;
  }
  .productDesc {
    color: #2e2e2e;
    font-size: 1rem;
  }
  .company {
    color: #181818;
    letter-spacing: var(--spacing);
    span {
      font-weight: 600;
    }
    .companyName {
      text-transform: uppercase;
      letter-spacing: var(--spacing);
      font-weight: 200;
    }
  }
  .numOfRev {
    color: #181818;
    text-transform: none;
    letter-spacing: var(--spacing);
    span {
      font-weight: 600;
    }
  }
  .inventory {
    color: #181818;
    text-transform: none;
    letter-spacing: var(--spacing);
    span {
      font-weight: 600;
    }
  }
  .freeShipping {
    color: #181818;
    text-transform: none;
    letter-spacing: var(--spacing);
    span {
      font-weight: 600;
    }
  }
  @media (min-width: 992px) {
    .productCenter {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;

export default SingleProductPage;
