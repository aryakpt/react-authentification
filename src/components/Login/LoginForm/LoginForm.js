import React, { useState, useContext } from "react";
import styles from "./LoginForm.module.css";
import { Button, ErrorModal } from "../../";
import { AuthContext } from "../../../contexts";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const [input, setinput] = useState({ username: "", password: "" });
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.username === "" || input.password === "") {
      const inputName = input.username === "" ? "Username" : "Password";
      return setError({
        title: `Invalid Input`,
        message: `Please enter a valid ${inputName} (non-empty values)`,
      });
    }
    authCtx.loginHandler(input.username, input.password);
  };

  const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setinput((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onClick={closeModalHandler} />}
      <section className={styles[`login-form`]}>
        <div className={styles[`login-form__title`]}>
          <h1>Welcome Back</h1>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <input type="text" className={styles[`form-control`]} name="username" placeholder="Username" value={input.username} onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <input type="password" className={styles[`form-control`]} name="password" placeholder="Password" value={input.password} onChange={onChangeHandler} />
          </div>
          <Button className={`btn-primary btn-login`} type="submit">
            LOGIN
          </Button>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
