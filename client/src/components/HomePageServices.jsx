import styled from 'styled-components';
import { services } from '../utils/links';
const HomePageServices = () => {
  return (
    <Wrapper>
      <div className='sectionCenter'>
        <article className='header'>
          <h3>Services & Support</h3>
          <p className='headerParagraph'>
            Our product services cover a wide range of uses, all conducted by
            highly-qualified technicians using the latest in professional
            tools.Eliminate delays, finish jobs faster and avoid costly site
            revisits with workflow services to send and receive data directly
            from the field to the office and back.
          </p>
        </article>
        <div className='allServices'>
          {services.map((service) => {
            const { id, icon, title, content } = service;
            return (
              <article key={id} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{content}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 3rem 0;
  h3 {
    color: var(--headerHomeHeadline);
  }
  .headerParagraph {
    max-width: 500px;
    color: var(--headerHomeParagraph);
    line-height: 2;
  }
  p {
    line-height: 2;
    color: var(--headerHomeParagraph);
  }
  .allServices {
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--headerHomeHeadline);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--headerHomeBackground);
      line-height: 1.5;
    }
  }
  h4 {
    color: var(--headerHomeBackground);
    margin-top: 1rem;
  }
  .icon {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    border-radius: var(--radius);
    background: var(--headerHomeParagraph);
    color: var(--headerHomeBackground);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .headerParagraph {
      padding-left: 1.5rem;
    }
  }
  @media (min-width: 576px) {
    .allServices {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
`;
export default HomePageServices;
