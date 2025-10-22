import SectionHeader from "@/components/SectionHeader";

function Contact() {
  function handleSubmit(event) {}

  return (
    <div className="mt-30 flex flex-col justify-center items-center reg-instrument-sans">
      <SectionHeader>CONTACT ME</SectionHeader>
      <h3 className="bold-instrument-sans text-3xl lg:text-4xl tracking-widest">
        WANT TO COLLABORATE? <br /> LET'S GET IN TOUCH!
      </h3>
      <p className="reg-instrument-sans sm:w-[600px] lg:w-[900px] mt-5 mb-15">
        {" "}
        Whether you’re looking to collaborate on a project, have a few
        questions, or just want to say hello, I’d love to hear from you! Feel
        free to fill out the form below and share a bit about what’s on your
        mind. I’ll get back to you as soon as I can.
      </p>
      <form className="flex flex-col w-full items-center justifyt-center shrink">
        <label htmlFor="name" className="mb-3">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          className="block w-130 h-10 bg-[#010412] rounded-md border-1 border-stone-500 text-center mb-3"
          required
        />{" "}
        <label htmlFor="company" className="mb-3">
          Company (optional)
        </label>
        <input
          id="company"
          type="text"
          name="company"
          autoComplete="organization"
          className="block w-130 h-10 bg-[#010412] rounded-md border-1 border-stone-500 text-center mb-3"
        />
        <label htmlFor="email" className="mb-3">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="organization"
          className="block w-130 h-10 bg-[#010412] rounded-md border-1 border-stone-500 text-center mb-3"
          required
        />
        <label htmlFor="phone" className="mb-3">
          Phone Number (optional)
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          autoComplete="organization"
          className="block w-130 h-10 bg-[#010412] rounded-md border-1 border-stone-500 text-center mb-3"
        />
        <label htmlFor="phone" className="mb-3">
          Message
        </label>
        <textarea
          id="phone"
          type="tel"
          name="phone"
          autoComplete="organization"
          className="block w-150 h-50 bg-[#010412] rounded-md border-1 border-stone-500 text-center mb-3"
        />
      </form>
    </div>
  );
}

export default Contact;
