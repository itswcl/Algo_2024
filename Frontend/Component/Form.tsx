/**
 * Requirements

The form should contain the following elements:
Name field.
Email field.
Message field. Since the message can be long, a <textarea> will be more suitable.
Submit button
Contains the text "Send".
Clicking on the submit button submits the form.
The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
There is no need to do any client-side validation on the fields. Validation will be done on the server side.
Submission API

Upon submission, POST the form data to https://www.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.
 */

const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  try {
    if (form.action !== SUBMIT_URL) {
      alert("Incorrect form action value");
      return;
    }

    if (form.method.toLowerCase() !== "post") {
      alert("Incorrect form method value");
      return;
    }

    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const text = await response.text();
    alert(text);
  } catch (error) {
    alert("Error submitting form!");
  }
}

import "./styles.css";
import React from "react";

const API = "https://www.greatfrontend.com/api/questions/contact-form";

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      method="post"
      action={API}
    >
      <div>
        <label htmlFor="name">{"Name"}</label>
        <input id="name" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">{"Email"}</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message">name</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <div>
        <button>{"Send"}</button>
      </div>
    </form>
  );
}
