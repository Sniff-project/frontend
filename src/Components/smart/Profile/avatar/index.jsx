import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadAvatar } from "@core/Services/users";
import { AuthContext } from "@contexts";

const Avatar = () => {
  const dispatch = useDispatch();
  const { user, token } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const [imageData, setImageData] = useState(null); // new state variable to store image data
  const uploadAvatarState = useSelector((state) => state.uploadAvatar);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (imageFile && imageData) {
      dispatch(
        uploadAvatar({
          userId: user.sub,
          token: token,
          image: imageData,
        })
      );
    }
  }, [imageFile, imageData, user, token, dispatch]);

  console.log(uploadAvatarState);

  return (
    <label className="emptyInputImage">
      <input
        id="input__file"
        name="avatar"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleUpload}
        style={{ visibility: "hidden", position: "absolute" }}
      />
    </label>
  );
};

export default Avatar;
