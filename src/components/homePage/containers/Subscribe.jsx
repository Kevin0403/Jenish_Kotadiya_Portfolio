import React, { useEffect } from "react";
import "./Subscribe.css";
import { Input } from "../../index";
import subscribeImage from "../../../assets/subscribe-mail.png";
import { Button } from "../../index";
import { Padding } from "@mui/icons-material";
import { set, useForm } from "react-hook-form";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";

function Subscribe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitForm = async (data) => {
    setLoading(true);

    var dataTo = {
      service_id: "service_ypd7y08",
      template_id: "template_son4xpn",
      user_id: "FND4KI_jo8WhB0GRp",
      template_params: {
        to_email: data.email,
        from_name: "Kevin Sangani",
        message:
          "Hello, I am Kevin Sangani. I am a full stack developer and I am looking forward to work with you!",
      },
    };

    var dataMe = {
      service_id: "service_ypd7y08",
      template_id: "template_son4xpn",
      user_id: "FND4KI_jo8WhB0GRp",
      template_params: {
      to_email: "kevinsangani99247@gmail.com",
        from_name: "Kevin Sangani",
        message: `${data.email} has subscribed to your newsletter!`,
      },
    };

    await axios
      .post("https://api.emailjs.com/api/v1.0/email/send", dataTo)

    await axios
      .post("https://api.emailjs.com/api/v1.0/email/send", dataMe)

    setSubmit(true);

    setLoading(false);
  };

  return (
    <div className="subscribe-root">
      <p>Subscribe to get my notes, thoughts and many more via email 📬</p>
      <form className="input-root" onSubmit={handleSubmit(submitForm)}>
        <Input
          divClass={{ width: "80%" }}
          placeholder="Enter your email"
          type="text"
          border="true"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />
        <Button
          divClass={{ width: "70%", padding: "1rem 0rem" }}
          variant="contained"
          backgroundColor={submit && "#59CBC0"}
          disabled={submit}
        >
          {loading ? (
            <CircularProgress size={15} color="inherit" />
          ) : submit ? (
            "Yehh, check your inbox!"
          ) : (
            "Subscribe !"
          )}
        </Button>
      </form>
      <div className="subscribe-img">
        <img src={subscribeImage} alt="subscribe" width={100} />
      </div>
    </div>
  );
}

export default Subscribe;
