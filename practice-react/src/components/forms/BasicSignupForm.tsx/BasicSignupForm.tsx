import { useState } from "react";
import "./BasicSignupForm.css";
const BasicSignupForm = () => {
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    username: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignupForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `form data is ${signupForm.name}, ${signupForm.email}, ${signupForm.username}`
    );
    setSignupForm({ name: "", email: "", username: "" });
  };

  return (
    <div>
      <h1>sign up</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          required
          value={signupForm.name}
          id="name"
          type="text"
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          required
          value={signupForm.email}
          id="email"
          type="text"
        ></input>
        <label htmlFor="username">Username:</label>
        <input
          required
          onChange={handleChange}
          value={signupForm.username}
          id="username"
          type="text"
        ></input>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default BasicSignupForm;
