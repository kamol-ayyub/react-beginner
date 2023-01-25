import { useState } from 'react';
import { useFetchHook, Form, Card } from '../../components';
import '../../App.css';
import Modal from 'react-modal';

export function AddDeveloper() {
  const [newDeveloper, setNewDeveloper] = useState({
    job: '',
    name: '',
    title: '',
    workplace: '',
  });
  const [developerId, setDeveloperId] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { response, isLoading, fetchData } = useFetchHook();

  const handleCatchData = (e) => {
    setNewDeveloper({ ...newDeveloper, [e.target.name]: e.target.value });
  };
  const handleAddDeveloper = async (e) => {
    const addDeveloper = fetchData;
    e.preventDefault();
    await addDeveloper({
      url: '/developers',
      method: 'POST',
      newDeveloper,
    });
    setNewDeveloper({ job: '', name: '', title: '', workplace: '' });
  };
  const handleDeleteDeveloper = async (id) => {
    const deleteDeveloper = fetchData;
    await deleteDeveloper({
      url: `/developers/${id}`,
      method: 'DELETE',
    });
  };
  const handleEditDeveloper = async () => {
    const editDeveloper = fetchData;
    await editDeveloper({
      url: `/developers/${developerId}`,
      method: 'PUT',
      newDeveloper,
    });
  };

  const handleFetchData = () => {
    fetchData('/developers');
  };

  console.log(response, ' response');
  return (
    <div className='App'>
      <Modal isOpen={modalIsOpen} className={'modal'}>
        <Form
          name={newDeveloper.name}
          job={newDeveloper.job}
          title={newDeveloper.title}
          workplace={newDeveloper.workplace}
          handleAddDeveloper={handleAddDeveloper}
          handleCatchData={handleCatchData}
          closeModal={closeModal}
          editModal={true}
          handleEditDeveloper={handleEditDeveloper}
        />
      </Modal>
      <Form
        name={newDeveloper.name}
        job={newDeveloper.job}
        title={newDeveloper.title}
        workplace={newDeveloper.workplace}
        handleAddDeveloper={handleAddDeveloper}
        handleCatchData={handleCatchData}
        editModal={false}
      />
      <button onClick={handleFetchData}>Fetch devs</button>
      <h1>{isLoading ? 'Loading...' : 'Users'}</h1>

      <Card
        handleDeleteDeveloper={handleDeleteDeveloper}
        developers={response}
        openModal={openModal}
        setDeveloperId={setDeveloperId}
      />
    </div>
  );
}
