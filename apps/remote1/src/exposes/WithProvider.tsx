import React, { FC, useContext } from 'react';
import { useBoolean } from '@ornament-ui/kit/useBoolean';
import { themeOrnamentDefault, ThemeProvider } from '@ornament-ui/kit/ThemeProvider';
import { SnackbarProvider } from '@ornament-ui/kit/Snackbar';
import { Checker, Demo } from 'components';
import { CheckerProps } from '../../../../packages/components/Checker/index';
import { Stack } from '@ornament-ui/kit/Stack';
// import { Context } from 'host/context';

// export const WithProvider: FC<{ CheckerProps?: CheckerProps }> = () => {
//   const [withTheme, { toggle }] = useBoolean(true);
//   const [demo, { toggle: demoToggle }] = useBoolean(true);
//   const value = useContext(Context);
//
//   const render = () => {
//     if (demo) {
//       return (
//         <>
//           <Demo />
//         </>
//       );
//     }
//     return null;
//   };
//   return (
//     <div className="Block">
//       <Stack gap="2xl">
//         <div>Host context value: {value}</div>
//         <p>
//           <b>REMOTE 1</b>
//         </p>
//         <Checker value={withTheme} onChange={toggle}>
//           ThemeProvider in remote 1
//         </Checker>
//         <Checker value={demo} onChange={demoToggle}>
//           Components?
//         </Checker>
//       </Stack>
//
//       {withTheme ? (
//         <ThemeProvider theme={themeOrnamentDefault}>
//           <SnackbarProvider>{render()}</SnackbarProvider>
//         </ThemeProvider>
//       ) : (
//         render()
//       )}
//     </div>
//   );
// };

export const WithProvider = () => <div>WithProvider 1</div>;

export default WithProvider;
