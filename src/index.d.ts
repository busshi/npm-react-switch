import { ComponentType, InputHTMLAttributes } from "react";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  thumbSize?: string;
  thumbColor?: string;
  checkedBackgroundColor?: string;
}

declare const Switch: ComponentType<SwitchProps>;

export default Switch;
