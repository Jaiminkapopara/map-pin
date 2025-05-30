
import axios from "axios";
import { useRef, useState } from "react";
import "./Register.css";

const Register = ({ setShowRegister }) => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newUser = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
  
      try {
        await axios.post("/api/users/register", newUser);
        setError(false);
        setSuccess(true);
      } catch (err) {
        setError(true);
      }
    };

  return (
    <div className="registerContainer">
      <div className="logo">
        <span>HotPin</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="username" ref={usernameRef} />
        <input type="email" placeholder="email" ref={emailRef} />
        <input
          type="password"
          min="6"
          placeholder="password"
          ref={passwordRef}
        />
        <button className="registerBtn" type="submit">
          Register
        </button>
        {success && (
          <span className="success">Successfull. You can login now!</span>
        )}
        {error && <span className="failure">Something went wrong!</span>}
      </form>
      <div
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      >+</div>
    </div>
  )
}

export default Register
