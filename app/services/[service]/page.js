"use client";

import Navbar from "@/component/Navbar";
import SideNavbar from "@/component/SideNavbar";
import { useParams } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  serviceButtonLabels,
  formFields,
  serviceTitle,
} from "@/app/utils/formFields";

export default function ServiceForm({ onServicesRequested }) {
  const { service } = useParams();
  const { data: session, status } = useSession();
  const router = useRouter();

  const fields = formFields[service] || [];
  const initialFormData = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (!service || !formFields[service]) {
      router.push("/services");
    }
  }, [status, router, service, formFields]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-blue-500">Loading...</p>
      </div>
    );
  }
  if (!session) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userID: session.user.id }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const updatedServices = await fetch("/api/services").then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch updated services");
        }
        return res.json();
      });

      onServicesRequested(updatedServices);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="flex flex-row">
        <div className="h-full w-1/6 bg-gray-800 text-white fixed left-0 top-24 z-49">
          <SideNavbar />
        </div>
        <div className="ml-[16.67%] mt-[10vh] bg-white w-5/6 p-4 flex flex-col md:flex-row justify-center items-start h-[calc(100vh-10vh)]">
          <div className="h-full w-full md:w-[55%] mr-4">
            <h1 className="text-2xl font-bold mb-4 ml-4">
              You're requesting a {serviceTitle[service]}
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 border w-full p-5 rounded-3xl"
            >
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
                      <option value="" disabled>
                        Select an option
                      </option>
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
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  {serviceButtonLabels[service]}
                </button>
              </div>
            </form>
          </div>
          <div className="h-full w-full md:w-[45%] border border-red-500 mt-4 md:mt-0"></div>
        </div>
      </div>
    </div>
  );
}