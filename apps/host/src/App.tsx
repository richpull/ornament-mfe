import React, { Suspense } from 'react';
import { ThemeProvider, themeOrnamentDefault } from '@ornament-ui/kit/ThemeProvider';
import { useBoolean } from '@ornament-ui/kit/useBoolean';
import './index.css';
import '@ornament-ui/fonts';
import { Demo, Checker } from 'components';
import { SnackbarProvider } from '@ornament-ui/kit/Snackbar';
import { Stack } from '@ornament-ui/kit/Stack';

const WithProvider = React.lazy(() => import('remote1/WithProvider'));

function App() {
  const [withTheme, { toggle }] = useBoolean(true);
  const [demo, { toggle: demoToggle }] = useBoolean(true);
  const render = () => (
    <>
      <Stack gap="2xl">
        <p>
          <b>HOST</b>
        </p>
        <Checker value={withTheme} onChange={toggle}>
          ThemeProvider in host
        </Checker>
        <Checker value={demo} onChange={demoToggle}>
          Components?
        </Checker>
      </Stack>

      {demo && <Demo />}
      <Suspense fallback="loading...">
        <WithProvider />
      </Suspense>
    </>
  );

  return (
    <div className="Block">
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

export default App;
