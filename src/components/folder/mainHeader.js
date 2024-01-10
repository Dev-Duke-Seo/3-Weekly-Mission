import React from 'react';
import PropTypes from 'prop-types';
import addIcon from '../../assets/images/add.svg';
import { Link } from 'react-router-dom';
import MainIconButton from './mainIconButton';
import FolderList from './folderList';
import { FolderAdd, FolderAddIcon, FolderLinkHeader, HeaderButtons, HeaderTitle, MainNav, MainTitle } from './style/mainHeader.style';

const MAIN_ICON_BUTTONS = ['삭제', '수정', '공유'];

function MainHeader({ folderList, activeFolderId, onFolderClick }) {
  const activeFolderName = folderList.find(folder => folder.id === activeFolderId)?.name;

  const handleFolderClick = event => {
    const folderId = event.target.getAttribute('data-id');
    if (folderId === 'all') {
      onFolderClick(null);
    } else {
      onFolderClick(Number(folderId));
    }
  };

  const renderHeaderButtons = (MAIN_ICON_BUTTONS, activeFolderName) => {
    if (!activeFolderName) {
      return null;
    }
    return MAIN_ICON_BUTTONS.map(text => <MainIconButton key={text} text={text} />);
  };

  return (
    <FolderLinkHeader>
      <MainNav>
        <FolderList folderList={folderList} activeFolderId={activeFolderId} onFolderClick={handleFolderClick} />
        <Link to="#">
          <FolderAdd>
            폴더 추가 <FolderAddIcon src={addIcon} alt="폴더 추가 아이콘" />
          </FolderAdd>
        </Link>
      </MainNav>

      <HeaderTitle>
        <MainTitle>{activeFolderName || '전체'}</MainTitle>
        <HeaderButtons>{renderHeaderButtons(MAIN_ICON_BUTTONS, activeFolderName)} </HeaderButtons>
      </HeaderTitle>
    </FolderLinkHeader>
  );
}

MainHeader.propTypes = {
  folderList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,

  activeFolderId: PropTypes.number,
  onFolderClick: PropTypes.func.isRequired,
};

export default MainHeader;
