import {
  StatusWrap,
  StatusInner,
} from "components/slices/invoiceStatus/invoiceStatusStyles";
import type {InvoiceStatusTypes} from "helpers/types/invoiceTypes";

const InvoiceStatus = ({ paid, pending, draft }: InvoiceStatusTypes) => {
  return (
    <StatusWrap pending={pending} paid={paid} draft={draft}>
      <StatusInner pending={pending} paid={paid} draft={draft}>
        {paid && <p>Paid</p>}
        {pending && <p>Pending</p>}
        {draft && <p>Draft</p>}
      </StatusInner>
    </StatusWrap>
  );
};

export default InvoiceStatus;
