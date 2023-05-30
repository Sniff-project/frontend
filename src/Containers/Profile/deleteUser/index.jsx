import React, { useContext } from "react";
import { Button } from "@components/ui";
import { useDispatch } from "react-redux";
import { AuthContext } from "@contexts";
import deleteImg from "@assets/Icons/profile/delete.svg";
import { deleteProfile } from "../../../Core/API/users/delete";

export default function DeleteUser() {
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleDeleteProfile = () => {
    dispatch(deleteProfile(user.sub, token));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        sx={{
          width: "250px",
          marginTop: "50px",
          backgroundColor: "#C90202 !important",
          boxShadow: "0px 0px 25px rgba(201, 2, 2, 0.5)",
        }}
        tabIndex={3}
        onClick={handleDeleteProfile}
      >
        Видалити
        <img style={{ marginLeft: "10px" }} src={deleteImg} alt="Delete" />
      </Button>
    </div>
  );
}
