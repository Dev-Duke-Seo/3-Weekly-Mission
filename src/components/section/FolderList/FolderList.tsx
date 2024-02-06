import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { getFoldersById } from '../../../api';
import FolderListButton from '../FolderListButton/FolderListButton';
import BaseModal from '../BaseModal/BaseModal';
import './FolderList.css';
import { Folder, Id } from '../../../pages/FolderPage/FolderPage';

interface Props {
  onClickFolder: (name: string, id: Id) => void;
  id: number;
  folderName: string;
}

export default function FolderList({ onClickFolder, id, folderName }: Props) {
  const [folders, setFolders] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const onClickAddFolder = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    async function getFolders() {
      const { data } = await getFoldersById(id);
      if (!data) return;
      setFolders(data);
    }

    getFolders();
  }, [id]);

  return (
    <>
      <div className="folder-list">
        <div className="buttons">
          <FolderListButton
            folderName={folderName}
            onClickFolder={onClickFolder}
            buttonName="전체"
          />
          {folders.map((element: Folder) => {
            return (
              <FolderListButton
                key={element.id}
                id={element.id}
                onClickFolder={onClickFolder}
                folderName={folderName}
                buttonName={element.name}
              />
            );
          })}
        </div>
        <div className="add-list">
          <input className="add-list-input" />
          <Img
            className="add-list-button"
            src="/images/addpurple.png"
            alt="+ 아이콘"
            onClick={onClickAddFolder}
          />
        </div>
      </div>
      {openModal && (
        <BaseModal closeModal={closeModal}>
          <span className="modal__name">폴더 추가</span>
          <div className="modal__folder-add">
            <input className="modal__input" placeholder="내용 입력" />
            <button className="modal__button cta">추가하기</button>
          </div>
        </BaseModal>
      )}
    </>
  );
}

const Img = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;

  @media (max-width: 767px) {
    content: url('/images/addwhite.png');
  }
`;
