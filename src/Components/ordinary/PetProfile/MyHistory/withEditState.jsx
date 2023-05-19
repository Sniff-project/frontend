import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { EditButton, SaveButton } from "@components/simple";

const withEditState = (WrappedComponent) => {
  return (props) => {
    const methods = useForm();
    const [isEdit, setIsEdit] = useState(false);

    const onEditHandler = useCallback(() => {
      // on click btn edit
      setIsEdit((prev) => !prev);
    }, []);

    const onSaveHandler = useCallback(() => {
      // on click btn save
      const formData = methods.getValues();
      props?.onEditHandler(formData);
      setIsEdit((prev) => !prev);
    }, [methods, props]);

    const button = !isEdit ? (
      <EditButton onClick={onEditHandler} />
    ) : (
      <SaveButton onClick={onSaveHandler} color="success" />
    );

    console.log(props);

    return (
      <WrappedComponent
        {...props}
        button={button}
        isEdit={isEdit}
        methods={methods}
      />
    );
  };
};

export default withEditState;
