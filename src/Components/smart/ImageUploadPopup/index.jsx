import { useState, useCallback } from "react";
import { Dialog, DialogTitle, DialogContent, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CrossButton from "@components/ui/CrossButton";
import SaveButton from "@components/ui/SaveButton";
import { default as UploadBox } from "./UploadBox";

const ImageUploadPopup = ({ open, togglePopup, onSave }) => {
  const theme = useTheme();
  const [files, setFiles] = useState([]);

  const onChangeHandler = useCallback((files) => {
    if (files.length > 0) {
      setFiles(files);
    }
  }, []);

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
          <UploadBox inpFiles={files} onChange={onChangeHandler} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageUploadPopup;
