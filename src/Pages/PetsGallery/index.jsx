import React, { useContext, useEffect } from "react";
import { getGallery } from "../../Core/API/pets/gallery";
import { useDispatch } from "react-redux";
import { AuthContext } from "@contexts";

export default function PetsGallery() {
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getGallery(token));
  }, [dispatch, user, token]);

  return <div></div>;
}
