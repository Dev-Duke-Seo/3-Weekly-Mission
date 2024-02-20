import styled from "styled-components";
import { useState } from "react";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: default;

  div {
    background: white;
    padding: 32px 40px;
    border-radius: 15px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;

    div {
      gap: 24px;
      padding: 0;

      h1 {
        color: #373740;
        font-size: 2rem;
      }

      input {
        width: 280px;
        padding: 18px 15px;
        border-radius: 8px;
        border: 1px solid lightgray;
        background: #fff;
      }
      input:focus {
        outline: 1px solid #6d6afe;
      }

      img {
        position: absolute;
        top: -20px;
        right: -25px;
        cursor: pointer;
      }
    }

    button {
      width: 280px;
      padding: 16px 20px;
      border-radius: 8px;
      background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
      border: 0px;
      cursor: pointer;

      color: #f5f5f5;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

const ModalAddFolder = ({ handleClose }) => {
  const [inputText, setInputText] = useState("");

  return (
    <ModalContainer>
      <div>
        <div>
          <h1>폴더 추가</h1>
          <input
            autoFocus="autofocus"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <img onClick={handleClose} src={`/assets/close.png`} alt="닫기버튼" />
        </div>
        <button>추가하기</button>
      </div>
    </ModalContainer>
  );
};

export default ModalAddFolder;
