import { type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className="ui-bg-red-100 border-1 rounded-lg" {...props}>{children}</button>
  );
}
