"use client";

import { useState } from "react";
import Image from "next/image";
import pfp from "../assets/profilePic.png";
import { useRouter } from 'next/router';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => { 
    router.push(path);
  };

  return (
    <div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(25%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(25%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            opacity: 0.5, // Adjust opacity here
          }}
          className="relative left-[calc 3rem)] aspect-[1200/850] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] sm:left-[calc(25%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-12 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              James Wright
            </h1>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
                paddingTop: "25px",
                paddingLeft: "50px",
              }}
            >
              <Image src={pfp} alt="James Wright" width={200} height={200} />
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hey I am James, also go by Jamie and I am a software engineer. I
              am passionate about learning new technologies and building cool
              stuff. I am currently working on a project that I am excited to
              share with you all. Stay tuned, Hope you like Golf. That is the
              only clue I am giving!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                onClick={() => handleNavigation('/resume')}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Resume
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                About Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
