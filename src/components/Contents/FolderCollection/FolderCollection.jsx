import { useRef, useState } from 'react';

import styled from 'styled-components';
import add from '../../../assets/images/add.svg';
import mobileAdd from '../../../assets/images/mobile_add.svg';
import share from '../../../assets/images/share.svg';
import pen from '../../../assets/images/pen.svg';
import trashCan from '../../../assets/images/trash_can.svg';

const FolderCollection = ({
  onButtonClick,
  folderData,
  onOverviewCardButtonClick,
  onFilteredCardButtonClick,
  userData,
}) => {
  const [currentFolder, setCurrentFolder] = useState('전체');
  const sharingUrl = useRef('');

  const createSharingUrl = (userId, folderId) => {
    sharingUrl.current = `${window.location.origin}/shared?user=${userId}&folder=${folderId}`;
  };

  const setCurrentFolderToOverview = () => {
    setCurrentFolder('전체');
    onOverviewCardButtonClick();
  };

  const setCurrentFolderToSelected = (folderName, folderId) => {
    setCurrentFolder(folderName);
    onFilteredCardButtonClick(folderId);
    createSharingUrl(userData.id, folderId);
  };

  return (
    <>
      <FolderWrapper>
        <div>
          <FolderButtonWrapper>
            <FolderButtonBox type="button" onClick={setCurrentFolderToOverview}>
              전체
            </FolderButtonBox>
            {folderData.map((folder) => {
              return (
                <FolderButtonBox
                  type="button"
                  key={folder.id}
                  onClick={() => {
                    setCurrentFolderToSelected(folder.name, folder.id);
                  }}
                >
                  {folder.name}
                </FolderButtonBox>
              );
            })}
          </FolderButtonWrapper>
          <CreateFolderButton
            onClick={() => {
              onButtonClick({ name: 'CreateFolder', data: { folderName: '' } });
            }}
          >
            <span>폴더추가</span>
            <img alt="폴더 더보기 사진" />
          </CreateFolderButton>
        </div>
      </FolderWrapper>

      <FolderToolbarWrapper>
        <div>{currentFolder}</div>
        {currentFolder !== '전체' ? (
          <FolderToolbarBox>
            <button
              type="button"
              onClick={() => {
                // data에 title, description, sourceImg가 들어가야한다.
                onButtonClick({
                  name: 'ShareFolder',
                  data: { folderName: currentFolder, sharingUrl: sharingUrl.current },
                });
              }}
            >
              <img src={share} alt="폴더 도구 모음 공유 버튼" />
              <span>공유</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onButtonClick({ name: 'ChangeFolderName', data: { folderName: currentFolder } });
              }}
            >
              <img src={pen} alt="폴더 도구 모음 수정 버튼" />
              <span>이름 변경</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onButtonClick({ name: 'DeleteFolder', data: { folderName: currentFolder } });
              }}
            >
              <img src={trashCan} alt="폴더 도구 모음 삭제 버튼" />
              <span>삭제</span>
            </button>
          </FolderToolbarBox>
        ) : null}
      </FolderToolbarWrapper>
    </>
  );
};

const FolderWrapper = styled.div`
  width: 1060px;
  margin-bottom: 24px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1123px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;

const FolderButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const FolderButtonBox = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;
  color: #000;
  font-family: Pretendard;
  margin: 0 8px 8px 0;

  &:focus {
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-primary-color, #6d6afe);
  }

  @media (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const CreateFolderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;

  span {
    color: #6d6afe;
    text-align: center;
    font-family: Abel;
    font-size: 16px;
    letter-spacing: -0.3px;
    white-space: nowrap;
  }

  img {
    width: 16px;
    height: 16px;
    content: url(${add});
  }

  @media (max-width: 767px) {
    display: flex;
    padding: 8px 24px;
    gap: 20px;
    border-radius: 20px;
    border: 1px solid var(--Linkbrary-white, #fff);
    background: var(--Linkbrary-primary-color, #6d6afe);
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;

    span {
      color: var(--Linkbrary-gray10, #e7effb);
      text-align: center;
      font-family: Abel;
      font-size: 16px;
      letter-spacing: -0.3px;
    }

    img {
      content: url(${mobileAdd});
    }
  }
`;

const FolderToolbarWrapper = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.2px;
  }

  @media (max-width: 1123px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }
`;

const FolderToolbarBox = styled.div`
  display: flex;
  gap: 16px;
  button {
    display: flex;
    align-items: center;
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    img {
      margin-right: 4px;
    }
  }
`;

export default FolderCollection;