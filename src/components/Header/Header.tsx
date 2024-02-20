import { useEffect, useState } from "react";
import { getFolderUserData, getUserData } from "../../api/api";
import { useRouter } from "next/router";
import styles from "@/src/components/Header/Header.module.css";
import Link from "next/link";

interface UserData {
  email: string;
}

interface FolderUserData {
  data: {
    email: string;
    image_source: string;
  }[];
}

const Header = () => {
  const location = useRouter();

  const [userData, setUserData] = useState<UserData | null>(null);
  const [folderUserData, setFolderUserData] = useState<FolderUserData | null>(
    null
  );

  const handleUserData = async () => {
    const user = await getUserData();
    setUserData(user);
  };

  const handleFolderUserData = async () => {
    const folderUserData = await getFolderUserData();
    setFolderUserData(folderUserData);
  };

  useEffect(() => {
    handleFolderUserData();

    handleUserData();
  }, []);

  switch (location.pathname) {
    case "/shared":
      return (
        <>
          <header>
            <nav className={styles.nav}>
              <Link className={styles.link} href="/">
                <img src={`/assets/logo.png`} alt="로고" />
              </Link>

              {userData ? (
                <div className={styles.userInfo}>
                  <img
                    className={styles.userImg}
                    src={`/assets/logo.png`}
                    alt="프로필 이미지"
                  ></img>
                  <h2 className={styles.userEmail}>{userData.email}</h2>
                </div>
              ) : (
                <Link className={styles.login_btn} href="/signin.html">
                  로그인
                </Link>
              )}
            </nav>
          </header>
        </>
      );
    case "/folder":
      return (
        <>
          <header>
            <nav className={styles.nav}>
              <Link className={styles.link} href="/">
                <img src={`/assets/logo.png`} alt="로고" />
              </Link>

              {folderUserData ? (
                <div className={styles.userInfo}>
                  <img
                    className={styles.userImg}
                    src={folderUserData.data[0].image_source}
                    alt="프로필 이미지"
                  ></img>
                  <h2 className={styles.userEmail}>
                    {folderUserData.data[0].email}
                  </h2>
                </div>
              ) : (
                <Link className={styles.login_btn} href="/signin.html">
                  로그인
                </Link>
              )}
            </nav>
          </header>
        </>
      );
    default:
      return null;
  }
};
export default Header;
