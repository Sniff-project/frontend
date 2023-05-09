import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { login as loginUser } from "@core/Services";
import { Link } from "@components/ui";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";
import SignInForm from "@components/smart/SignInForm";
import "./styles.scss";

const SignInPopup = () => {
  const auth = useContext(AuthContext);
  const dispatch = useDispatch();
  const signInState = useSelector((state) => state.signIn);

  const onSubmitHandler = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (signInState.data?.jwtToken) {
      auth.login(signInState.data.jwtToken);
      signInState.data = null;
    }
  }, [auth, signInState]);

  return (
    <div
      className="sign-in-popup modal d-block"
      id="SignInPopup"
      aria-hidden="true"
      aria-labelledby="SignInPopup"
      tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          {signInState.isLoading && <Spinner size={100} />}
          <div className="modal-header p-0 border-0 d-flex justify-content-center">
            <h3 className="modal-title">Вхід</h3>
          </div>
          <div className="modal-body p-0">
            {signInState.error && (
              <Message
                message={signInState.error.message}
                messageType="error"
                margin={{ bottom: 8 }}
              />
            )}
            <SignInForm onSubmit={onSubmitHandler} />
            <div className="content-after-form d-flex justify-content-center flex-wrap">
              <p className="mb-2 mb-sm-0">Ще не з нами?</p>
              <Link href="/signup">Зареєструватись</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPopup;
