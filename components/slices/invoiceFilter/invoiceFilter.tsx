import styled, { css } from "styled-components";
import Image from "next/image";
import useWindow from "hooks/useWindow";
import { useState } from "react";
import arrowDownIcon from "public/images/icon-arrow-down.svg";

const InvFilter = styled.div`
  width: 6.375rem;
  margin-right: 1.1875rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 416px) {
    width: 3.375rem;
  }
`;

const InvFilterInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: var(--font-weight-bold);
  }
`;

const InvFilterIcon = styled.div`
  position: relative;
  width: 0.62875rem;
  height: 0.464375rem;

  ${({ filterToggle }) =>
    filterToggle &&
    css`
      transform: rotateZ(180deg);
    `}
`;

const InvFilterMenu = styled.div`
  position: absolute;
  margin-top: 11rem;
  margin-left: -4rem;
  background-color: var(--color-04);
  display: none;
  width: 12rem;
  height: 8rem;
  border-radius: var(--border-radius);
  box-shadow: 0rem 0rem 0.2rem var(--color-03);
  z-index: 1;

  ${({ filterToggle }) =>
    filterToggle &&
    css`
      display: flex;
    `}
`;

const InvoiceFilter = () => {
  //TODO: Monitor the screen size using
  const { size } = useWindow();

  //TODO: Maintain the filter menu toggle state
  const [filterToggle, setFilterToggle] = useState(false);

  //TODO: Event => Function that handles filter menu toggle

  const handleFilterToggle = () => {
    setFilterToggle(!filterToggle);
  };

  console.log(filterToggle);

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
      <InvFilterMenu filterToggle={filterToggle}></InvFilterMenu>
    </InvFilter>
  );
};

export default InvoiceFilter;
