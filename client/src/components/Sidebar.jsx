import { NavLink } from 'react-router-dom';
import { mainLinks } from '../utils/links';
import styled from 'styled-components';
import CartLoginBtn from './CartLoginBtn';
import { FaRegWindowClose } from 'react-icons/fa';
import Logo from './Logo';
import { useContextProducts } from '../context/contextProducts';
import { useContextUser } from '../context/contextUser';

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useContextProducts();
  const { user } = useContextUser();
  return (
    <Wrapper>
      <aside className={sidebarOpen ? 'sidebar sidebarOpen ' : 'sidebar'}>
        <div className='sidebarNav'>
          <NavLink to='/' onClick={closeSidebar}>
            <Logo />
          </NavLink>
          <button type='button' className='closeBtn' onClick={closeSidebar}>
            <FaRegWindowClose />
          </button>
        </div>
        <ul className='mainLinks'>
          {mainLinks.map((mainLink) => {
            const { id, name, url } = mainLink;
            return (
              <li key={id} onClick={closeSidebar}>
                <NavLink to={url}>{name}</NavLink>
              </li>
            );
          })}
          {user && (
            <li>
              <NavLink
                to='/payment'
                onClick={closeSidebar}
                className={({ isActive }) => (isActive ? 'activeLink' : null)}
              >
                payment
              </NavLink>
            </li>
          )}
          {user && user.role === 'admin' && (
            <li>
              <NavLink
                to='/dashboard'
                onClick={closeSidebar}
                className={({ isActive }) => (isActive ? 'activeLink' : null)}
              >
                dashboard
              </NavLink>
            </li>
          )}
        </ul>
        <CartLoginBtn />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  .sidebarNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .closeBtn {
    font-size: 1.7rem;
    background: transparent;
    border-color: transparent;
    color: var(--red-light);
    cursor: pointer;
    transition: var(--transition);
  }
  .closeBtn:hover {
    color: var(--red-dark);
  }
  .mainLinks {
    margin-bottom: 2rem;
  }
  .mainLinks a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--headerHomeParagraph);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .mainLinks a:hover {
    padding-left: 2.5rem;
    background: var(--headerHomeParagraph);
    color: var(--headerHomeBackground);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--headerHomeBackground);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .sidebarOpen {
    transform: translate(0);
    z-index: 999;
  }
  .cartLoginWrapper {
    margin: 1.5rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
