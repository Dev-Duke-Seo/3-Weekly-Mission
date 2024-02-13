import Button from 'components/button/Button';
import DefaultModal from './DefaultModal';
import './deleteModal.scss';

export function DeleteFolderModal(props) {
  return (
    <DefaultModal className="delete-modal" {...props}>
      <div className="delete-modal-title">{props.name}</div>
      <Button className="modal-button delete-button">삭제하기</Button>
    </DefaultModal>
  );
}

DeleteFolderModal.propTypes = {
  ...DefaultModal.propTypes,
};

export default DeleteFolderModal;
