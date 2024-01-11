import { useEffect, useState } from "react";
import { getUserFolders } from "../api";
import "./FolderList.css";
import useModals from "../hooks/useModals";
import Modals from "./Modals";
export default function FolderList({ onSelectFolder, selectedFolder }) {
  const [folderNames, setFolderNames] = useState([]);
  const handleFolderClick = (folder) => {
    onSelectFolder(folder);
  };
  const { openModal, closeModal, modal } = useModals();
  const handleModalAddFolder = () => {
    openModal({ type: "addFolder", props: null });
  };
  useEffect(() => {
    async function handleload() {
      const { data } = await getUserFolders(1);
      setFolderNames(data);
    }
    handleload();
  }, []);

  return (
    <>
      <div className="folder-list-box">
        <ul className="folder-list">
          <li
            onClick={() => handleFolderClick("$1")}
            className={`folder ${
              selectedFolder === "$1" ? "folderSelected" : ""
            }`}
          >
            <div>전체</div>
          </li>
          {folderNames.map((folder) => {
            return (
              <li
                className={`folder ${
                  selectedFolder.id === folder.id ? "folderSelected" : ""
                }`}
                key={folder.id}
                onClick={() => handleFolderClick(folder)}
              >
                <div>{folder.name}</div>
              </li>
            );
          })}
        </ul>
        <div className="folder-add-box">
          <input className="folder-add-input"></input>
          <img
            onClick={handleModalAddFolder}
            src="/imgs/add.png"
            alt="폴더추가하기"
          />
        </div>
      </div>
      <Modals modal={modal} closeModal={closeModal} />
    </>
  );
}
