import styled from 'styled-components';
import { useState } from 'react';
import { FormInput, Alert, AlertProduct } from '../components';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import axios from 'axios';
import { useContextUser } from '../context/contextUser';
import { useContextProducts } from '../context/contextProducts';

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
  numberOfReviews: 0,
  averageRating: 0,
};
const DashboardCreateProducts = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, notAllValuesAlert } = useContextUser();
  const { setupProduct, alertTypeProduct, alertTextProduct, showAlertProduct } =
    useContextProducts();

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
  const resetColors = () => {
    setValues({
      ...values,
      colors: [],
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
        <h3>create product</h3>
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
          <label htmlFor='description' id='descriptionLabel'>
            description
          </label>
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
          <label htmlFor='image' className='imageLabel'>
            image
          </label>
          <input
            type='file'
            name='image'
            id='imageInput'
            accept='image/*'
            onChange={handleImage}
          />
        </div>
        {/* COMPANY */}
        <label htmlFor='company' className='companyLabel'>
          company
        </label>
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
        <h5 className='colorLabel'>Colors</h5>
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

        <button type='button' onClick={resetColors} className='resetColorsBtn'>
          reset colors
        </button>

        {/* FEATURED */}
        <div className='featuredContainer'>
          <label htmlFor='featured'>
            <h5 className='featuredLabel'>Featured</h5>
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
          <label htmlFor='freeShipping'>
            <h5 className='freeShippingLabel'>freeShipping</h5>
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
        <label htmlFor='category' className='categoryLabel'>
          category
        </label>
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
        {showAlertProduct && <AlertProduct />}
        <button type='submit' className='submitBtn'>
          create product
        </button>
      </form>
      <button type='button' onClick={resetAll} className='resetAllBtn'>
        reset All
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  background: #e3f6f5;
  padding: 1rem 0;
  .formCreate {
    background: #bae8e8;
    width: 400px;
    padding: 1rem;
    border-radius: var(--radius);
  }
  .formInput {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: var(--radius);
    margin: 0.5rem 0;
  }
  #descriptionLabel {
    display: block;
  }
  .description {
    width: 100%;
    border: none;
    border-radius: var(--radius);
    margin: 0.5rem 0;
  }
  .imageLabel {
    display: block;
    margin-bottom: 0.5rem;
  }
  #imageInput {
    border: none;
    border-radius: var(--radius);
  }
  .companyLabel {
    display: block;
    margin: 1rem 0;
  }
  .companyInput {
    border: none;
    border-radius: var(--radius);
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  .colorLabel {
    color: #272343;
  }
  .colorBtn {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    margin-right: 0.3rem;
    svg {
      color: #e3f6f5;
      margin: 0;
      padding: 0;
      font-size: 1.5rem;
    }
  }

  .resetColorsBtn {
    display: block;
    border: none;
    border-radius: var(--radius);
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
      box-shadow: var(--light-shadow);
    }
  }
  .featuredContainer {
    display: grid;
    grid-template-columns: 120px 1fr;
    margin: 1rem 0;
  }
  .featuredLabel {
    color: #272343;
    padding-top: 0.6rem;
  }
  .featuredInput {
    display: block;
    width: 1rem;
  }
  .freeShippingContainer {
    display: grid;
    grid-template-columns: 120px 1fr;
    margin: 1rem 0;
  }
  .freeShippingLabel {
    color: #272343;
    padding-top: 0.6rem;
  }
  .freeShippingInput {
    display: block;
    width: 1rem;
  }
  .categoryLabel {
    display: block;
    margin: 1rem 0;
  }
  .categoryInput {
    border: none;
    border-radius: var(--radius);
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .submitBtn {
    display: block;
    background: #6246ea;
    color: #fffffe;
    text-transform: uppercase;
    border: none;
    border-radius: var(--radius);
    padding: 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      box-shadow: var(--light-shadow);
      background: #351bb4;
    }
  }
  .resetAllBtn {
    display: block;
    border: none;
    border-radius: var(--radius);
    padding: 0.5rem;
    color: #fffffe;
    text-transform: uppercase;
    background: #d76464;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: #c42c2c;
    }
  }
`;
export default DashboardCreateProducts;
