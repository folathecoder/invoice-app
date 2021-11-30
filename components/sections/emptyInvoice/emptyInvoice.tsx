import Image from "next/image";
import useWindow from "hooks/useWindow";
import {
  EmptyWrap,
  EmptyImageWrap,
  EmptyImage,
  EmptyContent,
} from "components/sections/emptyInvoice/emptyInvoiceStyles";
import emptyIllustration from "public/images/illustration-empty.svg";

const EmptyInvoice = () => {
  //TODO: Monitor the screen size using
  const { size } = useWindow();

  return (
    <EmptyWrap>
      <EmptyImageWrap>
        <EmptyImage>
          <Image
            src={emptyIllustration}
            alt="lady with a megaphone"
            layout="responsive"
          />
        </EmptyImage>
      </EmptyImageWrap>
      <EmptyContent>
        <h2>There is nothing here</h2>
        <p>
          Create an invoice by clicking the{" "}
          {size > 462 ? <span>New Invoice</span> : <span>New</span>} button and
          get started
        </p>
      </EmptyContent>
    </EmptyWrap>
  );
};

export default EmptyInvoice;
