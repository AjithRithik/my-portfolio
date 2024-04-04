import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const ContactForm = () => (
  <Formik
    initialValues={{ name: "", email: "", message: "" }}
    validationSchema={Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(255, "Name must be less than 255 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    })}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          resetForm();
        })
        .catch((error) => console.error(error))
        .finally(() => setSubmitting(false));
    }}
  >
    {({ isSubmitting }) => (
      <>
        <Form className="w-full">
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-1 text-xs"
              htmlFor="name"
            >
              Name
            </label>
            <Field
              className="w-full border border-gray-400 p-2 rounded-lg bg-white"
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage
              className="text-red-500 text-xs"
              name="name"
              component="div"
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-1 text-xs"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              className="w-full border border-gray-400 p-2 rounded-lg bg-white"
              type="email"
              name="email"
              id="email"
            />
            <ErrorMessage
              className="text-red-500 text-xs"
              name="email"
              component="div"
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-1 text-xs"
              htmlFor="message"
            >
              Message
            </label>
            <Field
              className="w-full border border-gray-400 p-2 rounded-lg bg-white"
              component="textarea"
              name="message"
              id="message"
            />
            <ErrorMessage
              className="text-red-500 text-xs"
              name="message"
              component="div"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="rounded-lg bg-blue-500 text-white px-12 py-2 w-auto"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      </>
    )}
  </Formik>
);
