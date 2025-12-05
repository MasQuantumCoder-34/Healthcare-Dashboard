import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart3, LayoutDashboard, Users } from "lucide-react";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const navLinkClass =
  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-gray-100";

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <>
      {/* overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/30 sm:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed z-40 h-full w-64 border-r bg-white p-3 transition-transform sm:static sm:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="space-y-1">
          <NavLink to="/dashboard" className={navLinkClass} onClick={onClose}>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/patients" className={navLinkClass} onClick={onClose}>
            <Users size={18} />
            <span>Patients</span>
          </NavLink>
          <NavLink to="/analytics" className={navLinkClass} onClick={onClose}>
            <BarChart3 size={18} />
            <span>Analytics</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
