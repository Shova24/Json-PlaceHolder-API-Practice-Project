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

  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    getBlogs();
    getUsers();
  }, []);

  return (
    <jsonContext.Provider value={{ blog, users }}>
      {children}
    </jsonContext.Provider>
  );
};

export default jsonContext;
