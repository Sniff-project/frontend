import React, { useState, useMemo, useCallback, useRef } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CrossButton from "@components/ui/CrossButton";

const MAX_SIZE = 5 * 1024 * 1024; // 5MB in bytes

const UploadBox = ({ inpFiles = [], onChange, maxImages = 5 }) => {
  const theme = useTheme();
  const [files, setFiles] = useState(inpFiles);
  const inputRef = useRef(null);

  const maxImagesInfo = useMemo(
    () => `Ви не можете завантажувати більше ніж ${maxImages} фото!`,
    [maxImages]
  );

  const handleUpload = useCallback(
    (event) => {
      const selectedFiles = Array.from(event.target.files);
      const imageFiles = selectedFiles.filter(
        (file) => file.type.startsWith("image/") && file.size <= MAX_SIZE
      );
      const newFiles = [...files, ...imageFiles];
      if (newFiles.length <= maxImages) {
        setFiles(newFiles);
        onChange(newFiles);
      } else {
        const slicedFiles = newFiles.slice(0, maxImages);
        setFiles(slicedFiles);
        onChange(slicedFiles);
        alert(maxImagesInfo);
      }
    },
    [files, maxImages, maxImagesInfo, onChange]
  );

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      const droppedFiles = Array.from(event.dataTransfer.files);
      const imageFiles = droppedFiles.filter(
        (file) => file.type.startsWith("image/") && file.size <= MAX_SIZE
      );
      const newFiles = [...files, ...imageFiles];
      if (newFiles.length <= maxImages) {
        setFiles(newFiles);
        onChange(newFiles);
      } else {
        const slicedFiles = newFiles.slice(0, maxImages);
        setFiles(slicedFiles);
        onChange(slicedFiles);
        alert(maxImagesInfo);
      }
    },
    [files, maxImages, maxImagesInfo, onChange]
  );

  const handleRemove = useCallback(
    (index) => {
      const newFiles = [...files];
      newFiles.splice(index, 1);
      setFiles(newFiles);
      onChange(newFiles);
    },
    [files, onChange]
  );

  return (
    <React.Fragment>
      <Box
        border="1px dashed"
        p="5rem 0.625rem"
        textAlign="center"
        component="div"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => inputRef.current.click()}
        sx={{ cursor: "pointer" }}>
        <input
          type="file"
          multiple
          hidden
          accept="image/*"
          onChange={handleUpload}
          ref={inputRef}
        />
        Перетягніть зображення сюди або натисніть, щоб завантажити.
      </Box>
      {files.length > 0 && (
        <React.Fragment>
          <Grid mt={2} container spacing="0.5rem">
            {files.map((file, index) => (
              <Grid
                item
                alignItems="center"
                key={index}
                sx={{ position: "relative" }}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  height="150"
                  width="150"
                />
                {files.length > 1 && (
                  <CrossButton
                    title="Видалити"
                    onClick={() => handleRemove(index)}
                    sx={{
                      color: theme.palette.error.main,
                      marginLeft: "auto",
                      position: "absolute",
                      top: "0.5rem",
                      right: 0,
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default UploadBox;
