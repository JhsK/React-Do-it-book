import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../04/Button";
import Test from "../04/Test";
import withHoC from "../05/withHoC";

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Test);

storiesOf("WithHoC", module)
  .addWithJSX("기본 설정", () => (
    <div>
      <ButtonWithHoC>안녕하세요</ButtonWithHoC>
      <TextWithHoC>안녕하세요</TextWithHoC>
    </div>
  ))
  .addWithJSX("large 예제", () => (
    <div>
      <ButtonWithHoC large>안녕하세요</ButtonWithHoC>
      <TextWithHoC large>안녕하세요</TextWithHoC>
    </div>
  ));
