
import myPic from "../../assets/banner-image.jpg";

const ImageWithJsx = () => {
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
        src={myPic}
        alt="Profile"
      />
    </>
  );
};

export default ImageWithJsx;
