import React, { useState } from "react";
import "./css/login.css";

const Login = (props) => {
  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user);
    props.history.push("/");
  };

  return (
    <div>
      <form class="ui form">
        <div class="field">
          <label>Username</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </div>
        <div class="field">
          <label>ID</label>
          <input
            required
            type="text"
            id="id"
            name="id"
            placeholder="ID"
            onChange={handleInputChange}
          />
        </div>
        <button class="ui primary button" type="submit" onClick={login}>
          Login
        </button>
      </form>
      <div className="icons-class">
        <i class="big facebook square blue icon"></i>
        <i class="big google red icon"></i>
        <i class="big github icon"></i>
      </div>
    </div>
  );
};

export default Login;
