import { resendClient, sender } from "../config/resend.js";
// import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendReminderEmail = async (
  jobTitle,
  applicationDate,
  applicationStatus,
  applicationNotes,
  companyName
) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: "anonymousanonymous8761@gmail.com",
    subject: "Reminder for your application",
    html: `<div>
      <p>Your application company name is:${companyName}</p>
      <p>Your application job title is:${jobTitle}</p>
      <p>Your application date is:${applicationDate}</p>
      <p>Your application status is:${applicationStatus}</p>
      <p>Your application notes are:${applicationNotes}</p>
    </div>`,
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("Reminder email sent successfully", data);
};
