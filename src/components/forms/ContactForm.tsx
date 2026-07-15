"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  if (sent) {
    return (
      <div className="contact-success visible" id="contactSuccess">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l2 2 4-4" />
        </svg>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" placeholder="John" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input type="text" id="lastName" placeholder="Doe" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contactEmail">Email *</label>
          <input
            type="email"
            id="contactEmail"
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPhone">Phone</label>
          <input type="tel" id="contactPhone" placeholder="+91 98765 43210" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject *</label>
        <select id="subject" required defaultValue="">
          <option value="" disabled>
            Select a topic
          </option>
          <option value="order">Order Inquiry</option>
          <option value="product">Product Question</option>
          <option value="shipping">Shipping & Delivery</option>
          <option value="returns">Returns & Refunds</option>
          <option value="bulk">Bulk / Wholesale Orders</option>
          <option value="feedback">Feedback & Suggestions</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          placeholder="Tell us how we can help you..."
          required
        />
      </div>
      <button type="submit" className="contact-submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
