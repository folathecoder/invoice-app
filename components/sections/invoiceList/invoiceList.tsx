import Link from "next/link";
import Image from "next/image";
import type { InvoiceStatusTypes } from "helpers/types/invoiceTypes";
import {
  InvoiceListWrap,
  InvoiceListInner,
  InvNumber,
  InvAmount,
  InvDueDate,
  InvName,
  InvStatus,
  InvIcon,
  InvIconWrap,
} from "components/sections/invoiceList/invoiceListStyles";
import InvoiceStatus from "components/slices/invoiceStatus/invoiceStatus";
import iconRight from "public/images/icon-arrow-right.svg";

const InvoiceList = ({ paid, pending, draft }: InvoiceStatusTypes) => {
  return (
    <Link href="about">
      <a>
        <InvoiceListWrap pending={pending} paid={paid} draft={draft}>
          <InvoiceListInner>
            <InvNumber>
              <span>#</span>
              <p>RT3080</p>
            </InvNumber> 
            <InvDueDate>
              <p>Due 19 Aug 2021</p>
            </InvDueDate>
            <InvName>
              <p>Jensen Huang</p>
            </InvName>
            <InvAmount>
              <p>£ 1,800.90</p>
            </InvAmount>
            <InvStatus>
              <InvoiceStatus pending={pending} paid={paid} draft={draft} />
            </InvStatus>
            <InvIcon>
              <InvIconWrap>
                <Image src={iconRight} alt="" layout="fill" />
              </InvIconWrap>
            </InvIcon>
          </InvoiceListInner>
        </InvoiceListWrap>
      </a>
    </Link>
  );
};

export default InvoiceList;
