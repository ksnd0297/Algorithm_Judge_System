import React from "react";
import "../scss/Register.scss";

function Register() {
  return (
    <div className="Register">
      <form action="http://localhost:3000/register" method="get">
        <div className="form-group">
          <span>Name</span>
          <input
            className="form-field"
            type="text"
            placeholder="홍길동"
            name="name"
            autoFocus
            required
          />
        </div>

        <div className="form-group">
          <span>Email</span>
          <input
            className="form-field"
            type="email"
            placeholder="gildong@gmail.com"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <span>Phone</span>
          <input
            className="form-field"
            type="text"
            placeholder="010-1234-5678"
            name="phone"
            required
            pattern="^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$"
          />
        </div>

        <button type="submit">제출</button>
        <button type="reset">취소</button>
      </form>
    </div>
  );
}

export default Register;
