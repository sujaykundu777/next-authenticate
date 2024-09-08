import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  console.log("home session = ", session?.user);

  return (
    <div>
      <p>hello</p>
    </div>
  );
}
