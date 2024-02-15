import styled from "styled-components";
import add from "./add.svg";

const AddFolderButton = () => {
  return (
    <AddfolderButtonStyle>
      <span>폴더 추가</span>
      <img src={add} alt="폴더 추가 버튼" />
    </AddfolderButtonStyle>
  );
};
export default AddFolderButton;

const AddfolderButtonStyle = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 16px;
    color: #6d6afe;
  }
`;
