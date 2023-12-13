import { useNavigate } from "react-router-dom";
import { useSupabase } from "../hooks/useSupabase";
import { useAppDispatch, useAppSelector } from "../state";
import { Form, Formik } from "formik";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "../state/authSlice";
import { useEffect } from "react";

interface SignInForm {
  email: string;
  password: string;
}

function Login() {
  const supabase = useSupabase();
  const auth = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function submit(values: SignInForm) {
    const data = await supabase?.signIn(values);
    if (data) dispatch(signIn(data));
  }

  useEffect(() => {
    if (auth.loggedIn) navigate("/");
  }, [auth.loggedIn, navigate]);

  return (
    <div className="w-screen h-screen bg-light dark:bg-dark text-dark dark:text-light flex justify-center items-center">
      <div className="bg-light dark:bg-dark shadow-lg dark:shadow-lg dark:shadow-light px-10 py-12 z-30">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <Formik<SignInForm>
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={submit}
        >
          {({ handleChange }) => (
            <Form>
              <TextInput
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
              />
              <TextInput
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
              />
              <div className="flex justify-center mt-5">
                <Button type="submit">
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faSignIn} size="2xl" />
                    <span>Login</span>
                  </div>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Login;
