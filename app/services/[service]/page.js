"use client";


import Navbar from "@/component/Navbar";
import SideNavbar from "@/component/SideNavbar";
import { useParams } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import formFields from "@/app/utils/formFields";

export default function ServiceForm() {
  const { service } = useParams();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const serviceButtonLabels = {
        certificates: "Request Certificates",
        print_materials: "Send Print Materials",
        partnership: "Request Partnership",
        vehicle_reservation: "Request Vehicle",
        gym_reservation: "Request Gym",
  }

  useEffect(() => {
      if (status === "unauthenticated") {
          router.push("/login");
      }
  }, [status, router]);

  if (status === "loading") return <p className="p-6 text-blue-500">Loading...</p>;
  if (!session) return null;

  // Get the fields for the current service
  const fields = formFields[service] || [];

  // Handle input change
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  };

  // Handle form submission
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data:", formData);
      // Add your form submission logic here
  };

  return (
      <div className="h-screen w-full">
          <Navbar />
          <div className="flex flex-row">
              <div className="h-full w-1/6 bg-gray-800 text-white fixed left-0 top-24 z-49"> 
                  <SideNavbar />
              </div>
              <div className="ml-[16.67%] mt-[10vh] bg-white w-5/6 p-4 flex flex-col justify-center items-start">
                  <h1 className="text-2xl font-bold mb-4">You're requesting: {service}</h1>
                  <form onSubmit={handleSubmit} className="space-y-4 border w-1/2 px-10 py-5 rounded-3xl">
                      {fields.map((field, index) => (
                          <div key={index} className="flex flex-col">
                              <label className="font-medium">{field.label}</label>
                              {field.type === "select" ? (
                                  <select
                                      name={field.name}
                                      value={formData[field.name] || ""}
                                      onChange={handleInputChange}
                                      className="p-2 border border-gray-300 rounded"
                                      required
                                  >
                                      <option value="" disabled>Select an option</option>
                                      {field.options.map((option, i) => (
                                          <option key={i} value={option}>
                                              {option}
                                          </option>
                                      ))}
                                  </select>
                              ) : (
                                  <input
                                      type={field.type}
                                      name={field.name}
                                      value={formData[field.name] || ""}
                                      placeholder={field.label}
                                      onChange={handleInputChange}
                                      className="p-2 border border-gray-300 rounded"
                                      required
                                  />
                              )}
                          </div>
                      ))}
                      <button type="submit" className="bg-blue-500 text-white p-2 rounded float-right">
                            {serviceButtonLabels[service]}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}
