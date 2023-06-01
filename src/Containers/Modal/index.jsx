import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const ModalContainer = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition={true}
      sx={{ maxHeight: "100vh", overflow: "auto" }}>
      <Box
        sx={{
          width: "fit-content",
          margin: "auto",
          padding: 0,
        }}>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalContainer;
