import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../scss/Register.scss";

function Register() {
  const [Info, setInfo] = useState({
    Student_Id: "",
    name: "",
    email: "",
    phone: "",
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInfo({
        ...Info,
        [name]: value,
      });
    },
    [Info]
  );

  return (
    <div className="container">
      <div className="Register">
        <form action="http://localhost:3000/register" method="get">
          <div className="form-group">
            <span>학번</span>
            <input
              className="form-field"
              type="text"
              placeholder="1234567"
              name="Student_Id"
              value={Info.Student_Id}
              autoFocus
              required
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <span>Name</span>
            <input
              className="form-field"
              type="text"
              placeholder="홍길동"
              name="name"
              value={Info.name}
              required
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <span>Email</span>
            <input
              className="form-field"
              type="email"
              placeholder="gildong@gmail.com"
              name="email"
              value={Info.email}
              required
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <span>Phone</span>
            <input
              className="form-field"
              type="text"
              placeholder="01012345678"
              name="phone"
              value={Info.phone}
              required
              pattern="^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$"
              onChange={onChange}
            />
          </div>

          <div className="button">
            <span>
              <Link to="../main" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
