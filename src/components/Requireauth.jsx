import { useStore } from "./UserState";
import { Navigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";

// function RequireAuth({ children }) {
//   const { authed } = useAuth();

//   return authed === true ? children : <Navigate to="/login" />;
// }

export default function RequireAuth({ children }) {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  console.log(user);
  console.log(children);

  return <>{user ? children : <Navigate to="/login" />}</>;
}
