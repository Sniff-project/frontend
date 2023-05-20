import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { EditButton, SaveButton } from "@components/ui";

const withEditState = (WrappedComponent) => {
  return (props) => {
    const methods = useForm({ mode: "all" });
    const [isEdit, setIsEdit] = useState(false);

    const onEditHandler = useCallback(() => {
      // on click btn edit
      setIsEdit((prev) => !prev);
    }, []);

    const onSaveHandler = useCallback(
      (formData) => {
        // on click btn save
        const data = {
          description: formData.description.replace(/\s{2,}/g, " ").trim(),
        };
        if (props.description !== data.description) {
          props?.onEditHandler(data);
          props.showSnackbar();
        }
        setIsEdit((prev) => !prev);
      },
      [props]
    );

    const button = !isEdit ? (
      <EditButton onClick={onEditHandler} />
    ) : (
      <SaveButton type="submit" color="success" />
    );

    return (
      <WrappedComponent
        {...props}
        button={button}
        isEdit={isEdit}
        methods={methods}
        onSaveHandler={onSaveHandler}
      />
    );
  };
};

export default withEditState;
