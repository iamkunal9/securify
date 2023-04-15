
function Block({ data }) {
    return (
      <>
        {data.map((cnt, index) => (
          <div className="note">
            <h1>{cnt.info.name}</h1>
            <p>{cnt.info.description}</p>
          </div>
        ))}
      </>
    );
  }
  
  export default Block;