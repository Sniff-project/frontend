export const emailRegex =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={[}\]:;"'<>,.?/|]).*$/;

export const firstNameRegex = /^([а-яіїє'\s-]{2,15})$/i;
export const lastNameRegex = /^([а-яіїє'\s-]{2,15})$/i;
export const phoneRegex =
  /^\+38\s\((0(39|50|63|66|67|68|73|93|94|95|96|97|98|99))\)\s(\d{3})-(\d{2})-(\d{2})$/;
export const phoneRegexForReplace = [
  /^(\+38)(0\d{2})(\d{3})(\d{2})(\d{2})$/,
  "$1 ($2) $3-$4-$5",
];
