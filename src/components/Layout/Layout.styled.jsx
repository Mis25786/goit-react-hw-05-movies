import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 600;
  font-size: 24px;

  &.active {
    color: rgb(49, 227, 17);
  }
`;
