import { Application, Company } from "../models/index.js";

export const getSummary = async (req, res) => {
  const { id: userId } = req.user;

  try {
    const applications = await Application.findAll({
      where: { UserId: userId },
      attributes: { exclude: ["updatedAt"] },
      order: [["createdAt", "DESC"]],
      raw: true,
    });

    const totalApplications = applications.length;
    let saved = 0;
    let applied = 0;
    let interview = 0;
    let offer = 0;
    let rejected = 0;

    applications.forEach((application) => {
      switch (application.status) {
        case "saved":
          saved++;
          break;
        case "applied":
          applied++;
          break;
        case "interview":
          interview++;
          break;
        case "offer":
          offer++;
          break;
        default:
          rejected++;
          break;
      }
    });

    // response rate = Math.floor(no. of responses/total applications) * 100
    const responseRate = Math.floor(
      ((interview + offer + rejected) / totalApplications) * 100,
    );

    // offer rate = Math.floor(offers / interviews) * 100
    const offerRate = Math.floor((offer / interview) * 100);

    const activePipeLine = saved + applied + interview;

    const summary = {
      totalApplications,
      saved,
      applied,
      interview,
      offer,
      rejected,
      responseRate,
      offerRate,
      activePipeLine,
    };

    const recentApplications = [];

    for (let i = 0; i < Math.min(applications.length, 5); i++) {
      recentApplications.push(applications[i]);
    }

    // attaching company details in application
    for (const application of recentApplications) {
      const companyDetails = await Company.findByPk(application.CompanyId, {
        attributes: ["name"],
      });

      application.company = companyDetails.name
    }

    res.status(200).json({ summary, applications: recentApplications });
  } catch (error) {
    console.log("Error in getSummary:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
