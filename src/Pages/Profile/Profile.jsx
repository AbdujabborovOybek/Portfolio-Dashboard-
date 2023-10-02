import React from "react";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="page profile">
      <form className="profile-form">
        <label>
          <span>Ism Familiya</span>
          <input
            type="text"
            name="fullname"
            placeholder="Ism Familiya"
            required
            autoComplete="off"
          />
        </label>
        <label>
          <span>Ism Familiya</span>
          <textarea name="about" autoComplete="off" required></textarea>
        </label>

        <label>
          <input type="submit" value="Saqlash" />
        </label>
      </form>
    </div>
  );
};
