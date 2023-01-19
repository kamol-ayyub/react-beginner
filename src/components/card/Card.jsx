export const Card = ({
  developers,
  handleDeleteDeveloper,
  openModal,
  setDeveloperId,
}) => {
  return (
    <div style={{ marginTop: '50px' }}>
      {developers.length > 0 &&
        developers.map((developer) => {
          const { name, job } = developer;
          return (
            <div
              onClick={() => setDeveloperId(developer.id)}
              key={developer.id}
              className='card'
            >
              <div>
                <h4>Username:</h4> <p>{name}</p>
              </div>
              <div>
                <h4>Job:</h4> <p>{job}</p>
              </div>
              <div className='buttons-wrapper'>
                <button onClick={openModal}>Edit</button>
                <button onClick={() => handleDeleteDeveloper(developer.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
