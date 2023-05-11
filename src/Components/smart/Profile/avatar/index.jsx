import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadAvatar } from "@core/Services/users";
import { AuthContext } from "@contexts";
import "./styles.scss";

const Avatar = ({ src = null, width = 305, height = 315 }) => {
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

  const image =
    src || uploadAvatarState.success?.url ? (
      <div className="profile__avatar">
        <img
          src={src || uploadAvatarState.success.url}
          alt="avatar"
          width={width}
          height={height}
        />
        <label className="filledInputImage">
          <input
            id="input__file"
            name="avatar"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleUpload}
          />
        </label>
      </div>
    ) : (
      <div className="profile__avatar">
        <label className="emptyInputImage">
          <input
            id="input__file"
            name="avatar"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleUpload}
          />
        </label>
      </div>
    );

  return <>{image}</>;
};

export default Avatar;
