import type { NextPage } from "next";
import styled from "styled-components";

const StatusWrap = styled.div``;
const StatusInner = styled.div``;

const InvoiceStatus: NextPage = () => {
  return (
    <StatusWrap>
      <StatusInner>
          Paid
      </StatusInner>
    </StatusWrap>
  );
};

export default InvoiceStatus;
