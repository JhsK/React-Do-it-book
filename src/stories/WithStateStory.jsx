import React from "react";
import { storiesOf } from "@storybook/react";

import { CounterWithCountState } from "../05/withState";

storiesOf("WithSate", module).addWithJSX("CounterWithCounterState", () => (
  <CounterWithCountState />
));