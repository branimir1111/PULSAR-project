import styled from 'styled-components';
import { useContextFilters } from '../context/contextFilters';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';

const Filters = () => {
  const {
    allProducts,
    changeFilters,
    resetFilters,
    filters: {
      text,
      category,
      company,
      color,
      minPrice,
      price,
      maxPrice,
      freeShipping,
    },
  } = useContextFilters();

  const uniqueCategories = () => {
    let allCategories = allProducts.map((product) => product.category);
    return ['all', ...new Set(allCategories)];
  };
  const allCategories = uniqueCategories();

  const uniqueCompanies = () => {
    let allCompanies = allProducts.map((product) => product.company);
    return ['all', ...new Set(allCompanies)];
  };
  const allCompanies = uniqueCompanies();

  const uniqueColors = () => {
    let allColors = allProducts.map((product) => product.colors);
    allColors = allColors.flat();
    return ['all', ...new Set(allColors)];
  };
  const allColors = uniqueColors();

  return (
    <Wrapper>
      <div className='allFilters'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Text filter */}
          <div className='singleFilter'>
            <input
              type='text'
              name='text'
              placeholder='search here'
              className='textSearch'
              value={text}
              onChange={changeFilters}
            />
          </div>
          {/* Price filter */}
          <div className='singleFilter priceFilter'>
            <h5>price</h5>
            <p className='price'>
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(price / 100)}
            </p>
            <input
              type='range'
              min={minPrice}
              max={maxPrice}
              name='price'
              value={price}
              onChange={changeFilters}
            />
            <hr />
          </div>
          {/* Company filter */}
          <div className='singleFilter'>
            <h5>Company</h5>
            {allCompanies.map((singleCompany, index) => {
              return (
                <button
                  key={index}
                  type='button'
                  name='company'
                  className={`filterBtn ${
                    singleCompany === company ? 'active' : null
                  }`}
                  onClick={changeFilters}
                >
                  {singleCompany}
                </button>
              );
            })}
            <hr />
          </div>
          {/* Category filter */}
          <div className='singleFilter'>
            <h5>Category</h5>
            {allCategories.map((singleCategory, index) => {
              return (
                <button
                  key={index}
                  type='button'
                  name='category'
                  className={`filterBtn ${
                    singleCategory === category ? 'active' : null
                  }`}
                  onClick={changeFilters}
                >
                  {singleCategory}
                </button>
              );
            })}
            <hr />
          </div>
          {/* Colors filter */}
          <div className='singleFilter '>
            <h5>Colors</h5>
            <div className='singleFilterColors'>
              {allColors.map((singleColor, index) => {
                if (singleColor === 'all') {
                  return (
                    <button
                      key={index}
                      type='button'
                      name='color'
                      data-color='all'
                      onClick={changeFilters}
                      className={`${color === 'all' ? 'allBtnAcitve' : null}`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    type='button'
                    name='color'
                    style={{ background: singleColor }}
                    className={`${
                      color === singleColor ? 'singleColorActive' : null
                    }`}
                    data-color={singleColor}
                    onClick={changeFilters}
                  >
                    {color === singleColor ? (
                      <MdOutlineCheckCircleOutline />
                    ) : null}
                  </button>
                );
              })}
            </div>
            <hr />
          </div>
          {/* freeSipping filter */}
          <div className='singleFilter '>
            <div className='singleFilterShipping'>
              <label htmlFor='shipping' className='labelShipping'>
                <h5>free shipping</h5>
              </label>
              <input
                type='checkbox'
                name='freeShipping'
                className='freeShipping'
                onChange={changeFilters}
                checked={freeShipping}
              />
              <div></div>
            </div>
            <hr />
          </div>
        </form>
        <button type='button' className='clearFilters' onClick={resetFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-right: 1rem;
  .singleFilter {
    margin-bottom: 1.3rem;
  }
  hr {
    border-color: #c4d7f0;
    margin: 0 0.25rem;
    margin-top: 0.7rem;
  }
  .textSearch {
    width: 100%;
    padding: 0.8rem;
    background-color: #e3f6f5;
    border-radius: var(--radius);
    border: transparent;
    letter-spacing: var(--spacing);
    &::placeholder {
      text-transform: capitalize;
    }
  }
  h5 {
    color: #00214d;
  }
  .priceFilter {
    padding: 0.15rem;
  }
  .price {
    color: #00214d;
    margin-bottom: 0.5rem;
  }
  .filterBtn {
    display: block;
    background: transparent;
    margin: 0.25rem 0;
    padding: 0.3rem;
    border: none;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    color: #00214d;
    border-radius: var(--radius);
    width: 13rem;
    text-align: left;
    &:hover {
      background: #d2e1f5;
    }
  }
  .singleFilterColors {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 13rem;
    button {
      width: 1.5rem;
      height: 1.5rem;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0.7;
    }
    .allBtnAcitve {
      border: 3px solid #00214d;
    }
    .singleColorActive {
      opacity: 1;
      svg {
        font-size: 1.5rem;
        color: var(--white);
        margin: 0;
        padding: 0;
      }
    }
  }

  .active {
    background: #acc6e9;
  }
  .labelShipping {
    color: #00214d;
    text-transform: capitalize;
  }
  .freeShipping {
    /* margin-right: 1rem; */
  }
  .singleFilterShipping {
    display: grid;
    grid-template-columns: auto 3rem 1fr;
    align-items: center;
    h5 {
      margin-bottom: 0.2rem;
    }
  }
  .clearFilters {
    display: block;
    margin-bottom: 1.5rem;
    padding: 0.7rem;
    background: #ff5470;
    color: #00214d;
    border: none;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: #efa5b1;
      color: #5b0a18;
    }
  }
`;

export default Filters;
