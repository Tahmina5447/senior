import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CustomButton from "../../../Shared/button/CustomButton";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomErrorToast from "../../../Shared/Tosat/CustomErrorToast";
import { Checkbox } from "antd";

const SelectRolePage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("super-admin");
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const UserRole = [
    {
      title: "Supper Admin",
      icon: (
        <Icon
          className="text-primary text-3xl font-bold"
          icon="mingcute:user-security-line"
        />
      ),
      roll: "super-admin",
    },
    {
      title: "Admin",
      icon: (
        <Icon
          className="text-primary text-3xl font-bold"
          icon="mingcute:user-3-line"
        />
      ),
      roll: "admin",
    },
    {
      title: "Support Agent",
      icon: (
        <Icon
          className="text-primary text-3xl font-bold"
          icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport"
        />
      ),
      roll: "support-agent",
    },
  ];

  const onSubmit = (data) => {

    if (
      data.email === "admin@gmail.com" ||
      data.email === "support@gmail.com" ||
      data.email === "super@gmail.com"
    ) {
      if (data.email === "admin@gmail.com") {
        navigate("/admin/dashboard");
      }
      if (data.email === "support@gmail.com") {
        navigate("/support-agent/dashboard");
      }
      if (data.email === "super@gmail.com") {
        navigate("/super-admin/dashboard");
      }
      reset();
      // toast.custom((t) => (
      //   <CustomToast
      //     t={t}
      //     text={"Admin successfully logged into the admin dashboard."}
      //   />
      // ));
    } else {
      toast.custom((t) => (
        <CustomErrorToast
          t={t}
          text={"There are items that require your attention"}
          title={"Error"}
        />
      ));
    }
  };

  return (
    <div className="md:flex w-full items-center justify-between ">
      <div className="flex items-center h-[100vh] md:w-[50%] w-full justify-center">
        <div className="lg:w-[470px] h-full flex items-center justify-center px-5">
          <div className="">
            <h1 className="font-bold text-[36px] text-primary">Sign In</h1>
            <p className=" text-light-black text-[16px] font-[400] mt-2">
              Select Your Role And Enter Additional Information To Sign In To
              Your Account
            </p>

            <div className="py-[35px] ">
              <div className=" grid md:grid-cols-3 grid-cols-1 items-center gap-5">
                {UserRole?.map((role) => (
                  <div
                    key={role.roll}
                    onClick={() => setActive(role.roll)}
                    className={` gap-[12px] cursor-pointer hover:border-[3px] hover:border-primary rounded-[16px] flex items-center justify-start md:justify-center md:flex-col py-2 md:py-6 px-[10px] ${role.roll === active
                      ? " border-[3px] shadow-shadowOne border-primary"
                      : "border border-primary/25"
                      }`}
                  >
                    <div className=" w-[53px] h-[53px] bg-[#F9F5FF] rounded-full flex items-center justify-center">
                      {role?.icon}
                    </div>
                    <h4 className=" text-black text-center font-[500] text-[14px]">
                      {role.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="flex flex-col items-start ">
                <label
                  htmlFor="otp"
                  className="mb-1 font-[500] text-[14px] text-[#1B2559]"
                >
                  Email <span className=" text-primary">*</span>
                </label>
                <input
                  className="py-[18px] px-[16px] h-[50px] text-[#3D4854] placeholder:text-[#A3AED0]  rounded-[16px] w-full text-[16px] outline-none  border-[1px] focus:border-primary"
                  type="email"
                  placeholder={"mail@simmmple.com"}
                  id="otp"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter a valid e-mail address",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex flex-col items-start mt-5 mb-2">
                <label
                  htmlFor="otp"
                  className="mb-1 font-[500] text-[14px] text-[#1B2559]"
                >
                  Password <span className=" text-primary">*</span>
                </label>
                <div className="w-full relative">
                  <input
                    className="py-[18px] px-[16px] h-[50px] text-[#3D4854] placeholder:text-[#A3AED0]  rounded-[16px] w-full text-[16px] outline-none  border-[1px] focus:border-primary"
                    type={show ? "text" : "password"}
                    placeholder={"Enter Your Password"}
                    id="otp"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please enter a password",
                      },
                    })}
                  />
                  <div className=" absolute top-[27%] right-[10px]">
                    <button type="button" onClick={() => setShow((pre) => !pre)}>
                      {show ? (
                        <Icon
                          icon="ic:outline-visibility"
                          className="text-[25px] text-black"
                        />
                      ) : (
                        <Icon
                          icon="mdi:visibility-off-outline"
                          className="text-[25px] text-black"
                        />
                      )}
                    </button>
                  </div>
                </div>

                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <div className=" flex items-center justify-between py-4">
                <div>
                  <Checkbox className=" text-primary text-[14px] font-[400]">
                    Keep me logged in
                  </Checkbox>
                </div>
                <Link to="/" className=" text-primary font-[500] text-[14px]">
                  Forget password?
                </Link>
              </div>

              <CustomButton
                className={"w-full h-[50px] font-[700] text-[14px] rounded-[18px]"}
              >
                Sign In
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden relative -right md:h-[100vh] w-full h-full md:w-[50%] md:flex justify-end">
        <img
          className=" h-full w-full object-cover"
          src={"/images/login_image.svg"}
          alt="logo"
        />
        <div className=" absolute top-[50%] left-[50%] flex items-center flex-col justify-center translate-x-[-50%] translate-y-[-50%]">
          <img src="/images/roleLogo.svg" alt="" className="w-[267px] h-[51px]" />
          <p className=" font-[500] text-[18px] text-white/80 text-center pt-[15px] w-[500px]">
            Caring Connections, Empowering Lives: Nurturing Well-being Through
            Every Click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectRolePage;
