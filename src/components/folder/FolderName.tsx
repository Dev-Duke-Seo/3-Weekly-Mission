import styled from "styled-components";
import { FolderNameProps } from "../../types";
import { DeleteFolderModal, RenameModal, ShareModal } from "./Modal";
import { useState } from "react";
export default function FolderName({ selectedFolder }: FolderNameProps) {
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const handleOpenModalShare = () => {
    setSelectedModal("share");
  };
  const handleOpenModalRename = () => {
    setSelectedModal("rename");
  };
  const handleOpenModalDeleteFolder = () => {
    setSelectedModal("delete");
  };
  const closeModal = () => {
    setSelectedModal(null);
  };

  return (
    <>
      <FolderNameBox>
        <div className="folder-name">{selectedFolder.name}</div>
        {selectedFolder.id && (
          <div className="folder-edit-box">
            <div onClick={handleOpenModalShare}>
              <img src="/imgs/share.png" alt="공유하기" />
              <span>공유</span>
            </div>
            <div onClick={handleOpenModalRename}>
              <img src="/imgs/pen.png" alt="이름변경하기" />
              <span>이름변경</span>
            </div>
            <div onClick={handleOpenModalDeleteFolder}>
              <img src="/imgs/delete.png" alt="삭제하기" />
              <span>삭제</span>
            </div>
          </div>
        )}
      </FolderNameBox>
      {selectedModal === "share" && (
        <ShareModal
          closeModal={closeModal}
          selectedModalName={selectedFolder.name}
        />
      )}
      {selectedModal === "rename" && (
        <RenameModal
          closeModal={closeModal}
          selectedModalName={selectedFolder.name}
        />
      )}
      {selectedModal === "delete" && (
        <DeleteFolderModal
          closeModal={closeModal}
          selectedModalName={selectedFolder.name}
        />
      )}
    </>
  );
}

const FolderNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .folder-name {
    font-size: 24px;
    font-weight: 600;
  }

  .folder-edit-box {
    display: flex;
    gap: 12px;
    font-size: 14px;
    font-weight: 600;
    color: var(--Linkbrary-gray60, #9fa6b2);
  }

  .folder-edit-box div {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
