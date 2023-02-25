import styled from 'styled-components';
import { useState } from 'react';
import { FormInput } from '../components';

const initialState = {
  name: '',
  price: 0,
  description: '',
  image: '',
  company: '',
  colors: [],
  featured: false,
  freeShipping: false,
  inventory: 0,
  category: '',
};
const DashboardCreateProducts = () => {
  const [values, setValues] = useState(initialState);
  {
    const colorsArr = ['#7cbc14', '#b02cc5', '#ebca2a', '#12b4cd ', '#e12241'];
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleChangeColor = (e) => {
    setValues({ ...values, [e.target.name]: colors.push(e.target.value) });
  };

  const handleChecked = (e) => {
    setValues({ ...values, [e.target.name]: e.target.checked });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const resetAll = () => {
    setValues(initialState);
  };

  return (
    <Wrapper>
      <form className='formCreate' onSubmit={onSubmit}>
        {/* NAME */}
        <FormInput
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
        {/* PRICE */}
        <FormInput
          type='text'
          name='price'
          value={values.price}
          handleChange={handleChange}
        />
        {/* DESCRIPTION */}
        <div className='description'>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            className='description'
            rows={7}
            cols={41}
            value={values.description}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* IMAGE */}
        {/* COMPANY */}
        <label htmlFor='company'>company</label>
        <select
          name='company'
          id='company'
          className='companyInput'
          value={values.company}
          onChange={handleChange}
        >
          <option value=''>-- select company --</option>
          <option value='Leica'>Leica</option>
          <option value='Topcon'>Topcon</option>
          <option value='Trimble'>Trimble</option>
          <option value='CHCNAV'>CHCNAV</option>
        </select>
        {/* COLORS */}

        {/* <div className='colorsContainer'>
          <label htmlFor='colors' className='labelColors'>
            <h5 style={{ background: '#7cbc14' }}>col</h5>
          </label>
          <input
            type='checkbox'
            name='colors'
            className='colorInput'
            checked={values.colors}
            onChange={handleChangeColor}
          />
        </div> */}
        {/* FEATURED */}
        <div className='featuredContainer'>
          <label htmlFor='featured' className='labelFeatured'>
            <h5>Featured</h5>
          </label>
          <input
            type='checkbox'
            name='featured'
            className='featuredInput'
            checked={values.featured}
            onChange={handleChecked}
          />
        </div>
        {/* FREESHIPPING */}
        <div className='freeShippingContainer'>
          <label htmlFor='freeShipping' className='labelFreeShipping'>
            <h5>freeShipping</h5>
          </label>
          <input
            type='checkbox'
            name='freeShipping'
            className='freeShippingInput'
            checked={values.freeShipping}
            onChange={handleChecked}
          />
        </div>
        {/* INVENTORY */}
        <FormInput
          type='text'
          name='inventory'
          value={values.inventory}
          handleChange={handleChange}
        />
        {/* CATEGORY */}
        <label htmlFor='category'>company</label>
        <select
          name='category'
          id='category'
          className='categoryInput'
          value={values.category}
          onChange={handleChange}
        >
          <option value=''>-- select category --</option>
          <option value='controller'>controller</option>
          <option value='gps'>gps</option>
          <option value='level'>level</option>
          <option value='machine control system'>machine control system</option>
          <option value='marine system'>marine system</option>
          <option value='scanner'>scanner</option>
          <option value='total station'>total station</option>
        </select>
      </form>
      <button type='button' onClick={resetAll}>
        reset All
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
`;
export default DashboardCreateProducts;
