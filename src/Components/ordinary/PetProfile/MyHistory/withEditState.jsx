import { useCallback, useState, useRef } from "react";
import { useForm } from "react-hook-form";

import { EditButton, SaveButton } from "@components/simple";

const withEditState = (WrappedComponent) => {
  return (props) => {
    const methods = useForm();
    const [isEdit, setIsEdit] = useState(false);
    const formRef = useRef();

    const onEditHandler = useCallback(() => {
      setIsEdit((prev) => !prev);
    }, []);

    const onSaveHandler = useCallback(() => {
      formRef.current.submit();
      setIsEdit((prev) => !prev);
    }, []);

    const onSubmitHandler = useCallback(() => {
      // send form
      console.log("submit form");
    }, []);

    const button = !isEdit ? (
      <EditButton onClick={onEditHandler} />
    ) : (
      <SaveButton onClick={onSaveHandler} color="success" />
    );

    return (
      <WrappedComponent
        {...props}
        button={button}
        isEdit={isEdit}
        methods={methods}
        onSubmitHandler={onSubmitHandler}
        formRef={formRef}
      />
    );
  };
};

export default withEditState;
