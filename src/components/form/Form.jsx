export const Form = ({
  name,
  job,
  title,
  workplace,
  handleAddDeveloper,
  handleCatchData,
  closeModal,
  editModal,
  handleEditDeveloper,
}) => {
  const combineFunctions = (e) => {
    if (editModal) {
      handleEditDeveloper();
    } else {
      handleAddDeveloper(e);
    }
    closeModal();
  };
  return (
    <form className='input-wrapper'>
      <label htmlFor='name'>
        Name
        <input
          type='text'
          id='name'
          name='name'
          style={{ marginLeft: '5px' }}
          onChange={handleCatchData}
          value={name}
        />
      </label>
      <label htmlFor='title'>
        Title
        <input
          type='text'
          id='title'
          name='title'
          // style={{ marginLeft: '5px' }}
          onChange={handleCatchData}
          value={title}
        />
      </label>
      <label htmlFor='job'>
        Job
        <input
          type='text'
          id='job'
          name='job'
          onChange={handleCatchData}
          value={job}
        />
      </label>
      <label htmlFor='workplace'>
        Work
        <input
          type='text'
          id='workplace'
          name='workplace'
          onChange={handleCatchData}
          value={workplace}
          style={{ marginLeft: '5px' }}
        />
      </label>

      <button
        style={{ marginLeft: '100px' }}
        onClick={combineFunctions}
        type='submit'
      >
        Submit
      </button>
      {editModal && (
        <button style={{ marginLeft: '100px' }} onClick={closeModal}>
          Close
        </button>
      )}
    </form>
  );
};
