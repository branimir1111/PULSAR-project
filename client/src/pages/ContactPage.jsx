import styled from 'styled-components';
import img from '../assets/contact_us.svg';
import { PageTape, FormInput } from '../components';

const ContactPage = () => {
  return (
    <main style={{ background: `#90b4ce` }}>
      <PageTape title='contact' />
      <Wrapper>
        <article>
          <div className='title'>
            <h2>Contact us</h2>
          </div>
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
            <div className='messageLabel'>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                className='textAreaInput'
                placeholder='Your message'
                rows={7}
                cols={41}
              ></textarea>
            </div>

            <button type='submit' className='submitBtn'>
              send message
            </button>
          </form>
        </article>
        <img src={img} alt='contact us' className='image' />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  background: #90b4ce;
  display: grid;
  padding: 1rem 1rem 1rem 1rem;
  gap: 4rem;
  span {
    color: var(--red-light);
    font-weight: 600;
  }
  .image {
    /* display: none; */
    height: 50px;
  }
  .formInput {
    padding: 1rem;
    width: 350px;
    height: 50px;
    border: none;
    border-radius: 0.15rem;
    margin: 1rem 0 0 0;
  }
  .textAreaInput {
    display: block;
    border: transparent;
    border-radius: var(--radius);
    margin: 1rem 0;
    padding: 1rem;
  }
  .textAreaInput::placeholder {
    font-family: var(--paragraphFont);
  }
  .messageLabel {
    padding: 1rem 0 0 0;
  }
  h2 {
    margin-top: 4rem;
    text-align: left;
  }
  .submitBtn {
    border: none;
    background: #ef4565;
    text-transform: uppercase;
    padding: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: #3da9fc;
    }
  }
  @media (min-width: 992px) {
    max-width: var(--max-width);
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    min-height: calc(90vh - 4rem);
  }
  .image {
    margin-top: 1rem;
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 450px;
  }
`;

export default ContactPage;
