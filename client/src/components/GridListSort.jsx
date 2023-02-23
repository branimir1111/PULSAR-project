import styled from 'styled-components';
import { useContextFilters } from '../context/contextFilters';
import { FaThList } from 'react-icons/fa';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';

const GridListSort = () => {
  const {
    filteredProducts,
    gridView,
    setGridView,
    setListView,
    newSort,
    sort,
  } = useContextFilters();
  return (
    <section>
      <Wrapper>
        <form className='form'>
          <label htmlFor='sort'>sort by </label>
          <select
            name='sort'
            id='sort'
            className='sortInput'
            value={sort}
            onChange={newSort}
          >
            <option value='selectSort'>-- select sort --</option>
            <option value='priceLowest'>price (lowest)</option>
            <option value='priceHighest'>price (highest)</option>
            <option value='nameA'>name (a-z)</option>
            <option value='nameZ'>name (z-a)</option>
          </select>
        </form>
        <hr className='hr' />
        <div className='btnGridList'>
          <button
            type='button'
            className={`${gridView ? 'active' : null}`}
            onClick={setGridView}
          >
            <TfiLayoutGrid3Alt />
          </button>
          <button
            type='button'
            className={`${!gridView ? 'active' : null}`}
            onClick={setListView}
          >
            <FaThList />
          </button>
        </div>
        <hr className='hr' />
        <p>{filteredProducts.length} products found</p>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  .form {
    /* background: #bae8e8; */
    padding: 0.4rem;
    border-radius: var(--radius);
  }
  .hr {
    border-top: 1px solid var(--grey-100);
  }
  p {
    margin: 0;
    color: #232946;
  }
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btnGridList {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
      color: #232946;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  .btnGridList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: none;
      color: #232946;
      width: 2rem;
      height: 2rem;
      display: grid;
      align-items: center;
      justify-items: center;
      border-radius: var(--radius);
      cursor: pointer;
      svg {
        font-size: 1.5rem;
      }
    }
    .active {
      background: #bae8e8;
      box-shadow: var(--dark-shadow);
    }
  }
  .sortInput {
    border: transparent;
    border-radius: var(--radius);
    background: #bae8e8;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }

  label {
    font-size: 1rem;
    text-transform: capitalize;
    color: #232946;
  }
`;
export default GridListSort;
