import { motion, AnimatePresence } from "motion/react";
import { useActionState, useState, useRef } from "react";
import { isPhone } from "@/utils/formValidation";
import emailjs from "@emailjs/browser";
import SectionHeader from "@/components/SectionHeader";
import SuccessfullySent from "@/components/SuccessfullySent";

const keyStrokes = [];

for (let i = 0; i < 20; i++) {
  if (i == 19) {
    keyStrokes.push(0);
  } else {
    keyStrokes.push(1);
  }
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [dimensions, setDimensions] = useState();
  const formRef = useRef();

  async function emailAction(prevFormData, formData) {
    // console.log(formRef.current.offsetWidth + " " + formRef.current.offsetHeight)
    // setDimensions([formRef.current.offsetWidth, formRef.current.offsetHeight]);
    setSent(true);
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

    try {
      const data = await sendEmail();
      console.log("I am in try");
    } catch (error) {
      console.log("I am in error");
    }

    return { errors: null };
  }

  function sendEmail() {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        console.log("operation rejected");
        resolve("nice");
      }, 1000)
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
      <div className="flex w-full h-[664px] justify-center items-center overflow-hidden">
        <AnimatePresence>
          {sent ? (
            <SuccessfullySent key={"success"} />
          ) : (
            <motion.form
              variants={{
                leave: {
                  transform: "rotate(90deg) scale(0.9)",
                  position: "absolute",
                  width: "10rem",
                  height:"10rem",
                  backgroundColor: "#c0c1c4",
                  borderRadius: "9999px",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#a1a5aa",
                  opacity: keyStrokes,
                  overflow: "hidden",
                  boxShadow: "0 0 10px 1px #f0f0f0",
                },
              }}
              key={"form"}
              action={formAction}
              ref={formRef}
              className="flex flex-col w-full md:w-auto items-center md:aspect-square justify-center shrink z-20"
              initial={{
                position: "absolute",
                backgroundColor: "#020618",
                borderRadius: "0px",
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "#020618",
                overflow: "hidden",
                transform: "scale(1)",
              }}
              exit="leave"
              transition={{ duration: 2 }}
            >
              {/* <motion.div
                initial={{ display: "none" }}
                variants={{ leave: { display: "block" } }}
                className="absolute bottom-10 w-full h-full bg-[#cccdd0] rounded-full opacity-50 z-25"
              /> */}
              <motion.div
                variants={{ leave: { opacity: 0 } }}
                transition={{ duration: 0.5 }}
                className="rounded-lg flex flex-col justify-center items-center w-full h-full p-3"
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
                  className={`block w-full h-10 md:w-130 bg-[#010412] rounded-md border-1 
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
                  whileHover={pending ? "entry" : "hover"}
                  whileTap="tap"
                  type="submit"
                  disabled={pending}
                  className={`relative overflow-hidden text-white
           w-40 h-15 rounded-md ${
             pending ? "cursor-not-allowed opacity-50" : "cursor-pointer"
           }`}
                >
                  <span>{pending ? "Sending..." : "Send Message"}</span>
                </motion.button>{" "}
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Contact;
