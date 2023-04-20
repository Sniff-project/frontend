import SignInForm from "./SignInForm";
import "./styles.scss";

const SignInPopup = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="sign-in-popup modal d-block"
      id="SignInPopup"
      aria-hidden="true"
      aria-labelledby="SignInPopup"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-header p-0 border-0 d-flex justify-content-center">
            <h3 className="modal-title">Вхід</h3>
          </div>
          <div className="modal-body p-0">
            <SignInForm onSubmit={handleSubmit} />
            <div className="content-after-form d-flex justify-content-center flex-wrap">
              <p className="mb-2 mb-sm-0">Ще не з нами?</p>
              <a
                href="#"
                className="color-black text-decoration-underline mb-0"
              >
                Зареєструватись
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPopup;
