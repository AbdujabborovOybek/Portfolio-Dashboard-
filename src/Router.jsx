import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Auth } from "./Pages/Login/Auth";
import { Login } from "./Pages/Login/Login";
import { Layout } from "./Components/Layout/Layout";
import { Profile } from "./Pages/Profile/Profile";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Message } from "./Pages/Message/Message";

export const Router = memo(() => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Auth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="message" element={<Message />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
});

const NotFound = () => <h1>Page Not Found</h1>;
