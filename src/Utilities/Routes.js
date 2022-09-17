import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "../Component/Blogs";
import PostDetails from "../Component/PostDetails";
import UserDetails from "../Component/UserDetails";
import UserList from "../Component/UserList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/:id" element={<PostDetails />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:userId" element={<UserDetails />} />
    </Routes>
  );
}
