import styles from "./Typography.module.css";
import clsx from "clsx";

export const Typography = ({
  as = "p",
  variant = "body",
  center = false,
  className = "",
  children,
  ...props
}) => {
  const Component = as;
  return (
    <Component
      className={clsx(
        styles.typography,
        styles[variant],
        center && styles.center,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
