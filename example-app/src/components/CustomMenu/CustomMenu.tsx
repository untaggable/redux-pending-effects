import React from 'react';
import { Close, Menu as HamburgerMenuIcon } from 'grommet-icons';
import { Box, ButtonType, Menu, MenuProps } from 'grommet';
import { Omit } from 'grommet/utils';

type MenuState = {
  drop: boolean,
  hover: boolean
}

interface CustomMenuProps extends MenuProps {
  iconColorOnHover: string
}

export const CustomMenu: React.FC<CustomMenuProps & Omit<ButtonType, 'icon'>> = ({iconColorOnHover, ...menuProps}) => {
  return (
    <Menu plain {...menuProps}>
      {({ drop, hover }: MenuState) => {
        const color = hover ? iconColorOnHover : undefined;
        const menuIcon = drop ? <Close color={color}/> : <HamburgerMenuIcon color={color}/>;

        return (
          <Box align='end' pad="small">{menuIcon}</Box>
        );
      }}
    </Menu>
  )
};