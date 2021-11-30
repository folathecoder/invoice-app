import Image from "next/image";
import useWindow from "hooks/useWindow";
import { useState } from "react";
import arrowDownIcon from "public/images/icon-arrow-down.svg";
import {
  InvFilter,
  InvFilterInner,
  InvFilterIcon,
  InvFilterMenu,
  InvFilterForm,
  InvFilterFormField,
  Overlay
} from "components/slices/invoiceFilter/invoiceFilterStyles";

const InvoiceFilter = () => {
  //TODO: Monitor the screen size using
  const { size } = useWindow();

  //TODO: Maintain the filter menu toggle state
  const [filterToggle, setFilterToggle] = useState<boolean>(false);

  //TODO: Event => Function that handles filter menu toggle
  const handleFilterToggle = () => {
    setFilterToggle(!filterToggle);
  };

  return (
    <InvFilter>
      <InvFilterInner onClick={handleFilterToggle}>
        <div>{size > 416 ? <p>Filter by status</p> : <p>Filter</p>}</div>
        <div>
          <InvFilterIcon filterToggle={filterToggle}>
            <Image src={arrowDownIcon} alt="" layout="fill" />
          </InvFilterIcon>
        </div>
      </InvFilterInner>
      <InvFilterMenu filterToggle={filterToggle}>
        <InvFilterForm>
          <InvFilterFormField>
            <input type="radio" id="draft" name="invoice" value="Draft" />
            <label htmlFor="draft">Draft</label>
          </InvFilterFormField>
          <InvFilterFormField>
            <input type="radio" id="pending" name="invoice" value="pending" />
            <label htmlFor="pending">Pending</label>
          </InvFilterFormField>
          <InvFilterFormField>
            <input type="radio" id="paid" name="invoice" value="paid" />
            <label htmlFor="paid">Paid</label>
          </InvFilterFormField>
        </InvFilterForm>
      </InvFilterMenu>
      <Overlay />
    </InvFilter>
  );
};

export default InvoiceFilter;
