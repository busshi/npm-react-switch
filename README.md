![publish](https://github.com/busshi/npm-react-switch/actions/workflows/publish.yml/badge.svg)

# React-Switch

A custom React switch component reusable without extra dependency (only React dependencies).

## Installation

`yarn add @busshi/react-switch` or `npm install @busshi/react-switch`

## Custom properties

| Props                  | Type     | Default value | Required / Optional |
| :--------------------- | :------- | :------------ | :------------------ |
| checked                | boolean  |               | required            |
| onChange               | function |               | required            |
| width                  | string   | 40px          | optional            |
| height                 | string   | 20px          | optional            |
| borderRadius           | string   | 20px          | optional            |
| backgroundColor        | string   | #ddd          | optional            |
| thumbSize              | string   | 20px          | optional            |
| thumbColor             | string   | white         | optional            |
| checkedBackgroundColor | string   | #306FDB       | optional            |

## Note

Colors can be passed as prop as hex (#FFF), rgb (rgb(255, 255, 255)) or as noun (white).

## Usage

```js
import Switch from "@busshi/react-switch";
import { useState } from "react";
import "./App.css";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <Switch
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        width="40px"
        height="20px"
        borderRadius="20px"
        backgroundColor="#ddd"
        thumbSize="20px"
        thumbColor="white"
        checkedBackgroundColor="#306FDB"
      />
    </div>
  );
}

export default App;
```
