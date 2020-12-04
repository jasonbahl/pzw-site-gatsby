import React from 'react';
import { graphql, useStaticQuery, Link } from  'gatsby'
import styled from 'styled-components';

const FooterNavUl = styled.ul`
  color: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const NavLi = styled.li`
  display: inline-block;
  margin: 0 12px;
  position: relative;

  &:first-of-type {
    margin-left: 0;
  }

  &:not(:last-of-type)::after {
    border-right: 1px solid #ccc;
    content: " ";
    display: block;
    height: 11px;
    position: absolute;
    top: 8px;
    right: -12px;
  }
`

const NavLink = styled(Link)`
  border-bottom: 2px solid transparent;
  color: #fff;
  display: block;
  padding: 4px 0;
  text-decoration: none;

  &:focus,
  &:hover {
    border-bottom-color: #fff;
  }
`

const FooterNav = () => {
  const props = useStaticQuery(graphql`
    query FooterNavQuery {
      wpMenu(name: {eq: "Footer"}) {
        id
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `
  )
  
  return (
    <footer>
      <FooterNavUl>
        {props.wpMenu.menuItems.nodes.map(item => (
            <NavLi key={item.id}>
              <NavLink to={item.url}>
                {item.label}
              </NavLink>
            </NavLi>
        ))}
      </FooterNavUl>
    </footer>
  )

};

export default FooterNav;