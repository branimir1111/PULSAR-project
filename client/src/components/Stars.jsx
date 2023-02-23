import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ averageRating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {averageRating >= index + 1 ? (
          <BsStarFill />
        ) : averageRating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className='averageRating'>
        <h4>{averageRating}.0</h4>
      </div>
      <div className='stars'>{tempStars}</div>
      <div className={averageRating >= 4 ? 'bestseller' : 'notBestseller'}>
        Bestseller
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3rem 7.5rem 8rem auto;
  align-items: center;
  .averageRating {
    h4 {
      color: #b38403;
      margin-bottom: 0.5rem;
    }
  }
  .stars {
    display: grid;
    grid-template-columns: repeat(5, 1.5rem);
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
    letter-spacing: var(--spacing);
  }
  .bestseller {
    background: #c397f7;
    margin-right: 2rem;
    color: #2e2e2e;
    text-align: center;
    justify-content: center;
    border-radius: 3px;
  }
  .notBestseller {
    display: none;
  }
  margin-bottom: 0.5rem;
`;

export default Stars;
