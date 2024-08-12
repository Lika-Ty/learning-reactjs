
const ImageWithJsx = () => {
  const source =
    "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const alternetive = "profile";

  const myObj = {
    name: "Mr. Lika",
    them: {
      backgroundColor: "dodgerblue",
      color: "red",
    },
  };

  return (
    <>
      <h1>{myObj.name}'s profile</h1>
      <img
        style={{
          borderRadius: "50%",
          width: "300px",
          height: "300px",
          objectFit: "cover",
        }}
        className="profile"
        src={source}
        alt={alternetive}
      />
    </>
  );
};

export default ImageWithJsx;
