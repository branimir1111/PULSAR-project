import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DashboardAside = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink
            to='/dashboard/getall'
            className={({ isActive }) =>
              isActive ? 'activeLink navLink' : 'navLink'
            }
          >
            Get All Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/create'
            className={({ isActive }) =>
              isActive ? 'activeLink navLink' : 'navLink'
            }
          >
            Create Product
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  padding: 0.5rem;
  background: #a8f4e9;
  li {
    margin-bottom: 0.5rem;
  }
  .navLink {
    color: #00214d;
    text-transform: uppercase;
    padding: 0.3rem;
  }
  .activeLink {
    background: #00ebc7;
    border-radius: var(--radius);
  }
`;

export default DashboardAside;
