import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../04/Button";
import Test from "../04/Test";
import withLoading from "../05/withLoading";

const TestWithLoading = withLoading("로딩 중")(Test);
const ButtonWithLoading = withLoading(<Button disabled>로딩 중...</Button>)(
  Button
);

storiesOf("WithLoading", module)
  .addWithJSX("기본 설정", () => (
    <div>
      <ButtonWithLoading>안녕하세요</ButtonWithLoading>
      <TestWithLoading>안녕하세요</TestWithLoading>
    </div>
  ))
  .addWithJSX("isLoading 예제", () => (
    <div>
      <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
      <TestWithLoading isLoading>안녕하세요</TestWithLoading>
    </div>
  ));
