import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Modal } from '../../components/Modal/Modal';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction } from '../../store/actions';

export const ModalCreateFolder = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [ folderName, setFolderName ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fez o submit', folderName)
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleClose = () => {
    dispatch(closeModalsAction());
  }

  return (
    <Modal
      open={open}
      title="Criar pasta"
      onHide={handleClose}
      controls={[
        {
          label: 'Criar e salvar',
          loadingLabel: 'Criando',
          variant: 'secondary',
          loading: false,
          type: 'submit',
          form: 'form-criar-pasta'
        }
      ]}
    >
      <Form onSubmit={handleSubmit} id="form-criar-pasta">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da pasta</Form.Label>
          <Form.Control type="text" placeholder="Ex: Matemática" value={folderName} onChange={handleChange} />
        </Form.Group>
      </Form>
    </Modal>
  )
}