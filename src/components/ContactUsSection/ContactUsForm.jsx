import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Form submitted!");
  };

  return (
    <div className="w-full lg:w-2/5 bg-cyan-400 bg-opacity-40 p-6 rounded-lg">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6 text-white">
        The contact form is currently inactive. Get a functional and working
        contact form with Ajax & PHP in a few minutes. Just copy and paste the
        files, add a little code and you're done.
        <Link to="#" className="font-semibold underline ml-1">
          Download Now
        </Link>
        .
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-white bg-transparent text-white placeholder-white"
          />
          {errors.name && (
            <span className="text-red-400 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-white bg-transparent text-white placeholder-white"
          />
          {errors.email && (
            <span className="text-red-400 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div>
          <input
            {...register("phone", { required: "Phone is required" })}
            type="tel"
            placeholder="Your Phone"
            className="p-3 rounded border border-white bg-transparent text-white placeholder-white"
          />
          {errors.phone && (
            <span className="text-red-400 text-sm">{errors.phone.message}</span>
          )}
        </div>
        <div>
          <input
            {...register("project")}
            type="text"
            placeholder="Your Project"
            className="p-3 rounded border border-white bg-transparent text-white placeholder-white"
          />
          {errors.project && (
            <span className="text-red-400 text-sm">{errors.project.message}</span>
          )}
        </div>
        <div className="col-span-1 md:col-span-2">
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded border border-white bg-transparent text-white placeholder-white"
          />
          {errors.subject && (
            <span className="text-red-400 text-sm">{errors.subject.message}</span>
          )}
        </div>
        <div className="col-span-1 md:col-span-2">
          <textarea
            {...register("message")}
            placeholder="Message"
            rows="5"
            className="w-full p-3 rounded border border-white bg-transparent text-white placeholder-white"
          />
          {errors.message && (
            <span className="text-red-400 text-sm">{errors.message.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-white text-cyan-600 font-semibold py-3 rounded hover:bg-gray-100 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
