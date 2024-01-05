import { getFolders } from "../api/api";
import { useEffect, useState } from "react";
import searchBarStyles from "../components/SearchBar.module.css";
import ListPage from "../components/ListPage";
import LinkItem from "../components/LinkItem";
import searchIcon from "../assets/Search.png";
import styles from "./FolderListPage.module.css";

function FolderListPage() {
  const [folders, setFolders] = useState([]);
  const favoriteFolder = folders.folder;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await getFolders();

        if (!folders) return;
        setFolders(folders);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ListPage favoriteFolder={favoriteFolder}>
        <form className={searchBarStyles.form}>
          <input name="search" placeholder="링크를 검색해 보세요."></input>
          <img
            className={searchBarStyles.searchIcon}
            src={searchIcon}
            alt="검색창 아이콘"
          />
        </form>
        <div className={styles.linkList}>
          {favoriteFolder &&
            favoriteFolder.links.map((linkInfo) => (
              <LinkItem key={linkInfo.id} linkInfo={linkInfo}></LinkItem>
            ))}
        </div>
      </ListPage>
    </div>
  );
}

export default FolderListPage;
