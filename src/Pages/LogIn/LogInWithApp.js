import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import Spinner from "../Shared/Spinner";

const LogInWithApp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);

  useEffect(() => {
    if (token) {
      Swal.fire({
        title: "Logged In!",
        text: "Successfully logged in",
        icon: "success",
      });
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error.message}`,
      });
    }
  }, [error]);


  // if (loading) {
  //   return <Spinner></Spinner>
  // }

  
  return (
    <>
      <div className="divider">OR</div>
      <div className="flex justify-center">
        <button
          className="btn btn-outline btn-primary w-3/4 text-white font-normal"
          onClick={() => signInWithGoogle()}
        >
          Continue With Google
        </button>
      </div>
    </>
  );
};

export default LogInWithApp;
