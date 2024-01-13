import { useDeviceType } from "@contexts/WindowSizeDetectContext";
import MobileAddFolderButton from "@components/MobileAddFolderButton/MobileAddFolderButton";
import "./SortingBar.css";
import Modal from "@components/Modal/Modal";
import useModal from "hooks/useModal";

const SortingBar = ({ onClickTag, tagList, selectedTagName }) => {
  const deviceType = useDeviceType();
  const { isOpen, openModal, closeModal } = useModal();

  const handleAddFolderClick = () => {
    openModal();
  };

  return (
    <>
      <div className="sorting-bar">
        <div className="sorting-group">
          <ul>
            <li
              onClick={() => onClickTag("전체", null)}
              data-tag="전체"
              className={selectedTagName === "전체" ? ` active` : null}
            >
              <p>전체</p>
            </li>
            {tagList.map((tag) => (
              <li
                id={tag.id}
                key={tag.id}
                onClick={() => onClickTag(tag.name, tag.id)}
                className={selectedTagName === tag.name ? ` active` : null}
              >
                <p>{tag.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="sorting-add-button">
          {deviceType !== "mobile" ? (
            <button type="button" onClick={handleAddFolderClick}>
              <span>폴더 추가</span>
              <img
                src="/assets/images/icons/addIcon.png"
                alt="소팅 폴더 추가하기 버튼"
              />
            </button>
          ) : null}
        </div>
      </div>
      {deviceType === "mobile" ? (
        <MobileAddFolderButton onClick={handleAddFolderClick}>
          폴더 추가
        </MobileAddFolderButton>
      ) : null}
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        modalTitle="폴더 추가"
        buttonName="추가하기"
      >
        <input className="input-border input-modal" placeholder="내용 입력" />
      </Modal>
    </>
  );
};

export default SortingBar;
