import React, { useState } from "react";

function PasswordForm() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="password">Password:</label>
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="button" onClick={toggleShowPassword}>
          {showPassword ? "Hide" : "Show"}
        </button>
        <button type="button" onClick={handleCopyPassword}>
          Copy
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PasswordForm;