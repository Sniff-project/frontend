import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadAvatar } from "@core/Services/users";
import { AuthContext } from "@contexts";

const Avatar = ({ url = null, width = 250, height = 250 }) => {
  const dispatch = useDispatch();
  const { user, token } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const uploadAvatarState = useSelector((state) => state.uploadAvatar);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  useEffect(() => {
    if (imageFile) {
      dispatch(
        uploadAvatar({
          userId: user.sub,
          token: token,
          image: imageFile,
        })
      );
    }
  }, [imageFile, user, token, dispatch]);

  const image = url ? (
    <img src={url} alt="avatar" width={width} height={height} />
  ) : (
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

  return <>{image}</>;
};

export default Avatar;
