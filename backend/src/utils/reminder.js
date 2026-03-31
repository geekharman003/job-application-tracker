import cron from "node-cron";
import { Application, Company, Reminder } from "../models/index.js";
import { sendReminderEmail } from "./resend.js";

// we will compare current date with reminder date
// if both are equal then only wwe send the reminder
// and update the isSent to true

export const checkReminders = async () => {
  const reminders = await Reminder.findAll({ raw: true });

  reminders.forEach(async (reminder) => {
    if (!reminder.isSent) {
      const currentDate = new Date().toDateString();
      const reminderDate = new Date(reminder.reminderDate).toDateString();

      if (currentDate === reminderDate) {
        try {
          const application = await Application.findByPk(
            reminder.ApplicationId,
            { include: Company, raw: true },
          );

          await sendReminderEmail(
            application.jobTitle,
            application.applicationDate,
            application.status,
            application.notes,
            application["Company.name"],
          );

          await Reminder.update(
            {
              isSent: true,
            },
            {
              where: {
                id: reminder.id,
              },
            },
          );
        } catch (error) {
          console.log("Error in sending reminder mail:", error);
        }
      }
    }
  });
};

// this scheduler runs everyday at 9:00 AM
cron.schedule(
  "0 9 * * *",
  async () => {
    await checkReminders();
  },
  {
    timezone: "Asia/Kolkata",
  },
);
