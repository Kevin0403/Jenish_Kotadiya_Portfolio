import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { Button, Input } from "../index";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import subscribeImage from "../../assets/subscribe-mail.png";


function Contact() {
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
          "Hello, I am Kevin Sangani. I am a full stack developer and I am looking forward to work with you! \n Thank you for contacting me. I will get back to you soon.",
      },
    };

    var dataMe = {
      service_id: "service_ypd7y08",
      template_id: "template_2ydybsr",
      user_id: "FND4KI_jo8WhB0GRp",
      template_params: {
        name: "Kevin Sangani",
        email: data.email,
        message: data.message,
      },
    };

    await axios
      .post("https://api.emailjs.com/api/v1.0/email/send", dataTo)

    await axios
      .post("https://api.emailjs.com/api/v1.0/email/send", dataMe)

    setSubmit(true);

    setLoading(false);
  }


  return (
    <div className="common-container contact-container">
      <div>
        <h2 className="heading">Contact me</h2>
        <p className="sub-heading">
          Want to get in touch with me? <br />
          You can reach me at the following places📭
        </p>
      </div>
      <div className="contact-form">
        <form  onSubmit={handleSubmit(submitForm)}>
          <div>
            
          <Input 
          type='text'
          placeholder='name'   
          error={errors.name?.message}
          {...register("name", {
            required: "Name is required",
          })}  
          />
          </div>
          <div>
          <Input
          placeholder="xyz@abc.fdg"
          type="text"
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
          </div>
          <div>
          <Input
          placeholder="Enter your message"
          type="text"
          textarea="true"
          rows = '6'
          error={errors.message?.message}
          {...register("message", {
            required: "Message is required",
          })}
        />
        </div>
        <div>
          <Button type="submit" 
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
        </div>

        </form>
        <div>
           <img src={subscribeImage} alt="cont"  width={200}/>
        </div>
      </div>
    </div>
  );
  }

  export default Contact;
