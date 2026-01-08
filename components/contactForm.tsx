"use client";

import { useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-5 border rounded-xl shadow-sm space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Contact Us</h2>

      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          rows={4}
          placeholder="Write your message..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
