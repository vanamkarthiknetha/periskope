"use server";
import { createClient } from "@/utils/supabase/server";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

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
  const exists = await checkUserExistsByEmail(supabase, email);
  if (exists) {
    return { success: false, message: "User already exists!" };
  }
  const response = await supabase.auth.signUp({ email, password });

  if (response.error) {
    return { success: false, message: response.error.message };
  }

  return { success: true, message: "A new confirmation email has been sent!" };
}

export async function getUser() {
  const supabase =  createClientComponentClient();

  const response = await supabase.auth.getSession();
  if (response.error) {
    return { success: false, message: response.error.message };
  }
  return { success: true, message: "Logged in successfully!" };
}

const checkUserExistsByEmail = async (supabase, email: string) => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data ? true : false;
};
