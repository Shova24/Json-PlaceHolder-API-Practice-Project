import { createContext, useEffect, useState } from "react";

const jsonContext = createContext();

export const JsonProvider = ({ children }) => {
  //write states and other functions here
  const [blog, setBlog] = useState([]);

  const getBlogs = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setBlog(data));
  };

  return (
    <jsonContext.Provider value={{ blog, setBlog, getBlogs }}>
      {children}
    </jsonContext.Provider>
  );
};

export default jsonContext;
