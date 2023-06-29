import { Route, Routes } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            {/* <Route path="/*" element={<PublicRoute></PublicRoute>}> */}
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignUp></SignUp>
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login></Login>
                </PublicRoute>
              }
            />
            {/* </Route> */}
            {/* <Route path="/*" element={<PrivateRoute></PrivateRoute>}> */}
            <Route
              path="/quiz/:id"
              element={
                <PrivateRoute>
                  <Quiz></Quiz>
                </PrivateRoute>
              }
            />
            <Route
              path="/result/:id"
              element={
                <PrivateRoute>
                  <Result></Result>
                </PrivateRoute>
              }
            />
            {/* </Route> */}
          </Routes>
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;
