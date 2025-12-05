import React from "react";
import { Menu } from "lucide-react";

type NavbarProps = {
  onMenuToggle?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-xl border p-2 sm:hidden"
            onClick={onMenuToggle}
            aria-label="Open sidebar"
          >
            <Menu size={18} />
          </button>
          <span className="text-xl font-semibold">🏥 HealthCare Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-600">Mohammed Masood</div>
          <div className="h-8 w-8 rounded-full bg-gray-200" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
