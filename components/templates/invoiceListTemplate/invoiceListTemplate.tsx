import {
  TemplateWrap,
  TemplateInner,
  InvoiceWrap,
} from "components/templates/invoiceListTemplate/invoiceListTemplateStyles";
import InvoiceList from "components/sections/invoiceList/invoiceList";

const InvoiceListTemplate = () => {
  return (
    <TemplateWrap>
      <TemplateInner>
        <InvoiceWrap>
          <InvoiceList key="1" paid/>
          <InvoiceList key="2" pending/>
          <InvoiceList key="3" draft/>
          <InvoiceList key="4" pending/>
          <InvoiceList key="5" paid/>
        </InvoiceWrap>
      </TemplateInner>
    </TemplateWrap>
  );
};

export default InvoiceListTemplate;
