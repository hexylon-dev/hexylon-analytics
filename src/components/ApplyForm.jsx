import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import Navbar from './Navbar1'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component

const ApplyForm = () => {
  const location = useLocation();
  const job = location.state?.job;

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    current_address: "",
    resume_file: null,
    work_samples: "",
    linkedin_profile: "",
    availability: "",
    current_company: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      workspace_id: job.workspace_id,
      job_posting_id: job.job_posting_id,
      ...formData,
    };

    console.log("Form submitted with data:", submissionData);

    setFormData({
      full_name: "",
      email: "",
      phone_number: "",
      current_address: "",
      resume_file: null,
      work_samples: "",
      linkedin_profile: "",
      availability: "",
      current_company: "",
      experience: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Section */}
      <Navbar /> {/* Add Navbar Component */}

      {/* Header Section */}
      <header className="bg-gradient-to-br from-[#003366] to-[#FF8C00] p-8 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-center">Join Our Team</h1>
        <p className="text-xl text-center">Take the next step in your career with us</p>
      </header>

      {/* Apply Form Section */}
      <section className="lg:w-2/3 p-8 lg:p-12 bg-white overflow-y-auto mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Apply for {job.role}</h2>

          {/* Job Details */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{job.company_name}</h3>
            <p className="text-lg text-gray-600 mb-4">{job.location}</p>

            {job.role_description && (
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Role Description:</h4>
                <p className="text-gray-600">{job.role_description}</p>
              </div>
            )}

            <div>
              <h4 className="font-medium text-gray-800 mb-2">Qualifications:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {job.qualifications.split('\n').map((qual, index) => (
                  <li key={index}>{qual.trim()}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="current_company" className="block text-sm font-medium text-gray-700 mb-1">Current Company</label>
                <input
                  id="current_company"
                  name="current_company"
                  value={formData.current_company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="current_address" className="block text-sm font-medium text-gray-700 mb-1">Current Address</label>
              <textarea
                id="current_address"
                name="current_address"
                value={formData.current_address}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200 resize-none"
                rows={3}
              ></textarea>
            </div>

            <div>
              <label htmlFor="resume_file" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF)</label>
              <input
                id="resume_file"
                name="resume_file"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-[#FF6600]/10 file:text-[#FF6600] hover:file:bg-[#FF6600]/20"
              />
            </div>

            <div>
              <label htmlFor="work_samples" className="block text-sm font-medium text-gray-700 mb-1">Work Samples (Link)</label>
              <input
                id="work_samples"
                name="work_samples"
                type="url"
                value={formData.work_samples}
                onChange={handleChange}
                placeholder="https://example.com/sample"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200"
              />
            </div>

            <div>
              <label htmlFor="linkedin_profile" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
              <input
                id="linkedin_profile"
                name="linkedin_profile"
                type="url"
                value={formData.linkedin_profile}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                <input
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                <input
                  id="experience"
                  name="experience"
                  type="number"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition duration-200"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF6600] hover:bg-[#FF8C00] text-white py-3 px-6 rounded-md transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <Footer /> {/* Add Footer Component */}
    </div>
  );
};

export default ApplyForm;
