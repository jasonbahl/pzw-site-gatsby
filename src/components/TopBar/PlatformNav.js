import React from 'react';
import { graphql, useStaticQuery } from  'gatsby'
import styled from 'styled-components';

import { brand } from '../../utils/vars';

const NavUl = styled.ul`
  color: #fff;
  list-style-type: none;
  margin: 0 0 0 auto;
  padding: 0;
`

const NavLi = styled.li`
  display: inline-block;
`

const NavLink = styled.a`
  color: #fff;
  display: block;
  margin-left: 10px;
  padding: 10px;
  text-decoration: none;

  &.btn-callout-primary {
    background: ${brand.SECONDARY};

    &:focus,
    &:hover {
      background: ${brand.SECONDARY_MEDIUM};
    }
  }

  &.btn-callout-secondary {
    background: ${brand.PRIMARY_LIGHT};

    &:focus,
    &:hover {
      background: ${brand.PRIMARY_MEDIUM};
    }
  }
`

const PlatformNav = () => {
  const data = useStaticQuery(graphql`
    query PlatformNavQuery {
      wpMenu(name: {eq: "Platform"}) {
        id
        menuItems {
          nodes {
            cssClasses
            id
            label
            target
            url
          }
        }
      }
    }
  `
  )
  
  return (
    <NavUl>
      {data.wpMenu?.menuItems.nodes.map(item => (
          <NavLi key={item.id}>
            <NavLink href={item.url} className={item.cssClasses} target={item.target}>
              {item.label}
            </NavLink>
          </NavLi>
      ))}
    </NavUl>
  )

};

export default PlatformNav;