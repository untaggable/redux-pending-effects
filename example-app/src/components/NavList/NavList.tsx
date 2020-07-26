import React from 'react';
import { NavLink } from 'react-router-dom';
import { Anchor, Box } from 'grommet';

import styles from './NavList.module.scss';
import { routes } from '../../constants';

type NavLinkProps = {
  to: string,
  label: string,
  end?: boolean
}

const navLinkProps: NavLinkProps[] = [
  {
    to: routes.HOME,
    label: 'Home',
    end: true
  },
  {
    to: routes.LOGIN,
    label: 'Login'
  },
  {
    to: routes.PATENTS,
    label: 'NASA Patents'
  },
  {
    to: routes.LIBRARY,
    label: 'NASA Library'
  },
  {
    to: routes.DASHBOARD,
    label: 'Dashboard'
  }
];

export const NavList: React.FC = () => (
  <Box
    tag='ul'
    pad='small'
    justify='between'
    direction='column'
  >
    {
      navLinkProps.map(({label, ...rest}) => (
        <li key={label}>
          <NavLink {...rest} activeClassName={styles.navListItemActiveLink}>
            <Anchor as='span' label={label} size='xlarge'/>
          </NavLink>
        </li>
      ))
    }
  </Box>
);