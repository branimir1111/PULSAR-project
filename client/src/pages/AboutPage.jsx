import styled from 'styled-components';
import img from '../assets/flying_drone_whiteBlue.svg';
import PageTape from '../components/PageTape';
const AboutPage = () => {
  return (
    <main style={{ background: `#004643` }}>
      <PageTape title='about' />
      <Wrapper>
        <article>
          <div className='title'>
            <h2>About us</h2>
          </div>
          <p>
            <span>Pulsar</span> creates complete solutions for professionals
            around the world. We value sustainable profitability, performance
            over procedure, setting measurable goals and working collectively to
            achieve our financial targets.We seek personal fulfillment by doing
            great work while enjoying what we do. We lead with a sense of
            urgency, without prejudice or politics.
          </p>
        </article>
        <img src={img} alt='flying drone' />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  padding: 5rem 1rem 1rem 1rem;
  gap: 4rem;
  span {
    color: var(--red-light);
    font-weight: 600;
  }
  img {
    margin-top: 1rem;
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 450px;
  }
  h2 {
    margin-top: 5rem;
  }
  p {
    max-width: 40rem;
    line-height: 2;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--headerHomeParagraph);
  }
  @media (min-width: 992px) {
    max-width: var(--max-width);
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - (5rem + 10vh));
  }
`;

export default AboutPage;
