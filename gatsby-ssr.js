import React from 'react';
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale',
};

export const wrapRootElement = ({ element }) => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      {element}
    </AlertProvider>
  );
}