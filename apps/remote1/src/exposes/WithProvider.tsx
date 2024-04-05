import React from 'react';
import { useBoolean } from '@ornament-ui/kit/useBoolean';
import { themeOrnamentDefault, ThemeProvider } from '@ornament-ui/kit/ThemeProvider';
import { SnackbarProvider } from '@ornament-ui/kit/Snackbar';
import { Checker, Demo } from 'components';
import { Stack } from '@ornament-ui/kit/Stack';

export default function WithProvider() {
  const [withTheme, { toggle }] = useBoolean(true);
  const [demo, { toggle: demoToggle }] = useBoolean(true);

  const render = () => {
    if (demo) {
      return (
        <>
          <Demo />
        </>
      );
    }
    return null;
  };
  return (
    <div className="Block">
      <Stack gap="2xl">
        <p>
          <b>REMOTE 1</b>
        </p>
        <Checker value={withTheme} onChange={toggle}>
          ThemeProvider in remote 1
        </Checker>
        <Checker value={demo} onChange={demoToggle}>
          Components?
        </Checker>
      </Stack>

      {withTheme ? (
        <ThemeProvider theme={themeOrnamentDefault}>
          <SnackbarProvider>{render()}</SnackbarProvider>
        </ThemeProvider>
      ) : (
        render()
      )}
    </div>
  );
}
