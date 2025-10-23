import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
};

export default function Documentation() {
  return (
    <>
      <p className="text-lg">
        This section is your go-to guide for learning how to use our apps and
        computing resources, with easy-to-follow tips and instructions to help
        you get things done.
      </p>
      <hr className="mt-8" />
      <br />
      <hr className="mb-8" />
    </>
  );
}
