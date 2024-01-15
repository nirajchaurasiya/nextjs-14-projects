import React from "react";

export default function CardLoader() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 md:py-6 py-24 mx-auto">
        <div className="mb-7 flex items-center gap-4 text-gray-300 text-lg font-extrabold">
          <p>All Todos</p>
          <div className="bg-white h-5 w-32 animate-pulse rounded-xl"></div>
        </div>
        <div className="flex flex-wrap -m-4">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <div key={e} className="pl-4 pr-4 pb-2 w-full sm:w-1/2 lg:w-1/3">
              <div className="h-full border border-gray-700 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h1 className="title-font bg-white h-5 animate-pulse rounded-xl text-lg font-medium text-white mb-3">
                    {/*  */}
                  </h1>
                  <p className="leading-relaxed mb-3 w-[75%] text-gray-400 animate-pulse bg-white h-5 rounded-xl">
                    {/*  */}
                  </p>
                  <p className="border-t border-t-gray-900 mb-3 w-[85%] bg-white h-5 animate-pulse rounded-xl">
                    {/*  */}
                  </p>
                  <p className="leading-relaxed text-gray-400 mb-3 w-[45%] bg-white h-5 animate-pulse rounded-xl">
                    {/*  */}
                  </p>
                  <p className="border-t border-t-gray-900 mb-3 w-[90%] bg-white h-5 animate-pulse rounded-xl"></p>

                  <div className="flex items-center justify-between flex-wrap ">
                    <button className="text-white bg-orange-700 p-1 rounded inline-flex items-center md:mb-2 lg:mb-0">
                      Delete
                    </button>
                    <button className="text-white pr-4 pl-4 text-center bg-blue-700 p-1 rounded inline-flex items-center md:mb-2 lg:mb-0">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
