import { useState, useMemo, useCallback, useRef } from "react";
import { Dialog, DialogTitle, DialogContent, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CrossButton from "@components/ui/CrossButton";
import SaveButton from "@components/ui/SaveButton";

const ImageUploadPopup = ({ open, togglePopup, maxImages = 5, onSave }) => {
  const theme = useTheme();
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const maxImagesInfo = useMemo(
    () => `Ви не можете завантажувати більше ніж ${maxImages} фото!`,
    [maxImages]
  );

  const handleUpload = useCallback(
    (event) => {
      const selectedFiles = Array.from(event.target.files);
      const newFiles = [...files, ...selectedFiles];
      if (newFiles.length <= maxImages) {
        setFiles(newFiles);
      } else {
        const slicedFiles = newFiles.slice(0, maxImages);
        setFiles(slicedFiles);
        alert(maxImagesInfo);
      }
    },
    [files, maxImages, maxImagesInfo]
  );

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      const droppedFiles = Array.from(event.dataTransfer.files);
      const newFiles = [...files, ...droppedFiles];
      if (newFiles.length <= maxImages) {
        setFiles(newFiles);
      } else {
        const slicedFiles = newFiles.slice(0, maxImages);
        setFiles(slicedFiles);
        alert(maxImagesInfo);
      }
    },
    [files, maxImages, maxImagesInfo]
  );

  const handleRemove = useCallback(
    (index) => {
      const newFiles = [...files];
      newFiles.splice(index, 1);
      setFiles(newFiles);
    },
    [files]
  );

  const onSaveHandler = useCallback(() => {
    if (files.length > 0) {
      onSave(files);
      togglePopup();
    }
  }, [files, onSave, togglePopup]);

  return (
    <div>
      <Dialog open={open} onClose={togglePopup}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          padding="1rem 1.5rem">
          <Grid item>
            <DialogTitle {...theme.typography.h2} sx={{ padding: 0 }}>
              Завантажити фото
            </DialogTitle>
          </Grid>
          <Grid item>
            <SaveButton onClick={onSaveHandler} color="success" />
            <CrossButton onClick={togglePopup} />
          </Grid>
        </Grid>

        <DialogContent>
          <Box
            border="1px dashed"
            p="5rem 0.625rem"
            textAlign="center"
            component="div"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => inputRef.current.click()}>
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
            <>
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageUploadPopup;
