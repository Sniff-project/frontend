import React, { useContext } from "react";
import { Button } from "@components/ui";
import { useDispatch } from "react-redux";
import { AuthContext } from "@contexts";
import deleteImg from "@assets/Icons/profile/delete.svg";
import { deleteProfile } from "../../../Core/API/users/delete";
import { useAuth } from "@core/Hooks";
import { logout as logoutUser } from "@core/Services";

import Swal from "sweetalert2";

export default function DeleteUser() {
  const isAuth = useAuth();
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleDeleteProfile = () => {
    Swal.fire({
      title: "Ви впевнені?",
      text: "Профіль буде назавжди видалено!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#48A0D1",
      cancelButtonColor: "#C90202",
      confirmButtonText: "Так, видаліть!",
      cancelButtonText: "Відмінити",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutUser(isAuth));
        dispatch(deleteProfile(user.sub, token));
      }
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "1.2rem" }}>
        Щоб видалити профіль, натисніть кнопку нижче
      </h1>
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
