import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';

const FeaturedProduct = ({ _id, name, price, image, company }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${_id}`} className='link'>
          <MdOutlineScreenSearchDesktop />
        </Link>
      </div>
      <footer>
        <h4>{company}</h4>
        <div className='footerPrice'>
          <h5>{name}</h5>
          <p>
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price / 100)}
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  box-shadow: var(--dark-shadow);
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    opacity: 0.7;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--headerHomeBackground);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 3rem;
      color: var(--white);
    }
  }
  .container:hover img {
    opacity: 1;
    box-shadow: var(--dark-shadow);
  }
  .container:hover .link {
    opacity: 1;
  }
  h4 {
    margin: 0;
    padding-top: 0.5rem;
    color: var(--headerHomeParagraph);
  }
  footer {
    background: var(--headerHomeBackground);
    border-radius: 0 0 var(--radius) var(--radius);
    text-align: center;
    height: 6rem;
  }
  .footerPrice {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--headerHomeHeadline);
    letter-spacing: var(--spacing);
  }
`;

export default FeaturedProduct;
