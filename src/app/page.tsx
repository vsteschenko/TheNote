import { Button } from "@/components/ui/button";
import { Type } from "lucide-react";
import Image from "next/image";
import TypewriterTitle from "@/components/TypewriterTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="text-xl bg-gradient-to-br  min-h-screen from-rose-200 to to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="font-semibold " >  Welcome to <span className="text-teal-500  uppercase font-medium " >the_Note.</span></h3>
        <div className="h-full">
          <h2 className="font-semibold  "><span className="text-teal-500">AI</span> enhanced note-taking app.</h2>
          <h2 className="font-light text-xl italic">
            <div className="h-8 w-80">
              <TypewriterTitle />
            </div>
          </h2>
          <div className="flex mt-4 justify-start">
            <Link href="/sign-in">
              <Button className="bg-teal-500  px-4  "> Start typing <ArrowRight className="ml-1 h-5 w-5" strokeWidth={2} /></Button></Link>
          </div>


        </div>
      </div>
    </div>
  );
}
