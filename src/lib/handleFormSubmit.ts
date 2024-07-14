import { type FormEvent } from "react";
import { Schema } from "@/validation/ContactForm";

type Options = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  hasError: boolean;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
  setFeedback: React.Dispatch<React.SetStateAction<string>>;
};

async function handleFormSubmit(
  e: FormEvent,
  {
    email,
    message,
    setEmail,
    setMessage,
    setHasError,
    setFeedback,
    hasError,
  }: Options,
) {
  e.preventDefault();
  // Check If Errors Exists
  const errors = Schema.validate(
    { email, message },
    { abortEarly: false },
  ).error;
  // Update Errors and return
  if (typeof errors !== "undefined") {
    setHasError(true);
    setFeedback(
      errors.details
        .reduce((acc, current) => acc.concat(`${current.message}. `), "")
        .trimEnd(),
    );
    return;
  }
  // Send data if there is no errors
  if (!hasError) {
    try {
      // Formdata
      const formData = new FormData();
      formData.append("entry.2026335201", email);
      formData.append("entry.1341696661", message);
      // Send Request
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdrRpQCpybrWLc-nDmSE6DBiieDMi9gVF4cFBslJQceWK56YA/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        },
      );
      // reset
      setEmail("");
      setMessage("");
      setHasError(false);
      // Show Success Message
      setFeedback("You Message Has Been Sent");
    } catch (fetchError) {}
  }
}
export default handleFormSubmit;
