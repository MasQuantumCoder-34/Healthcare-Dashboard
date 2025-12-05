import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuToggle={() => setOpen(true)} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 sm:grid-cols-[16rem_1fr]">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
