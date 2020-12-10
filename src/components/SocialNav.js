import React from 'react';
import { graphql, useStaticQuery } from  'gatsby'
import styled from 'styled-components';

import iconSocialTwitter from '../images/iconSocialTwitter.png';
import iconSocialFacebook from '../images/iconSocialFacebook.png';
import iconSocialInstagram from '../images/iconSocialInstagram.png';

const NavUl = styled.ul`
  color: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0 10px;
`

const NavLi = styled.li`
  display: inline-block;
  margin: 0 5px;
`

const NavLink = styled.a`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 40px;
  color: #fff;
  display: block;
  height: 40px;
  padding: 0 5px;
  text-indent: -9999px;
  width: 40px;

  &.social-twitter {
    background-image: url(${iconSocialTwitter});
  }

  &.social-facebook {
    background-image: url(${iconSocialFacebook});
  }

  &.social-instagram {
    background-image: url(${iconSocialInstagram});
  }
`

const SocialNav = () => {
  const data = useStaticQuery(graphql`
    query SocialNavQuery {
      wpMenu(id: {eq: "dGVybTo0"}) {
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

export default SocialNav;