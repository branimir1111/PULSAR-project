import styled from 'styled-components';
import FormInput from './FormInput';
const HomePageNewsletter = () => {
  return (
    <Wrapper>
      <div className='sectionCenter'>
        <h2>Join Our Newsletter</h2>
        <h5>DISCOVER WHAT WE CAN DO FOR YOU</h5>
        <p>
          If you would like to receive a quotation, technical information and
          simply find out more about <span>Pulsar</span>, please take a minute
          to complete our inquiry form. We are confident that our products and
          solutions will exceed your expectations.
        </p>
        <form
          className='form'
          action='https://formspree.io/f/xeqwalvp'
          method='POST'
        >
          <FormInput
            type='text'
            name='firstName'
            labelText='First Name'
            placeholder='First Name'
          />
          <FormInput
            type='email'
            name='_replyto'
            labelText='Email'
            placeholder='Your Email'
          />
          <button type='submit' className='submitBtn'>
            subscribe
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--headerHomeButton);
  padding: 3rem 0;
  span {
    font-weight: 600;
  }
  h2 {
    padding-top: 2rem;
  }
  h2,
  h5 {
    color: var(--headerHomeBackground);
  }
  p {
    color: var(--headerHomeBackground);
    max-width: 45rem;
  }
  .form {
    display: grid;
  }
  .formLabel {
    color: var(--headerHomeBackground);
    font-weight: 900;
  }
  .formInput {
    padding: 1rem;
    width: 350px;
    height: 50px;
    border: none;
    border-radius: 0.15rem;
    margin: 1rem 0 0 0;
  }
  .formInput::placeholder {
    color: var(--red-light);
    font-weight: 600;
  }
  .submitBtn {
    width: 200px;
    height: 50px;
    margin-top: 1.5rem;
    background-color: var(--headerHomeBackground);
    border: none;
    border-radius: 0.15rem;
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--headerHomeTertiary);
    &:hover {
      transition: var(--transition);
      background-color: var(--headerHomeParagraph);
      color: var(--headerHomeBackground);
      cursor: pointer;
    }
  }
  @media (min-width: 992px) {
    .form {
      grid-template-columns: repeat(3, 1fr);
      align-items: end;
    }
  }
`;
export default HomePageNewsletter;
