/*import React from "react";
import styled from "styled-components";

interface PaymentModalProps {
  show: boolean;
  onClose: (del: boolean) => void; // handleCloseModal
}

export default function PaymentModal({ show, onClose }: PaymentModalProps) {
  //   console.log(show);

  return (
    <ModalBackdrop show={show}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>정말로 구매하시겠습니까?</h2>
        <p>장바구니의 모든 상품들이 삭제됩니다.</p>
        <ButtonGroup>
          <button className="yes" onClick={() => onClose(true)}>
            네
          </button>
          <button onClick={() => onClose(false)}>아니오</button>
        </ButtonGroup>
      </ModalContent>
    </ModalBackdrop>
  );
}

interface ModalProps {
  show: boolean;
}

const ModalBackdrop = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 999;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2rem;
  width: 30rem;
  height: 10rem;
  z-index: 1000;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin-top: 1rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  margin-top: auto;
  justify-content: flex-end;

  button {
    padding: 1rem 1.2rem;
    border-radius: 10px;
    border: 1px solid;
    font-weight: 700;
    cursor: pointer;
  }
  .yes {
    margin-right: 0.5rem;
    border: none;
    color: #fff;
    background: #570df8;
  }
`; */
