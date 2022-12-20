import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isvalida, setIsValida] = useState(true);

  const disableValidation = () => {
    const minNumber = 6;
    const regex = /\S+@\S+\.\S+/;
    const validacion = regex.test(email);
    const condicion = password.length >= minNumber;

    if (!validacion && !condicion) {
      setIsValida(true);
    } else { 
      setIsValida(false);
    }
  };

  const handleEmail = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
    disableValidation();
  };
  console.log(email);
  const handlePassword = (event) => {
    const {
      target: { value },
    } = event;
    setPassword(value);
    disableValidation();
  };
  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify({ email }));
  };

  return (
    <>
      <section class=" text-center text-lg-start">
        <div class="card mb-3">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="Trendy Pants and Shoes"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">
                <form>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form2Example1"
                      class="form-control"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form2Example2"
                      class="form-control"
                      value={password}
                      onChange={handlePassword}
                    />
                  </div>

                  <Link to="/calcComum">
                    <button
                      type="button"
                      class="btn btn-primary btn-block mb-4"
                      disabled={isvalida}
                      onClick={handleSubmit}
                    >
                      Sign in
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
