import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { petsGallery } from "@core/Services/pets";

export default function PetsGallery() {
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const gallery_Array = useSelector((state) => state.gallery);


  useEffect(() => {
    dispatch(petsGallery(token));
  }, [dispatch, user, token]);

  return <div>Gallery</div>;
}
