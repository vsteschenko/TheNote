// Home page
import { Button } from "@/components/ui/button";
import Tiptap from "@/components/ui/tiptap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-xl bg-gradient-to-br min-h-screen from-rose-200 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="font-semibold">
          Welcome to <span className="text-teal-500 uppercase font-medium">the note</span> taking app.
        </h3>
        {/* <div className="bg-slate-100 p-2 rounded-lg ring-1 ring-slate-300">
          <Tiptap />
        </div> */}
        <div className="h-full">
          {/* <h2 className="font-semibold"><span className="text-teal-500">AI</span> enhanced note-taking app.</h2> */}
          {/* <h2 className="font-light text-xl italic">
            <div className="h-8 w-80">
              <TyxpewriterTitle />
            </div>
          </h2> */}
          {/* <NotePicker /> */}
          <div className="flex mt-4 justify-start">
            <Link href="/sign-in">
              <Button className="bg-teal-500 px-4">Start typing <ArrowRight className="ml-1 h-5 w-5" strokeWidth={2} /></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
