import React from "react";
import "./Message.css";

export const Message = () => {
  const message = Array(7).fill(msg);

  return (
    <div className="page message">
      {message?.map((item, index) => {
        return (
          <div className="message-item" key={index}>
            <span>02.10.2023</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi sunt itaque rerum doloremque amet magni sapiente tempora
              error iure repudiandae, atque earum suscipit esse numquam aut modi
              neque obcaecati quam.
            </p>
            <form>
              <input
                type="text"
                name="message"
                required
                placeholder="Javob yozish..."
              />
              <input type="submit" value="Yuborish" />
            </form>
          </div>
        );
      })}
    </div>
  );
};

const msg = {
  id: 1,
  date: "02.10.2023",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sunt itaque rerum doloremque amet magni sapiente tempora error iure repudiandae, atque earum suscipit esse numquam aut modi neque obcaecati quam.",
};
