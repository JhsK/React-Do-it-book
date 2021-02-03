import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CheckBox from "../04/CheckBox";
import Test from "../04/Test";

storiesOf("CheckBox", module)
  .addWithJSX("기본 설정", () => <CheckBox name="agree" />)
  .addWithJSX("children 예제", () => (
    <CheckBox name="agree">
      <Test>동의합니다</Test>
    </CheckBox>
  ))
  .addWithJSX("label 예제", () => (
    <CheckBox name="agree" label="이름">
      <Test>동의합니다</Test>
    </CheckBox>
  ))
  .addWithJSX("onChange 예제", () => (
    <CheckBox name="agree" onChange={action("onChange 이벤트 발생")}>
      <Test>동의합니다</Test>
    </CheckBox>
  ))
  .addWithJSX("checked 예제", () => (
    <CheckBox name="agree" label="이름" checked>
      <Test>동의합니다</Test>
    </CheckBox>
  ))
  .addWithJSX("errorMessage 예제", () => (
    <CheckBox name="agree" label="이름" errorMessage="동의가 필요합니다">
      <Test>동의합니다</Test>
    </CheckBox>
  ))
  .addWithJSX("autoFoucus 예제", () => (
    <CheckBox name="agree" label="이름" autoFocus>
      <Test>동의합니다</Test>
    </CheckBox>
  ));
