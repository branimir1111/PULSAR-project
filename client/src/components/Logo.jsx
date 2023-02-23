import logo from '../assets/neutronStar1.png';
import styled from 'styled-components';
import star from '../assets/star.png';

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt='logo' className='logo' />
      <div className='star'>
        <h3 id='company-name'>PULSAR</h3>
        <img src={star} alt='star' className='starPic' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &:hover {
    .logo {
      transition: all 0.3s ease-in-out;
      scale: 1.04;
      opacity: 90%;
    }
    #company-name {
      color: var(--headerHomeButton);
    }
  }
  .logo {
    width: 50px;
    height: 50px;
    opacity: 100%;
  }
  #company-name {
    display: inline-block;
    margin-left: 0.5rem;
    color: var(--headerHomeParagraph);
  }
  .star {
    display: inline-block;
    position: relative;
  }
  .starPic {
    width: 25px;
    top: -8%;
    left: 85%;
    position: absolute;
  }
`;
export default Logo;
