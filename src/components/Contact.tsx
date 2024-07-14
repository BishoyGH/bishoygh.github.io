import { useState, type FormEvent } from "react";
import { Schema } from "@/validation/ContactForm";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { value, error } = Schema.validate(
    { email, message },
    { abortEarly: false },
  );
  console.log({ value });
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("entry.2026335201", email);
    formData.append("entry.1341696661", message);
    const res = await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdrRpQCpybrWLc-nDmSE6DBiieDMi9gVF4cFBslJQceWK56YA/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      },
    );
    console.log({ res });
  }

  return (
    <form className="my-4" onSubmit={handleSubmit} noValidate>
      <label htmlFor="email">
        Your Email<sup className="text-purple-400">*</sup>
      </label>
      <input
        type="email"
        id="email"
        className="my-2 w-full rounded-md border border-neutral-400 bg-transparent p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">
        Your Message<sup className="text-purple-400">*</sup>
      </label>
      <textarea
        id="message"
        className="my-2 h-48 w-full resize-none rounded-md border border-neutral-400 bg-transparent p-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className="rounded-md border border-neutral-400 px-8 py-2"
        disabled={typeof error === "undefined" ? false : true}
      >
        Submit
      </button>
    </form>
  );
};

const Contact: React.FC = () => {
  return (
    <section className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <ContactForm />
    </section>
  );
};
export default Contact;
