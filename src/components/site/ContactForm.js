"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p className="form-success" role="status">Thank you. Your enquiry has been prepared successfully.</p>;
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
        <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
        <label>City or country<input name="location" type="text" placeholder="Where are you writing from?" /></label>
        <label>Enquiry type<select name="type" defaultValue="general"><option value="general">General enquiry</option><option value="retail">Retail partnership</option><option value="distribution">Distribution enquiry</option><option value="media">Media or collaboration</option></select></label>
      </div>
      <label>Message<textarea name="message" rows="5" placeholder="Tell us a little about your enquiry" required /></label>
      <button className="button button--coral" type="submit">Send an enquiry <span aria-hidden="true">↗</span></button>
      <p className="form-note">This form is a local preview. We’ll connect an approved enquiry endpoint when backend integration is authorized.</p>
    </form>
  );
}
