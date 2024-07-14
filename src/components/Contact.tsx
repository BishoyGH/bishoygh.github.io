import { useState } from "react";

import { cn } from "@/lib/utils";
import handleFormSubmit from "@/lib/handleFormSubmit";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <form
      className="mx-auto my-4 w-full lg:w-3/4"
      onSubmit={(e) =>
        handleFormSubmit(e, {
          email,
          hasError,
          message,
          setEmail,
          setMessage,
          setFeedback,
          setHasError,
        })
      }
      noValidate
    >
      <label htmlFor="email">
        Your Email<sup className="text-purple-400">*</sup>
      </label>
      <input
        type="email"
        id="email"
        className="my-2 w-full rounded-md border border-neutral-400 bg-transparent px-4 py-2 focus:border-purple-600 focus:outline-none focus:ring-0"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">
        Your Message<sup className="text-purple-400">*</sup>
      </label>
      <textarea
        id="message"
        className="my-2 h-48 w-full resize-none rounded-md border border-neutral-400 bg-transparent px-4 py-2 focus:border-purple-600 focus:outline-none focus:ring-0"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className={cn(
          "w-full rounded-md bg-purple-800 px-8 py-2 disabled:cursor-not-allowed disabled:border disabled:border-neutral-500 disabled:bg-transparent disabled:text-neutral-500",
        )}
        disabled={email === "" || message === ""}
      >
        Submit
      </button>
      <p
        className={cn(
          "mt-4 p-4 text-center capitalize",
          hasError ? "bg-rose-500" : "bg-emerald-600",
          feedback === "" && "hidden",
        )}
      >
        {feedback}
      </p>
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
