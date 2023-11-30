import clsx from 'clsx';
import './button.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export function Button(
  { children, className, size = "medium", ...props }
    : ButtonProps
) {
  return (
    <button
      type="button"
      className={clsx(
        '',
        className,
      ) + ` button button--${size}`}
      {...props}
    >
      {children}
    </button>
  );
}
