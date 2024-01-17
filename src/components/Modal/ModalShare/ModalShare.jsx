import React from "react";
import styled from "styled-components";
import imageData from "../../../assets/imageData";
import {
  ModalFolderTitle,
  ModalTitleContainer,
  ModalTitle,
  ModalWrapper,
} from "../Modal.styled";
import ModalShareLinkIcon from "./ModalShareLinkIcon";
import { handleCopyClipBoard } from "../../../utils/util";
import { shareKakao } from "../../../utils/kakaoShare";

export default function ModalShare({ folderName = "", itemList, userId }) {
  const currentFolder = itemList.find((item) => item.name === folderName);
  const url =
    window.location.origin +
    `/shared?user=${userId}&folder=${currentFolder.id}`;
  const handleLinkCopy = () => {
    handleCopyClipBoard(url);
  };
  const handleShareToFacebook = () => {
    const sharedLink = encodeURIComponent(url);
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`,
      "_blank",
      "popup,noopener,noreferrer"
    );
  };
  const handleShareToKakao = () => {
    shareKakao(url, folderName);
  };

  return (
    <ModalWrapper>
      <ModalTitleContainer>
        <ModalTitle>폴더 공유</ModalTitle>
        <ModalFolderTitle>{folderName}</ModalFolderTitle>
      </ModalTitleContainer>
      <ModalShareLinkContainer>
        <ModalShareLinkBox onClick={handleShareToKakao}>
          <ModalShareLinkIcon
            type={"kakao"}
            imageSource={imageData.kakaoIcon}
            altContent={"카카오이미지"}
          />
          카카오톡
        </ModalShareLinkBox>
        <ModalShareLinkBox onClick={handleShareToFacebook}>
          <ModalShareLinkIcon
            type={"facebook"}
            imageSource={imageData.modalFacebookIcon}
            altContent={"페이스북이미지"}
          />
          페이스북
        </ModalShareLinkBox>
        <ModalShareLinkBox onClick={handleLinkCopy}>
          <ModalShareLinkIcon
            type={"link"}
            imageSource={imageData.modalShareIcon}
            altContent={"링크 복사"}
          />
          링크복사
        </ModalShareLinkBox>
      </ModalShareLinkContainer>
    </ModalWrapper>
  );
}

const ModalShareLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 400;
  font-family: Inter;
  color: #373740;
`;

const ModalShareLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 32px;
`;
