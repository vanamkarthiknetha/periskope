"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // Check if we have an access token (means user clicked the email verification link)
    router.push("/");

  }, [router]);

  return <p>{"Redirecting..."}</p>;
}
