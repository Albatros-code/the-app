import { AuthHome } from "./auth";
import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-black">The App</h1>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-text-secondary font-normal">
            The playground built by <Link className="hover:text-primary" target="_blank" href={"https://github.com/Albatros-code"}>albatros-code</Link>.
            Click around and see how good it is.
          </p>
          <div className="self-center">
            <AuthHome />
          </div>
        </div>
      </div>
    </main>
  );
}
