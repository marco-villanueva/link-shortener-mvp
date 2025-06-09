import { useEffect } from "react";
import styles from "./Alert.module.css";

export const Alert = ({
  message,
  variant = "info",
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  if (!message) return null;

  return <div className={`${styles.alert} ${styles[variant]}`}>{message}</div>;
};
