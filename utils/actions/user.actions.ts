"use server";
import { createClient } from "@/utils/supabase/server";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();
  const response = await supabase.auth.signInWithPassword({ email, password });
  if (response.error) {
    return { success: false, message: response.error.message };
  }
  return { success: true, message: "Logged in successfully!" };
}

export async function signup({
  firstName,
  lastName,
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();
  const response = await supabase.auth.signUp({ email, password });

  if (response.error) {
    return { success: false, message: response.error.message };
  }

  return { success: true, message: "Signed Up!" };
}

const checkUserExistsByEmail = async (supabase, email: string) => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data ? true : false;
};
