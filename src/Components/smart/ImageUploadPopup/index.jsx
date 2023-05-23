import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  Grid,
} from "@mui/material";
import useTheme from "@mui/system/useTheme";
import CrossButton from "@components/ui/CrossButton";

const ImageUploadPopup = ({ open, togglePopup, maxImages = 5 }) => {
  const theme = useTheme();
  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    const newFiles = [...files, ...droppedFiles];
    if (newFiles.length <= maxImages) {
      setFiles(newFiles);
    } else {
      const slicedFiles = newFiles.slice(0, maxImages);
      setFiles(slicedFiles);
      alert(`You can only upload up to ${maxImages} images.`);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemove = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div>
      <Dialog open={open} onClose={togglePopup}>
        <DialogTitle>Завантажити фото</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              border="1px dashed"
              p={2}
              onDrop={handleDrop}
              onDragOver={handleDragOver}>
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
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageUploadPopup;
