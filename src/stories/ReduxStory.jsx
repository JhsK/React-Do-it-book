import React from "react";
import { storiesOf } from "@storybook/react";

import ReduxApp01 from "../07/ReduxApp01";
import ReduxApp02 from "../07/ReduxApp02";
import ReduxApp03 from "../07/ReduxApp03";
import AdvReduxApp01 from "../07/AdvReduxApp01";
import AdvReduxApp02 from "../07/AdvReduxApp02";

storiesOf("ReduxApp", module)
  .addWithJSX("기본 스토어 설정", () => <ReduxApp01 />)
  .addWithJSX("액션,리듀서", () => <ReduxApp02 />)
  .addWithJSX("리듀서 설정", () => <ReduxApp03 />)
  .addWithJSX("통합 리듀서 설정", () => <AdvReduxApp01 />)
  .addWithJSX("통합 리듀서 설정", () => <AdvReduxApp02 />);
