import React, { useState }from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isvalida, setIsValida] = useState(true);


  const disableValidation = () => {
    const minNumber = 6;
    const regex = /\S+@\S+\.\S+/;
    const validacion = regex.test(email);
    const condicion = password.length >= minNumber;

    const validation = (
      !validacion
      || !condicion
    );
    setIsValida(validation);
  };

  const handleEmail = (event) => {
    const {target:{ value }} = event;
    setEmail(value);
    disableValidation();

};
console.log(email);
const handlePassword = (event) => {
    const {target:{ value }} = event;
    setPassword(value);
    disableValidation();
}
const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
}

  return (
    <div className="container-login">
     <form>
        <h3>Login</h3>
      <label className="login-email" htmlFor="email">
        email
        <input
          name="email"
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={ handleEmail }
        />
     </label>
      <label className="login-senha" htmlFor="senha">
        Senha:
        <input
          name="senha"
          type="password"
          id="senha"
          value={ password }
          onChange={ handlePassword }
        />
      </label>

      </form>
        <Link to="/calcComum">
            <button
                type="button"
                className="btn"
                disabled={ isvalida }
                onClick={ handleSubmit }

            >
            Login
            </button>
        </Link>
    </div>
  );
}

export default Login;
