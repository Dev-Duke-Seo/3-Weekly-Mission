import React, { useState } from "react";
import { useFetchFolders } from "./hooks/useFetchFolders";
import { fetchFolders } from "./api/fetchFolders";
import FolderContent from "./FolderContent";

function FolderList() {
    const { folders, error: folderError } = useFetchFolders();
    const [links, setLinks] = useState([]);
    const [error, setError] = useState(null);

    const handleFolderClick = (folderId) => {
        fetchFolders(folderId)
            .then((data) => setLinks(data))
            .catch((err) => setError(err));
    };

    if (folderError) return <div>Error: {folderError.message}</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <FolderContent
            folders={folders}
            links={links}
            onFolderClick={handleFolderClick}
        />
    );
}

export default FolderList;
