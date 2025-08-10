"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-24 px-4">
        <div className="max-w-4xl w-full bg-[#011627] border border-[#1E2D3D] rounded-lg overflow-hidden">
          <div className="border-b border-[#1E2D3D] p-4 flex items-center">
            <div className="text-[#607B96] font-mono text-sm">404-page</div>
          </div>

          <div className="p-6 md:p-8 font-mono">
            <div className="text-center mb-8">
              <h1 className="text-6xl md:text-9xl font-bold mb-4 text-[#E99287]">
                404
              </h1>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                {/* Code block starts */}
                <div className="text-sm">
                  <span className="text-[#C98BDF]">const</span>{" "}
                  <span className="text-[#43D9AD]">page</span> ={" "}
                  <span className="text-[#E99287]">null</span>;{" "}
                  <span className="text-[#607B96]">
                    {/* simulating findPage(&rsquo; you-were-looking-for &rsquo;) */}
                  </span>
                </div>

                <div className="text-sm">
                  <span className="text-[#C98BDF]">if</span> (
                  <span className="text-[#43D9AD]">!page</span>) &#123;
                </div>

                <div className="text-sm pl-4">
                  <span className="text-[#E99287]">console.log</span>(
                  <span className="text-[#FEA55F]">
                    &quot;Oops! Looks like you took a wrong turn in the codebase.&quot;
                  </span>
                  );
                </div>

                <div className="text-sm pl-4">
                  <span className="text-[#E99287]">console.log</span>(
                  <span className="text-[#FEA55F]">
                    &quot;But hey, since you&apos;re here...&quot;
                  </span>
                  );
                </div>

                <div className="text-sm pl-4">
                  <span className="text-[#E99287]">console.log</span>(
                  <span className="text-[#FEA55F]">
                    &quot;← Go back to the homepage and explore more cool stuff!&quot;
                  </span>
                  );
                </div>

                <div className="text-sm pl-4">
                  <span className="text-[#E99287]">throw</span>{" "}
                  <span className="text-[#C98BDF]">new</span>{" "}
                  <span className="text-[#E99287]">Error</span>(
                  <span className="text-[#FEA55F]">
                    &quot;404: PageNotFoundError 😢&quot;
                  </span>
                  );
                </div>

                <div className="text-sm">&#125;</div>

                <div className="text-sm mt-4">
                  <span className="text-[#607B96]">/* Suggestions:</span>
                </div>

                <div className="text-sm pl-4">
                  <span className="text-[#607B96]">
                    * → Check the URL for typos
                  </span>
                </div>

                <div className="text-sm pl-4">
                  <span className="text-[#607B96]">
                    * → Use the site navigation
                  </span>
                </div>

                <div className="text-sm pl-4">
                  <span className="text-[#607B96]">
                    * → Or hit Ctrl+Z in real life 😉
                  </span>
                </div>

                <div className="text-sm">
                  <span className="text-[#607B96]">*/</span>
                </div>

                <div className="text-sm mt-4">
                  <span className="text-[#E99287]">console.log</span>(
                  <span className="text-[#FEA55F]">
                    &apos;Redirecting to home...&apos;
                  </span>
                  );
                </div>
                {/* Code block ends */}
              </div>

              <div className="flex justify-center mt-8">
                <Link
                  href="/"
                  className="px-6 py-3 bg-[#1C2B3A] hover:bg-[#263B50] text-white rounded-md transition-colors flex items-center gap-2"
                >
                  <span>Go back home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
