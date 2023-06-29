import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  console.log(Boolean(currentUser));

  return currentUser ? children : <Navigate to="/login" />;
}
