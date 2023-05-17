import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadAvatar } from "@core/Services/users";
import { AuthContext } from "@contexts";
import { Message } from "@components/ordinary";
import { Spinner } from "@components/simple";
import "./styles.scss";

const Avatar = ({
  src = null,
  width = '350px',
  onlyRead = false,
}) => {
  const dispatch = useDispatch();
  const { user, token } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const [isBigSize, setIsBigSize] = useState(false);
  const uploadAvatarState = useSelector((state) => state.uploadAvatar);
  const maxSizeFile = 5 * 1024 * 1024;
  const bigSizeMessage =
    "Розмір завантажуваного файлу перевищує допустимий ліміт у 5 МБ!";

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file.size > maxSizeFile) {
      setIsBigSize(true);
      return;
    }
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

  const title = !onlyRead ? (
    <p className="profile__avatar-title">Клікніть сюди, щоб змінити фото</p>
  ) : (
    ""
  );

  const image =
    uploadAvatarState.success?.url || src ? (
      <>
        {title}
        <img
          src={uploadAvatarState.success?.url || src}
          alt="avatar"
          width={width}
          style={{border: '1px solid rgba(0, 0, 0, 0.5)'}}
        />
        <label className="filledInputImage">
          <input
            disabled={onlyRead}
            id="input__file"
            name="avatar"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleUpload}
          />
        </label>
        {isBigSize && (
          <Message
            style={{ width: "500px" }}
            message={bigSizeMessage}
            messageType="error"
            mt={5}
          />
        )}
      </>
    ) : (
      <>
        {title}
        <label className="emptyInputImage">
          <input
            disabled={onlyRead}
            id="input__file"
            name="avatar"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleUpload}
          />
        </label>
        {isBigSize && (
          <Message
            style={{ width: "500px" }}
            message={bigSizeMessage}
            messageType="error"
            mt={5}
          />
        )}
      </>
    );

  return (
    <>
      {uploadAvatarState.isLoading && <Spinner size={100} />}
      <div className="profile__avatar">
        {image}
        {uploadAvatarState.error && (
          <Message
            message={uploadAvatarState.error.message}
            messageType="error"
            mt={5}
          />
        )}
      </div>
    </>
  );
};

export default Avatar;
