import useWindow from "hooks/useWindow";
import Image from "next/image";
import plusIcon from "public/images/icon-plus.svg";
import {
  InvMenuBtnWrap,
  InvMenuBtn,
  InvMenuBtnIcon,
  InvMenuBtnIconInner,
  InvMenuBtnText,
} from "components/slices/invoiceFormButton/invoiceFormButtonStyles";

const InvoiceFormButton = () => {
  //TODO: Monitor the screen size using
  const { size } = useWindow();

  return (
    <InvMenuBtnWrap>
      <InvMenuBtn>
        <InvMenuBtnIcon>
          <InvMenuBtnIconInner>
            <div>
              <Image src={plusIcon} alt="" layout="fill" />
            </div>
          </InvMenuBtnIconInner>
        </InvMenuBtnIcon>
        <InvMenuBtnText>
          <p>{size > 462 ? <p>New Invoice</p> : <p>New</p>}</p>
        </InvMenuBtnText>
      </InvMenuBtn>
    </InvMenuBtnWrap>
  );
};

export default InvoiceFormButton;
