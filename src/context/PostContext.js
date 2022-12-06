import { Posts } from "../Data";
const { createContext, useContext } = require("react");

const PostContext = createContext();

export const ProviderPost = ({ children }) => {
  return (
    <PostContext.Provider value={{ Posts }}>{children}</PostContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostContext);
};
