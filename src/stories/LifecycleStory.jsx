import React from "react";
import { storiesOf } from "@storybook/react";

import { PageWithLodaData } from "../05/lifecycle";

storiesOf("Lifecycle", module).addWithJSX("loadData예제", () => (
  <PageWithLodaData loadData={() => fetch("/").then(() => "hello")} />
));
