import React, { useState } from 'react';
import { Button } from '@ornament-ui/kit/Button';
import {
  Dialog as DialogComponent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
} from '@ornament-ui/kit/Dialog';
import { useHook } from '../../../hooks/useHook';

export const Dialog = () => {
  const [open, set] = useState(false);
  const r = useHook();
  const toggle = () => set((p) => !p);

  return (
    <>
      <Button onClick={toggle}>open dialog</Button>
      <DialogComponent onClose={toggle} open={open}>
        <DialogHeader>
          <DialogTitle>Hello world! {r}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam blanditiis dignissimos doloremque ea
          enim eveniet fugiat ipsam itaque modi molestiae odio, optio perspiciatis placeat, porro repudiandae saepe
          suscipit velit!
        </DialogBody>
        <DialogFooter>
          <Button onClick={toggle}>Close</Button>
        </DialogFooter>
      </DialogComponent>
    </>
  );
};
