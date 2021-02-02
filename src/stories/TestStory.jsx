import React from "react";
import { storiesOf } from "@storybook/react";

import Test from "../04/Test";

storiesOf("Test", module)
  .addWithJSX("기본 설정", () => <Test>안녕하세요</Test>)
  .addWithJSX("large 예제", () => <Test large>안녕하세요</Test>)
  .addWithJSX("xlarge 예제", () => <Test xlarge>안녕하세요</Test>)
  .addWithJSX("small 예제", () => <Test small>안녕하세요</Test>)
  .addWithJSX("xsmall 예제", () => <Texst xsmall>안녕하세요</Texst>)
  .addWithJSX("primary 예제", () => <Test primary>안녕하세요</Test>)
  .addWithJSX("secondary 예제", () => <Test secondary>안녕하세요</Test>)
  .addWithJSX("primary와 large 함께 쓰는 예제", () => (
    <Test primary large>
      안녕하세요
    </Test>
  ));
