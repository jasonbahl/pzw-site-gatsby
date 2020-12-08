import React from 'react';
import { graphql, useStaticQuery, Link } from  'gatsby'
import styled from 'styled-components';

import { brand } from '../utils/vars';

const MainNavUl = styled.ul`
  color: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const NavLi = styled.li`
  display: inline-block;
  margin: 0 12px;
  position: relative;

  &:not(:last-of-type)::after {
    border-right: 1px solid #ccc;
    content: " ";
    display: block;
    height: 0.5rem;
    position: absolute;
    top: 0.5rem;
    right: -12px;
  }

  &:hover {

    ul {
      display: block;
    }
  }
`

const NavLink = styled(Link)`
  border-bottom: 2px solid transparent;
  color: #fff;
  display: block;
  padding: 4px 0;
  position: relative;
  text-decoration: none;

  &:focus,
  &:hover {
    border-bottom-color: #fff;

    + ul {
      display: block;
    }
  }
`

const SubNavUl = styled.ul`
  display: none;
  list-style-type: none;
  margin: -2px 0 0;
  padding: 0;
  position: absolute;
  left: -12px;
`

const SubNavLi = styled.li`
  display: inline-block;
  margin: 0 12px;
  position: relative;
  white-space: nowrap;
  width: 100%;;
`

const SubNavLink = styled(Link)`
  background: #f9f9f9;
  color: ${brand.PRIMARY};
  display: block;
  padding: 10px 15px;
  text-decoration: none;

  &:focus,
  &:hover {
    background: #f1f1f1;
  }
`

const MainNav = () => {
  const data = useStaticQuery(graphql`
    query MainNavQuery {
      allWpMenu(filter: {name: {eq: "Main nav"}}) {
        edges {
          node {
            menuItems {
              nodes {
                id
                label
                url
                parentId
                childItems {
                  nodes {
                    id
                    label
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  )
  
  return (
    <MainNavUl>
      {data.allWpMenu.edges[0].node.menuItems.nodes.map(item => (
        // TODO: refactor this fragment
        <>
          {item.parentId === null ?
          <NavLi key={item.id}>
            <NavLink to={item.url}>
              {item.label}
            </NavLink>
            {item.childItems.nodes.length ?
              <SubNavUl key={`sub_${item.id}`}>
                {item.childItems.nodes.map(item => (
                  <SubNavLi key={item.id}>
                    <SubNavLink to={item.url}>
                      {item.label}
                    </SubNavLink>
                  </SubNavLi>
                ))}
              </SubNavUl>
              : '' }
          </NavLi>
          : ''}
        </>
      ))}
    </MainNavUl>
  )

};

export default MainNav;