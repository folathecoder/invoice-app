import type { NextPage } from "next";
import {
  TemplateWrap,
  TemplateInner,
  InvoiceWrap,
} from "components/templates/invoiceListTemplate/invoiceListTemplateStyles";
import InvoiceList from "components/sections/invoiceList/invoiceList";

const InvoiceListTemplate: NextPage = () => {
  return (
    <TemplateWrap>
      <TemplateInner>
        <InvoiceWrap>
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
          <InvoiceList />
        </InvoiceWrap>
      </TemplateInner>
    </TemplateWrap>
  );
};

export default InvoiceListTemplate;
