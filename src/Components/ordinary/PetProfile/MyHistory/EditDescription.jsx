import DefaultInput from "@components/ui/Input/DefaultInput";

const EditDescription = ({ description, ...rest }) => {
  return (
    <DefaultInput
      type="text"
      name="description"
      label="Опис"
      multiline
      defaultValue={description}
      tabIndex={1}
      validation={{
        required: true,
        minLength: {
          value: 20,
          message: "Мінімальна довжина опису 20 символів!",
        },
        maxLength: {
          value: 250,
          message: "Максимальна довжина опису 250 символів!",
        },
        pattern: {
          value: /^([а-яіїє'0-9\s-,.!?";:()]{20,250})$/i,
          message: "Опис може містити тільки українські літери та цифри!",
        },
      }}
      {...rest}
    />
  );
};

export default EditDescription;
