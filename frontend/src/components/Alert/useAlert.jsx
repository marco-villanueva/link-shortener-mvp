import { useState, useCallback } from 'react';
import {Alert} from './Alert';

export const useAlert = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = useCallback(({ message, variant = 'info', duration = 3000 }) => {
    setAlert({ message, variant, duration });
  }, []);

  const hideAlert = useCallback(() => {
    setAlert(null);
  }, []);

  const AlertComponent = alert ? (
    <Alert
      message={alert.message}
      variant={alert.variant}
      duration={alert.duration}
      onClose={hideAlert}
    />
  ) : null;

  return {
    Alert: AlertComponent,
    showAlert,
    hideAlert,
  };
};
