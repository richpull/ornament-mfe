import React, { useRef } from 'react';
import { Button } from '@ornament-ui/kit/Button';
import { Stack } from '@ornament-ui/kit/Stack';
import { Popover } from '@ornament-ui/kit/Popover';
import { useBoolean } from '@ornament-ui/kit/useBoolean';
import { Menu, Dialog, Select, Message } from './components';
export const Demo = () => {
  const popover = useRef(null);
  const [open, { off, toggle }] = useBoolean(false);
  return (
    <>
      <Stack gap="s">
        <Button>Button</Button>
        <Message />
        <Dialog />
        <Select />
        <Menu />
        <Button ref={popover} onClick={toggle}>
          Открыть Popover
        </Button>
      </Stack>
      <Popover open={open} onClose={off} anchorRef={popover}>
        Контент внутри Popover
      </Popover>
    </>
  );
};
