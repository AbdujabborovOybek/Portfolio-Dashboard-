import React from "react";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <div className="page portfolio">
      <form className="portfolio-form">
        <label>
          <span>Loyihaning rasimlarini yuklang</span>
          <input type="file" name="file" required multiple />
        </label>

        <input type="text" name="name" placeholder="Portfolio nomi" required />

        <input type="date" name="date" required />
        <textarea name="description" required></textarea>
        <input type="submit" value="Saqlash" />
      </form>
    </div>
  );
};
