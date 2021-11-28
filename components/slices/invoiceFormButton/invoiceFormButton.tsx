import useWindow from "hooks/useWindow";
import Image from "next/image";
import styled from "styled-components";
import plusIcon from "public/images/icon-plus.svg";

const InvMenuBtnWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const InvMenuBtn = styled.button`
  border: none;
  width: 5.625rem;
  height: 2.75rem;
  border-radius: 1.5rem;
  background-color: var(--color-01);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    flex: 1;
  }

  @media screen and (min-width: 462px) {
    width: 9.375rem;
    height: 3rem;
    justify-content: space-between;
  }
`;

const InvMenuBtnIcon = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 462px) {
    display: flex;
    margin-left: 0.5rem;
  }
`;

const InvMenuBtnIconInner = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: var(--color-11);
  display: grid;
  place-items: center;

  & > * {
    position: relative;
    width: 0.625rem;
    height: 0.625rem;
  }
`;

const InvMenuBtnText = styled.div`
  p {
    font-weight: var(--font-weight-bold);
    font-family: var(--font-100);
    margin-left: -0.4rem;

    @media screen and (min-width: 462px) {
      margin-left: -1.5rem;
    }
  }
`;

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
