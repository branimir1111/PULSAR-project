import styled from 'styled-components';
import { useState } from 'react';
import { FormInput, Alert } from '../components';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import axios from 'axios';
import { useContextUser } from '../context/contextUser';
import { useContextProducts } from '../context/contextProducts';

const initialState = {
  alertType: '',
  alertText: '',
  showAlert: false,
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
  numberOfReviews: 0,
  averageRating: 0,
};
const DashboardCreateProducts = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, notAllValuesAlert } = useContextUser();
  const { setupProduct } = useContextProducts();

  const colorsArr = ['#7cbc14', '#b02cc5', '#ebca2a', '#12b4cd ', '#e12241'];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleChecked = (e) => {
    setValues({ ...values, [e.target.name]: e.target.checked });
  };

  const handleColors = (e) => {
    let newColors = values.colors;
    newColors.push(e.target.dataset.color);
    setValues({
      ...values,
      [e.target.name]: newColors,
    });
  };

  const handleImage = async (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);
    try {
      const {
        data: {
          image: { src },
        },
      } = await axios.post(`/api/v1/products/uploadImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const imageValue = src;
      setValues({ ...values, [e.target.name]: imageValue });
    } catch (error) {
      const imageValue = null;
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      price,
      description,
      image,
      company,
      colors,
      featured,
      freeShipping,
      inventory,
      category,
      numberOfReviews,
      averageRating,
    } = values;

    if (
      !name ||
      !price ||
      !description ||
      !image ||
      !company ||
      !colors ||
      !inventory ||
      !category
    ) {
      notAllValuesAlert();
      return;
    }
    const currentProduct = {
      name,
      price,
      description,
      image,
      company,
      colors,
      featured,
      freeShipping,
      inventory,
      category,
      numberOfReviews,
      averageRating,
    };
    setupProduct({
      currentProduct,
      alertText: 'Product created',
    });
  };

  const resetAll = () => {
    setValues({
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
      numberOfReviews: 0,
      averageRating: 0,
    });
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
        <div className='form-row'>
          <label htmlFor='image' className='form-label'>
            Image
          </label>
          <input
            type='file'
            name='image'
            id='image'
            accept='image/*'
            onChange={handleImage}
          />
        </div>
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
        <h5>Colors</h5>
        {colorsArr.map((singleColor, index) => {
          return (
            <button
              key={index}
              type='button'
              name='colors'
              className='colorBtn'
              style={{ background: singleColor }}
              data-color={singleColor}
              onClick={handleColors}
            >
              {values.colors.includes(singleColor) ? (
                <MdOutlineCheckCircleOutline />
              ) : null}
            </button>
          );
        })}

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
        {showAlert && <Alert />}
        <button type='submit' className='submitBtn'>
          create product
        </button>
      </form>
      <button type='button' onClick={resetAll}>
        reset All
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  .colorBtn {
    width: 20px;
    height: 20px;
  }
`;
export default DashboardCreateProducts;
