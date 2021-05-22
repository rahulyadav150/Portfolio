
import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css' 
export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
