"use server";

import { signIn, signOut } from "@/auth";
import type { Id } from "react-toastify";

export type Status = {
  type: "default" | "loading" | "success" | "error";
  toastId: Id /* Added a toastId field of type Id */;
};

export async function doSocialLogin(previousState: Status, formData: any) {
  await new Promise((res) => setTimeout(res, 1000));
  const action = formData.get("action");

  const resp = await signIn(action, { redirectTo: "/profile" });
  if (resp) {
    // return { type: 'success' } as Status
    previousState.type = "success";
  } else {
    // return { type: 'error' } as Status
    previousState.type = "error";
  }
  return previousState;
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
