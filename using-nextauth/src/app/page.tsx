import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Authenticate using NextAuth</h1>
      {/* <Image
        src="/nextauth.png"
        alt="NextAuth Logo"
        width={200}
        height={200}
      /> */}
      <p className="text-center text-lg">
        This is a simple example of how to authenticate using NextAuth
      </p>
    </main>
  );
}
