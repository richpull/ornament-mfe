import { useSnackbar } from '@ornament-ui/kit/Snackbar';
import { Button } from '@ornament-ui/kit/Button';
import React from 'react';

export const Message = () => {
  const { pushMessage } = useSnackbar();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        pushMessage({ title: 'Snackbar is worked!', status: 'success' });
      }}
    >
      Test snackbar
    </Button>
  );
};

export default Message;
