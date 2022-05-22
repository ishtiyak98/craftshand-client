import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";

const LogInWithApp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      Swal.fire({
        icon: "success",
        title: "User Found",
      });
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
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
