import styled from 'styled-components';
import { useState } from 'react';
import image1 from '../assets/customPictures/customImage1.png';
import image2 from '../assets/customPictures/customImage2.png';
import image3 from '../assets/customPictures/customImage3.png';
import image4 from '../assets/customPictures/customImage4.png';
const singleProductImages = ({ image, smallImages, price }) => {
  const [mainImage, setMainImage] = useState(image);
  const smallImgs = [image, image1, image2, image3, image4];
  return (
    <Wrapper>
      <div className='gallery'>
        {smallImgs.map((smallImg, index) => {
          return (
            <div key={index}>
              <img
                src={smallImg}
                onClick={() => setMainImage(smallImg)}
                className={`${smallImg === mainImage ? 'active' : null}`}
              />
            </div>
          );
        })}
        {/*VITE PROBLEM : Could not Fast Refresh */}
        {/* {smallImages.map((smallImage, index) => {
          return (
            <div key={index}>
              <img
                src={smallImage}
                className='smallImage'
                onClick={() => setMainImage(smallImage)}
              />
            </div>
          );
        })} */}
      </div>
      <div className='mainImageFrame'>
        <div className='priceFrame'>
          <p className='price'>
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price / 100)}
          </p>
        </div>
        <img src={mainImage} alt='Main Image' className='mainImage' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .mainImageFrame {
    position: relative;
  }
  .priceFrame {
    position: absolute;
    top: calc(100% - 3rem);
    border-radius: 0 var(--radius) 0 var(--radius);
    width: 10rem;
    height: 3rem;
    background: #994ff3;
    .price {
      margin: 0;
      font-size: 1.3rem;
      color: var(--white);
      text-align: center;
      padding: 0.5rem 0;
    }
  }

  .mainImage {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid #994ff3;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 576px) {
    .mainImage {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .mainImage {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;
export default singleProductImages;
