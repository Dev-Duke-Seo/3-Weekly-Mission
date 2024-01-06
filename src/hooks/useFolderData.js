import { useEffect, useState } from "react";
import { getFolderData } from "../apis/api";

export function useFolderData() {
  const [folderData, setFolderData] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  //초기데이터 설정
  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      let folder;
      try {
        folder = await getFolderData();
        setLoadingError(null);
      } catch (e) {
        setLoadingError(e);
        return;
      } finally {
      }
      setFolderData(folder);
    };

    handleLoadFolder();
  }, []);

  return { folderData, loadingError };
}
