import { Mask, DotLoading } from "antd-mobile";
import styled from "styled-components";

const TransitionCls = styled.div`
  .adm-dot-loading {
    position: absolute;
    font-size: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function Transition() {
  return (
    <TransitionCls>
      <Mask visible={true}>
        <DotLoading color="white" />
      </Mask>
    </TransitionCls>
  );
}
