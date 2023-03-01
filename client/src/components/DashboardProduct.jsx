import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DashboardProduct = ({ _id, image, company, name, category }) => {
  return (
    <Wrapper>
      <div className='content'>
        <img src={image} alt={name} />
        <div className='info'>
          <p>{company}</p>
          <p>{name}</p>
          <p>{category}</p>
        </div>
      </div>
      <hr />
      <footer className='delUpBtn'>
        <Link to={`/dashboard/update/${_id}`}>
          <button type='button' className='butt buttUpdate'>
            update
          </button>
        </Link>
        <Link to={`/dashboard/delete/${_id}`}>
          <button type='button' className='butt buttDelete'>
            delete
          </button>
        </Link>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 0.5rem;
  border-radius: var(--radius);
  width: 250px;
  background: #fffffe;
  img {
    width: 70px;
    height: 70px;
    border-radius: var(--radius);
  }
  hr {
    border-top: 1px solid #7c9bc3;
    margin: 0.5rem 0;
    padding: 0 0.3rem;
  }
  p {
    font-size: 0.8rem;
    color: #1b2d45;
    margin: 0;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .delUpBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .butt {
    border: none;
    padding: 0.4rem 0.8rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    cursor: pointer;
  }
  .buttUpdate {
    color: #0d7515;
    background: #93f59b;
    &:hover {
      background: #74ef7e;
    }
  }
  .buttDelete {
    color: #870f0f;
    background: #f0b2b2;
    &:hover {
      background: #d37f7f;
    }
  }
`;
export default DashboardProduct;
