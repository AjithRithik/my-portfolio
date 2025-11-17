"use client";

import Lottie from "lottie-react";
import { Heading } from "../components/Heading";
import ContactData from "../contact.json";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="px-6 md:px-14">
      <Heading title="Contact" />
      <div className="rounded-lg mt-6 md:mt-12 bg-blue-50 px-6 md:px-12 py-6 md:py-12">
        <div className="text-lg md:text-xl lg:text-3xl font-light pb-3 md:mb-6">
          {`I'm Always Open to Discuss`}{" "}
          <span className="font-semibold text-red-400">
            Product Development Work.
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
