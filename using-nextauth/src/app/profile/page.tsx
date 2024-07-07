import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "../components/Logout";

const ProfilePage: React.FC = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  console.log("session >>>", session);

  return (
    <div>
      <h1>Hub </h1>
      <p> Welcome {session?.user.name} </p>
      <Image
        src={session?.user.image || "images/default-avatar.png"}
        alt={session?.user.name || "User"}
        width={100}
        height={100}
      />

      <Logout />
    </div>
  );
};

export default ProfilePage;
