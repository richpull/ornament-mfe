import React, { Suspense } from 'react';
import { ThemeProvider, themeOrnamentDefault } from '@ornament-ui/kit/ThemeProvider';
import { useBoolean } from '@ornament-ui/kit/useBoolean';
import './index.css';
// import '@ornament-ui/fonts';
import { Demo, Checker } from 'components';
import { SnackbarProvider } from '@ornament-ui/kit/Snackbar';
import { Stack } from '@ornament-ui/kit/Stack';
import { Context } from './exposes/context';

// import { loadRemote } from '@module-federation/enhanced/runtime';

// const WithProvider = React.lazy(() => loadRemote('remote1/WithProvider'));
const WithProvider = React.lazy(() => import('remote1/WithProvider'));

function App() {
  const [withTheme, { toggle }] = useBoolean(true);
  const [demo, { toggle: demoToggle }] = useBoolean(true);
  const [remote, { toggle: remoteToggle }] = useBoolean(false);
  const render = () => (
    <>
      <Stack gap="2xl">
        <p>
          <b>HOST 1</b>
        </p>
        <Checker value={withTheme} onChange={toggle}>
          ThemeProvider in host
        </Checker>
        <Checker value={demo} onChange={demoToggle}>
          Components?
        </Checker>
      </Stack>
      {demo && <Demo />}
      <Checker value={remote} onChange={remoteToggle}>
        load remote?
      </Checker>
      {remote && (
        <Suspense fallback="loading...">
          <WithProvider />
        </Suspense>
      )}
    </>
  );

  return (
    <Context.Provider value="I am host context value">
      <div className="Block">
        {withTheme ? (
          <ThemeProvider theme={themeOrnamentDefault}>
            <SnackbarProvider>{render()}</SnackbarProvider>
          </ThemeProvider>
        ) : (
          render()
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
