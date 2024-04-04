"use client";

import Lottie from "lottie-react";
import { Heading } from "../components/Heading";
import ContactData from "../contact.json";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="px-14">
      <Heading title="Contact" />
      <div className="rounded-lg mt-12 bg-blue-50 p-12">
        <div className="text-3xl font-light mb-6">
          {`I'm Always Open to Discuss`} <span className="font-semibold text-red-400">Frontend Development Work.</span> 
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-1">
            <Lottie animationData={ContactData} />
          </div>
          <div className="flex flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
