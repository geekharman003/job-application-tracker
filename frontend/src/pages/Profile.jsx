import { Save, FileText, User } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";

function Profile() {
  const [isUpdatingDetails, setIsUpdatingDetails] = useState(false);
  const [isUpdatingProfilePic, setIsUpdatingProfilePic] = useState(false);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [isExportingData, setIsExportingData] = useState(false);
  const [isDeletingProfile, setIsDeletingProfile] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axiosClient.get("/auth/login");
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-4">
        <div className="max-w-4xl m-auto">
          <h2 className="text-2xl font-bold">Profile</h2>
          <p className="text-slate-500">
            Manage your personal information and preferences
          </p>
          {/* profile section */}
          <div className="bg-white rounded-xl">
            <div className="flex gap-2 rounded-lg px-3 py-4 mt-5">
              <div className="flex justify-center items-center rounded-full text-white bg-blue-700 w-[80px] h-[80px]">
                HR
              </div>
              <div>
                <p className="font-bold">Harmanpreet Singh</p>
                <p className="text-sm text-slate-500">harman@gmail.com</p>
                <input type="file" className="mt-2" />
              </div>
            </div>
            <div className="flex justify-between gap-2 p-4">
              <div className="w-6/12">
                <label htmlFor="name" className="font-medium">
                  Full Name
                </label>
                <br />
                <input
                  id="name"
                  className="border-2 rounded-lg px-2 py-1 w-full"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="w-6/12">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <br />
                <input
                  id="email"
                  className="border-2 rounded-lg px-2 py-1 w-full"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="p-4">
              <label htmlFor="bio" className="font-medium">
                Bio
              </label>
              <br />
              <textarea
                rows={5}
                className="w-full border-2 rounded-lg px-2"
                name="bio"
                id="bio"
              ></textarea>
            </div>
            <div className="flex justify-between gap-2 p-4">
              <div className="w-6/12">
                <label htmlFor="linkedIn" className="font-medium">
                  Linkedin
                </label>
                <br />
                <input
                  id="linkedIn"
                  className="border-2 rounded-lg px-2 py-1 w-full"
                  name="linkedIn"
                  type="url"
                />
              </div>
              <div className="w-6/12">
                <label htmlFor="github" className="font-medium">
                  Github
                </label>
                <br />
                <input
                  id="github"
                  className="border-2 rounded-lg px-2 py-1 w-full"
                  name="github"
                  type="url"
                />
              </div>
            </div>
            <div className="flex justify-end p-4">
              <button className="flex gap-1 bg-blue-700 text-white p-2 rounded-xl">
                <span>
                  <Save size={20} />
                </span>{" "}
                Save Changes
              </button>
            </div>
          </div>
          {/* resume section */}
          <div className="mt-5 bg-white rounded-xl p-4">
            <div className="flex justify-between items-end gap-1">
              <div>
                <div className="flex items-center gap-1">
                  <span>
                    <FileText size={15} />
                  </span>
                  <span className="text-sm font-medium">Resume Versions</span>
                </div>
                <p className="text-xs text-slate-500">
                  Track which resume version you used for each application
                </p>
              </div>
              <div>
                <input type="file" name="resume" id="resume" />
              </div>
            </div>
            <div className="flex justify-between border-2 p-2 mt-3 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="w-fit bg-slate-200 p-2 rounded-xl">
                  <FileText size={20} />
                </span>
                <span className="text-sm">Resume v3 - Engineering</span>
              </div>
              <div className="flex items-center">
                <button className="hover:bg-slate-200 rounded-xl py-1 px-3">
                  Download
                </button>
              </div>
            </div>
          </div>
          {/* account section */}
          <div className="mt-5 bg-white rounded-xl p-4">
            <div className="flex items-center gap-2">
              <span>
                <User size={15} />
              </span>
              <span className="text-sm font-medium">Account Settings</span>
            </div>
            <div className="flex items-center justify-between mt-3 py-2 border-b-2">
              <div>
                <p className="font-medium">Export Data</p>
                <p className="text-sm text-slate-500">
                  Download all your application data as CSV
                </p>
              </div>
              <div>
                <button className="text-sm border border-slate-300 rounded-xl p-2 hover:bg-slate-100">
                  Export CSV
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="mt-2">
                <p className="text-base text-red-400 font-semibold">
                  Delete Account
                </p>
                <p className="text-sm text-slate-500">
                  Permanently delete all your data
                </p>
              </div>
              <div>
                <button className="rounded-xl py-2 px-3 bg-red-500 text-white text-sm hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
