

import  { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SendMsgIcon } from "../icons/SendMsgIcon";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

const schema = yup.object().shape({
  user_name: yup.string().required("Name is required"),
  user_email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const sendEmail = async () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append("access_key", "b186147a-6485-4a16-8eb6-8ea008c86fc9"); 
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again");
      }
    } catch  {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div id = "contact" className="flex flex-col items-center mt-10 pt-4">
        <h1 className = "text-2xl text-slate-100 font-bold pb-2 underline">Contact Me</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit(sendEmail)}
          className="space-y-4  mx-auto p-6 rounded-xl shadow-md  max-w-lg"
        >

          <input
            {...register("user_name")}
            name="user_name"
            placeholder="Your Name"
            className="w-full p-4 border rounded bg-slate-200"
          />
          {errors.user_name && (
            <p className="text-red-500 font-mono text-sm">
              {errors.user_name.message}
            </p>
          )}

          <input
            {...register("user_email")}
            name="user_email"
            placeholder="Your Email"
            type="email"
            className="w-full p-4 border rounded bg-slate-200"
          />
          {errors.user_email && (
            <p className="text-red-500 font-mono text-sm">
              {errors.user_email.message}
            </p>
          )}

          <textarea
            {...register("message")}
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border rounded bg-slate-200"
            rows={5}
          />
          {errors.message && (
            <p className="text-red-500 font-mono text-sm">
              {errors.message.message}
            </p>
          )}
        <div className = "flex justify-center items-center">
          <button
            type="submit"
            className="bg-white border-1 flex items-center  border-white px-6 py-2 rounded-2xl text-slate-900 font-medium  align-center  cursor-pointer hover:transition ease-out hover:scale-110 duration-300 hover:bg-transparent hover:text-indigo-100"
          >
            Send {<SendMsgIcon/>}
          </button>
        </div>
        </form>

        <ToastContainer position="top-right" autoClose={4000} />
      </div>
    </>
  );
};

export default ContactForm;
