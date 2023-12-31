import { getFolderData } from '../api/api';
import './style.css';
import { useState, useEffect } from 'react';

function Folder() {
  const [folder, setFolder] = useState({});
  const [owner, setOwner] = useState({});

  const folderData = async () => {
    const data = await getFolderData();

    const folderData = data['folder'];
    const ownerData = data['folder'].owner;

    setFolder(folderData);
    setOwner(ownerData);
  };

  useEffect(() => {
    folderData();
  }, []);

  return (
    <div className="folder">
      <div className="folder-container">
        <img src={owner.profileImageSource} width="60" />
        <p className="owner-name">{owner.name}</p>
        <p className="folder-name">{folder.name}</p>
      </div>
    </div>
  );
}

export default Folder;
