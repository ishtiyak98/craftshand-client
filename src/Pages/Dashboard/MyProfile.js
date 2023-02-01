import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    data: userInfo,
    isLoading,
    refetch,
  } = useQuery("userInfo", () =>
    fetch(`https://craftshand-server.onrender.com/users/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const handleUpdate = (data) => {
    const { education, location, phone, linkedIn } = data;

    const updateInfo = {
      education: education ? education : userInfo.education,
      location: location ? location : userInfo.location,
      phone: phone ? phone : userInfo.phone,
      linkedIn: linkedIn ? linkedIn : userInfo.linkedIn,
    };

    fetch(`https://craftshand-server.onrender.com/userUpdate/${user.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          reset();
          toast.success("user-info updated");
        }
      });
  };

  console.log(userInfo);
  return (
    <div className="mx-6 lg:mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
        <div>
          <h4 className="text-primary text-2xl font-medium mb-5">My Profile</h4>
          <div className="space-y-4">
            <h5 className="text-xl font-medium">
              User Name : {user?.displayName}
            </h5>
            <h5 className="text-xl font-medium">
              User Email : {userInfo?.email}
            </h5>
            <h5 className="text-xl font-medium">
              Education : {userInfo?.education}
            </h5>
            <h5 className="text-xl font-medium">
              Location : {userInfo?.location}
            </h5>
            <h5 className="text-xl font-medium">Phone : {userInfo?.phone}</h5>
            <h5 className="text-xl font-medium">
              Linked In : {userInfo?.linkedIn}
            </h5>
          </div>
        </div>
        <div>
          <h4 className="text-primary text-2xl font-medium mb-5">
            Edit Your Profile
          </h4>
          <div className="card w-full bg-base-100 shadow-xl mb-10">
            <div className="card card-body">
              <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-control w-full mb-4">
                  <input
                    type="text"
                    placeholder="Education"
                    className="input input-bordered input-primary w-full"
                    {...register("education", { required: false })}
                  />
                </div>

                <div className="form-control w-full mb-4">
                  <input
                    type="text"
                    placeholder="Location"
                    className="input input-bordered input-primary w-full"
                    {...register("location", { required: false })}
                  />
                </div>

                <div className="form-control w-full mb-4">
                  <input
                    type="number"
                    placeholder="Phone"
                    className="input input-bordered input-primary w-full"
                    {...register("phone", { required: false })}
                  />
                </div>

                <div className="form-control w-full mb-4">
                  <input
                    type="text"
                    placeholder="LinkedIn"
                    className="input input-bordered input-primary w-full"
                    {...register("linkedIn", { required: false })}
                  />
                </div>

                <div className="my-3 flex justify-center">
                  <input
                    className="btn btn-primary w-3/4 text-white  text-base font-normal disabled:bg-slate-200 disabled:text-black"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
