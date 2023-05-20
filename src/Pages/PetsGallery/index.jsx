import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { petsGallery } from "@core/Services/pets";

export default function PetsGallery() {
  const maxCardsOnPage = 12;
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const gallery_Array = useSelector((state) => state.gallery);
  const test_Array = new Array(50).fill(1).map((elem, i) => elem = ++i); // from 1 to 50 numbers


  useEffect(() => {
    dispatch(petsGallery(token));
  }, [dispatch, user, token]);

  return (
    <div>
      <div>Gallery</div>

    </div>
  );
}
