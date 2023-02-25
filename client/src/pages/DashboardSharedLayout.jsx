import styled from 'styled-components';
import { DashboardAside } from '../components';
import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <Wrapper>
      <div className='sectionCenter page-100 mainContainer'>
        <DashboardAside />
        <Outlet />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #00214d;
  background: #f2f4f6;
  .mainContainer {
    display: grid;
    background: #f2f4f6;
  }
  @media (min-width: 768px) {
    .mainContainer {
      grid-template-columns: 200px auto;
    }
  }
`;

export default DashboardPage;
