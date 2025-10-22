import { motion } from "motion/react";
import { useActionState, useState, useRef } from "react";
import { isPhone } from "@/utils/formValidation";
import emailjs from "@emailjs/browser";
import SectionHeader from "@/components/SectionHeader";

function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef();

  async function emailAction(prevFormData, formData) {
    const email = formData.get("email");
    const name = formData.get("name");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const company = formData.get("company");

    const errors = [];

    if (phone && !isPhone(phone)) {
      errors.push("Please enter a valid phone number.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          email,
          name,
          message,
          phone,
          company,
        },
      };
    }

    await sendEmail();
    return { errors: null };
  }

  function sendEmail() {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        console.log("operation resolved");
        resolve("nice");
      }, 5000)
    );
    /* This commented line works for sending emails. Please test states
    that imitate sending emails to avoid using tokens.*/

    // emailjs
    //   .sendForm(
    //     import.meta.env.VITE_PUBLIC_SERVICE,
    //     import.meta.env.VITE_TEMPLATE_ID,
    //     formRef.current,
    //     { publicKey: import.meta.env.VITE_PUBLIC_KEY }
    //   )
    //   .then(
    //     () => {
    //       console.log("EMAIL SENT SUCESSFULLY");
    //     },
    //     (error) => {
    //       console.log("EMAIL FAILED... " + error.text);
    //     }
    //   );
  }

  const [formState, formAction, pending] = useActionState(emailAction, {
    errors: null,
  });

  return (
    <div className="mt-30 w-full flex flex-col justify-center items-center reg-instrument-sans">
      <SectionHeader>CONTACT ME</SectionHeader>
      <h3 className="bold-instrument-sans text-3xl lg:text-4xl tracking-widest">
        WANT TO COLLABORATE? <br /> LET'S GET IN TOUCH!
      </h3>
      <p className="reg-instrument-sans sm:w-[600px] lg:w-[900px] mt-5 mb-10">
        {" "}
        Whether you’re looking to collaborate on a project, have a few
        questions, or just want to say hello, I’d love to hear from you! Feel
        free to fill out the form below and share a bit about what’s on your
        mind. I’ll get back to you as soon as I can.
      </p>
      <form
        action={formAction}
        ref={formRef}
        className="flex flex-col w-full items-center justifyt-center shrink"
      >
        <label htmlFor="name" className="mb-3">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          className={`block w-full h-10 md:w-130 bg-[#010412] rounded-md border-1 
          border-white/50 focus:border-[#3698d5]/50 
          focus:shadow-sm focus:shadow-[#3698d5] 
          text-center mb-3 focus:outline-none`}
          required
          defaultValue={formState.enteredValues?.name}
        />{" "}
        <label htmlFor="company" className="mb-3">
          Company (optional)
        </label>
        <input
          id="company"
          type="text"
          name="company"
          autoComplete="organization"
          className={`block w-full h-10 md:w-130 h-10 bg-[#010412] rounded-md border-1 
          border-white/50 focus:border-[#3698d5]/50 
          focus:shadow-sm focus:shadow-[#3698d5] 
          text-center mb-3 focus:outline-none`}
          defaultValue={formState.enteredValues?.company}
        />
        <label htmlFor="email" className="mb-3">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="organization"
          className={`block w-full h-10 md:w-130 bg-[#010412] rounded-md border-1 
          border-white/50 focus:border-[#3698d5]/50 
          focus:shadow-sm focus:shadow-[#3698d5] 
          text-center mb-3 focus:outline-none`}
          required
          defaultValue={formState.enteredValues?.email}
        />
        <label htmlFor="phone" className="mb-3">
          Phone Number (optional)
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          className={`block w-full h-10 md:w-130 bg-[#010412] rounded-md border-1 
          border-white/50 focus:border-[#3698d5]/50 
          focus:shadow-sm focus:shadow-[#3698d5] 
          text-center mb-3 focus:outline-none`}
          defaultValue={formState.enteredValues?.phone}
        />
        <label htmlFor="phone" className="mb-3">
          Message
        </label>
        <textarea
          id="message"
          type="text"
          name="message"
          required
          className={`block w-full md:w-150 h-50 p-2 bg-[#010412] rounded-md border-1 
          border-white/50 focus:border-[#3698d5]/50 
          focus:shadow-sm focus:shadow-[#3698d5] 
          text-left mb-3 focus:outline-none`}
          defaultValue={formState.enteredValues?.message}
        />
        {pending ? (
          <button
            className={`relative overflow-hidden text-black
           w-40 h-10 rounded-md bg-[#FFFFFF] opacity-50 cursor-not-allowed`}
            style={{
              boxShadow: "0px 0px 15px #FFFFFF",
              border: "1px solid #FFFFFF",
            }}
          >
            Sending...
          </button>
        ) : (
          <motion.button
            variants={{
              entry: {
                backgroundColor: "#010412",
                boxShadow: "0px 0px 3px #3698D5",
                border: "1px solid rgba(54, 152, 213, 0.7)",
                color: "#FFFFFF",
                scale: 1,
              },
              hover: {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0px 0px 15px #FFFFFF",
                border: "1px solid #FFFFFF",
                color: "#000000",
                scale: 1,
              },
              tap: {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0px 0px 15px #FFFFFF",
                border: "1px solid #FFFFFF",
                color: "#000000",
                transition: { type: "spring", duration: 0.1 },
              },
              sending: {
                opacity: 0.5,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0px 0px 15px #FFFFFF",
                border: "1px solid #FFFFFF",
                color: "#000000",
                scale: 1,
              },
            }}
            initial="entry"
            whileHover="hover"
            whileTap="tap"
            type="submit"
            disabled={pending}
            className={`relative overflow-hidden text-white
           w-40 h-10 rounded-md text-black cursor-pointer`}
          >
            <span>Send Message</span>
          </motion.button>
        )}
      </form>
    </div>
  );
}

export default Contact;
