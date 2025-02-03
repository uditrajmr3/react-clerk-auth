import { useContext } from "react";
import { AuthConfigContext } from "../context/AuthConfigContext";

export default function useAuthConfig() {
  const context = useContext(AuthConfigContext);
  if (!context) {
    throw new Error("useAuthConfig must be used within a AuthConfigProvider");
  }
  return context;
}
