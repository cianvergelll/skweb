"use client";

import Navbar from "@/component/Navbar";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") return <p className="p-6 text-blue-500">Loading...</p>;
  if (!session) return null;

  return (
    <div className="h-screen w-screen">

      <Navbar />

      <div className="flex h-9/10">
        <div className="bg-white w-full p-4"></div>
      </div>
    </div>



  );
}
