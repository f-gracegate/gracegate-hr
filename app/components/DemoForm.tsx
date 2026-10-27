"use client";

import { useState } from "react";

export default function DemoForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="demo">
      <form
        className="demo-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (email) setSent(true);
        }}
      >
        <input
          type="email"
          required
          placeholder="Enter your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button type="submit">Request a demo</button>
      </form>
      <p className="demo-note">
        {sent
          ? "Thanks! Our team will reach out shortly."
          : "Test your free demo without any payment form"}
      </p>
    </div>
  );
}
