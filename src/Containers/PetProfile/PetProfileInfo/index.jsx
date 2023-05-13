const PetProfileInfo = ({ name, type, age, breed, weight }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Breed:</strong> {breed}
      </p>
      <p>
        <strong>Weight:</strong> {weight}
      </p>
    </div>
  );
};

export default PetProfileInfo;
