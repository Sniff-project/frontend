import { memo, useMemo, useState, useCallback, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { StyledBox } from "@components/simple";
import { Map } from "@components/ordinary";
import { useTheme } from "@mui/system";

import { EditButton, SaveButton } from "@components/ui";

const PetLocationBlock = ({
  petProfile,
  isLoading,
  isPetOwner,
  onSubmit,
  showSnackbar,
  margin = 0,
}) => {
  const { latitude: lat, longitude: lng, status } = petProfile ?? {};

  const statusText = useMemo(
    () => (status === "Знайдено" ? "знайшли" : "загубили"),
    [status]
  );

  const theme = useTheme();
  const [isEdit, setIsEdit] = useState(false);
  const [position, setPosition] = useState({ lat: +lat, lng: +lng });

  useEffect(() => setPosition({ lat: +lat, lng: +lng }), [lat, lng]);

  const onPosChangeHandler = useCallback((pos) => {
    setPosition(pos);
  }, []);

  const onEditHandler = useCallback(() => {
    setIsEdit((prev) => !prev);
  }, []);

  const onSaveHandler = useCallback(() => {
    const data = { latitude: position.lat, longitude: position.lng };
    if (data.lat !== lat || data.lng !== lng) {
      onSubmit(data);
      showSnackbar();
    }
    setIsEdit((prev) => !prev);
  }, [lat, lng, onSubmit, position, showSnackbar]);

  const button = !isEdit ? (
    <EditButton
      onClick={onEditHandler}
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1000,
        margin: "0.5rem",
        backgroundColor: theme.palette.white.main,
        "&:hover": { backgroundColor: theme.palette.white.dark },
      }}
    />
  ) : (
    <SaveButton
      onClick={onSaveHandler}
      color="success"
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1000,
        margin: "0.5rem",
        backgroundColor: theme.palette.white.main,
        "&:hover": { backgroundColor: theme.palette.white.dark },
      }}
    />
  );

  return (
    <StyledBox
      className="pet-profile__locationBlock"
      sx={{ position: "relative", padding: "1rem", margin: margin }}>
      {!isLoading && position.lat && position.lng ? (
        <>
          {isPetOwner && button}
          <Map
            position={position}
            draggable={isEdit}
            scrollWheelZoom={true}
            onPosChange={onPosChangeHandler}
            zoom={12}
            text={`Мене ${statusText} тут`}
            style={{ height: "31.25rem", borderRadius: "10px" }}
          />
        </>
      ) : (
        <Skeleton variant="rounded" height="31.25rem" />
      )}
    </StyledBox>
  );
};

export default memo(PetLocationBlock);
