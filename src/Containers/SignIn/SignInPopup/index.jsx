import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SignInBlock from "../SignInBlock";

const SignInPopup = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition={true}>
      <Box
        sx={{
          width: "fit-content",
          margin: "auto",
        }}>
        <SignInBlock />
      </Box>
    </Modal>
  );
};

export default SignInPopup;
