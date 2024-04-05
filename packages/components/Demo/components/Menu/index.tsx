import React, { useRef } from 'react';
import { Menu as MenuComponent, MenuItem } from '@ornament-ui/kit/Menu';
import { ListItemIcon, ListItemText } from '@ornament-ui/kit/List';
import { UserIcon, MessageIcon, GroupUserMIcon, ExitIcon, SettingsIcon } from '@ornament-ui/icons';
import { Badge } from '@ornament-ui/kit/Badge';
import { Divider } from '@ornament-ui/kit/Divider';
import { Button } from '@ornament-ui/kit/Button';
import { useBoolean } from '@ornament-ui/kit/useBoolean';

export const Menu = () => {
  const ref = useRef(null);
  const [open, { off, toggle }] = useBoolean(false);

  return (
    <>
      <Button ref={ref} onClick={toggle}>
        Open Menu
      </Button>
      <MenuComponent
        open={open}
        anchorRef={ref}
        menuListProps={{
          style: {
            minWidth: 320,
          },
        }}
        onClose={off}
        placement="bottom"
      >
        <MenuItem onClick={function noRefCheck() {}}>
          <ListItemIcon>
            <UserIcon />
          </ListItemIcon>
          <ListItemText primary="Профиль" />
        </MenuItem>
        <MenuItem onClick={function noRefCheck() {}}>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Сообщения" />
          <ListItemIcon disableMargin>
            <Badge color="actionDark" content={5} />
          </ListItemIcon>
        </MenuItem>
        <MenuItem disabled onClick={function noRefCheck() {}}>
          <ListItemIcon>
            <GroupUserMIcon />
          </ListItemIcon>
          <ListItemText primary="Группы" />
        </MenuItem>
        <MenuItem onClick={function noRefCheck() {}}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Настройки" />
        </MenuItem>
        <Divider className="MixSpacing MixSpacing_mt_1x MixSpacing_mb_1x" color="secondary" role="separator" />
        <MenuItem onClick={function noRefCheck() {}}>
          <ListItemIcon>
            <ExitIcon />
          </ListItemIcon>
          <ListItemText primary="Выйти" />
        </MenuItem>
      </MenuComponent>
    </>
  );
};
