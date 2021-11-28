import {
  InvMenuWrap,
  InvMenuInner,
  InvMenuContent,
  InvMenuOption,
} from "components/sections/invoiceMenu/invoiceMenuStyles";
import InvoiceFilter from "components/slices/invoiceFilter/invoiceFilter";
import InvoiceFormButton from "components/slices/invoiceFormButton/invoiceFormButton";

const InvoiceMenu = () => {
  return (
    <InvMenuWrap>
      <InvMenuInner>
        <InvMenuContent>
          <h1>Invoices</h1>
          <p>7 invoices</p>
        </InvMenuContent>
        <InvMenuOption>
          <InvoiceFilter />
          <InvoiceFormButton />
        </InvMenuOption>
      </InvMenuInner>
    </InvMenuWrap>
  );
};

export default InvoiceMenu;
