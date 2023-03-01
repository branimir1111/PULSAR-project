import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContextProducts } from '../context/contextProducts';
import styled from 'styled-components';
import { FormInput, Alert, AlertProduct } from '../components';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import axios from 'axios';
import { useContextUser } from '../context/contextUser';

const DashboardDelete = () => {
  const { showAlert } = useContextUser();
  const {
    singleProduct_error: error,
    singleProduct,
    getSingleProduct,
    deleteProduct,
    alertTypeProduct,
    alertTextProduct,
    showAlertProduct,
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

  const {
    _id,
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
    averageRating,
    numberOfReviews,
  } = singleProduct;

  const deleteThis = () => {
    deleteProduct({
      singleProduct,
      _id,
    });
  };

  return (
    <Wrapper>
      <div className='container'>
        <h4>
          Are you sure you want to <span>delete</span> this product?
        </h4>
        <hr />
        <div className='content'>
          <img src={image} alt={name} />
          <div className='productInfo'>
            <h5>
              Company : <span>{company}</span>
            </h5>
            <h5>
              Name : <span>{name}</span>
            </h5>
            <h5>
              Category : <span>{category}</span>
            </h5>
          </div>
        </div>
        <hr />
        <footer>
          {showAlertProduct && <AlertProduct />}
          <button type='button' className='deleteBtn' onClick={deleteThis}>
            delete product
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4d0d6;
  .container {
    width: 400px;
    background: #094067;
    padding: 1rem;
    border-radius: var(--radius);
  }
  h4 {
    text-transform: none;
    span {
      color: #f08c9e;
    }
  }
  img {
    width: 75px;
  }
  .content {
    display: grid;
    padding: 1rem 0;
    grid-template-columns: 1fr 1fr;
  }
  hr {
    border-top: 1px solid #fffffe;
    margin-bottom: 1rem;
  }
  .deleteBtn {
    border: none;
    border-radius: var(--radius);
    padding: 0.5rem 1rem;
    cursor: pointer;
    text-transform: uppercase;
    background: #eea9b5;
    color: #8b1226;
    transition: var(--transition);
    &:hover {
      background: #cc596c;
    }
  }
`;

export default DashboardDelete;
