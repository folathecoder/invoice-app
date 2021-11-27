import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
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

const InvoiceList: NextPage = () => {
  return (
    <Link href="about">
      <a>
        <InvoiceListWrap>
          <InvoiceListInner>
            <InvNumber>
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
                <InvoiceStatus />
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
