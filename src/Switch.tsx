import React, { useState } from "react";
import "./Switch.css";

interface SwitchProps {
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

interface ContainerStyle extends React.CSSProperties {
  "--switch-width"?: string;
  "--switch-height"?: string;
}

interface SwitchStyle extends React.CSSProperties {
  "--switch-border-radius"?: string;
  "--switch-bg-color"?: string;
  "--switch-thumb-size"?: string;
  "--switch-thumb-color"?: string;
  "--switch-checked-bg-color"?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  width = "40px",
  height = "20px",
  borderRadius = "20px",
  backgroundColor = "#ddd",
  thumbSize = "20px",
  thumbColor = "white",
  checkedBackgroundColor = "#306FDB",
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const containerStyle: ContainerStyle = {
    "--switch-width": width,
    "--switch-height": height,
  };

  const switchStyle: SwitchStyle = {
    "--switch-border-radius": borderRadius,
    "--switch-bg-color": backgroundColor,
    "--switch-thumb-size": thumbSize,
    "--switch-thumb-color": thumbColor,
    "--switch-checked-bg-color": checkedBackgroundColor,
  };

  const toggleSwitch = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange();
  };

  return (
    <div className="checkbox-container" style={containerStyle}>
      <input
        type="checkbox"
        id="iosCheckbox"
        checked={isChecked}
        onChange={toggleSwitch}
        className="checkbox-input"
      />
      <label
        htmlFor="iosCheckbox"
        className={`checkbox-label ${checked && "checkbox-checked-label"}`}
        style={switchStyle}
      ></label>
    </div>
  );
};

export default Switch;
