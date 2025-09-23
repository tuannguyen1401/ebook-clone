import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r shadow-lg">
      <div className="container mx-auto px-4">
        <header className="flex flex-col sm:flex-row items-center justify-between py-6">
          <div className="text-3xl font-extrabold text-black tracking-wide drop-shadow-lg mb-4 sm:mb-0">
            MyApp
          </div>
          <form className="w-full sm:w-auto flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-none shadow-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-lg transition"
                placeholder="Tìm kiếm..."
                style={{ background: "rgba(255,255,255,0.95)" }}
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
            </div>
          </form>
        </header>
      </div>
    </div>
  );
};

export default Header;
