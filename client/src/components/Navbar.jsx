import Logo from './Logo';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { mainLinks } from '../utils/links';
import CartLoginBtn from './CartLoginBtn';
import { useContextProducts } from '../context/contextProducts';
import { useContextUser } from '../context/contextUser';

const Navbar = () => {
  const { openSidebar } = useContextProducts();
  const { user } = useContextUser();

  return (
    <Wrapper>
      <div className='navMain'>
        <div className='navLogoMenuBtn'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'activeLink' : null)}
          >
            <Logo />
          </NavLink>
          <button type='button' className='navMenuBtn' onClick={openSidebar}>
            <HiMenu />
          </button>
        </div>
        <ul className='navMainLinks'>
          {mainLinks.map((mainLink) => {
            const { id, name, url } = mainLink;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) => (isActive ? 'activeLink' : null)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
          {user && (
            <li>
              <NavLink
                to='/payment'
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
                className={({ isActive }) => (isActive ? 'activeLink' : null)}
              >
                dashboard
              </NavLink>
            </li>
          )}
        </ul>
        <CartLoginBtn />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  background: var(--headerHomeBackground);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .navMain {
    padding: 0 calc((100vw - var(--max-width)) / 2);
    position: fixed;
    background: var(--headerHomeBackground);
    margin: 0 auto;
    /* max-width: var(--max-width); */
    width: 100%;
    height: 5rem;
    padding-top: 0.7rem;
    z-index: 999;
  }
  .navLogoMenuBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
  }
  .navMenuBtn {
    background: transparent;
    border: transparent;
    color: var(--headerHomeHeadline);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .navMenuBtn:hover {
    color: var(--headerHomeButton);
    scale: 1.05;
  }
  .navMainLinks {
    display: none;
  }
  .cartLoginWrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .navMenuBtn {
      display: none;
    }
    .navMain {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      width: 100%;
      z-index: 999;
    }

    .navMainLinks {
      display: flex;
      justify-content: center;

      a {
        color: var(--headerHomeHeadline);
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.7rem;
        &:hover {
          color: var(--headerHomeButton);
        }
      }
      .activeLink {
        border-bottom: 2px solid var(--headerHomeButton);
      }
    }

    .cartLoginWrapper {
      display: grid;
      margin-right: 1rem;
    }
  }
`;
export default Navbar;
