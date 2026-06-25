import { getUserSession } from '@/lib/cors/session'
import React from 'react'
import { Bell, House, Magnifier, Bookmark, FileText, CreditCard, Gear } from "@gravity-ui/icons";
import { Building, Users, Briefcase, Plus, Box, User } from 'lucide-react';
import Link from 'next/link';
import MobileDrawer from './MobileDrawer'; // Import the client toggle component

const DashboardSidebar = async () => {
  const user = await getUserSession();
  const role = user?.role || 'user';

  const creatorNavLinks = [
    { icon: House, href: "/dashboard/creator", label: "Home" },
    { icon: Plus, href: "/dashboard/creator/add-prompt", label: "Add-prompt" },
    { icon: Box, href: "/dashboard/creator/my-prompts", label: "My-prompts" },
  ];

  const userNavLinks = [
    { icon: House, href: "/dashboard/user", label: "Dashboard" },
    { icon: Magnifier, href: "/dashboard/user/add-prompt", label: "Add-prompt" },
    { icon: Bookmark, href: "/dashboard/user/my-prompts", label: "My-prompt" },
    { icon: FileText, href: "/dashboard/user/my-reviews", label: "My-reviews" },
    // { icon: CreditCard, href: "/dashboard/user/save-prompts", label: "Save-prompts" },
    { icon: User, href: "/dashboard/user/profile", label: "Profile" },
  ];

  const adminNavLinks = [
    { icon: House, href: "/dashboard/admin", label: "Dashboard" },
    { icon: Users, href: "/dashboard/admin/users", label: "Users" },
    { icon: Building, href: "/dashboard/admin/prompts", label: "Prompts" },
    { icon: Briefcase, href: "/dashboard/admin/reported-prompts", label: "Reported-prompts" },
    { icon: CreditCard, href: "/dashboard/admin/payments", label: "Payments" },
    { icon: Gear, href: "/dashboard/admin/analytic", label: "Analytic" },
  ];

  const navLinksMap = {
    user: userNavLinks,
    creator: creatorNavLinks,
    admin: adminNavLinks
  };

  // Safe fallback if a role doesn't match perfectly
  const navItems = navLinksMap[role] || userNavLinks;

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          href={item.href}
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar Sidebar stays locked to the screen height while scrolling */}
      <aside className="hidden lg:flex lg:w-64 xl:w-72 shrink-0 border-r border-default p-4 h-screen sticky top-0 overflow-y-auto">
        {navContent}
      </aside>

      {/* Mobile Component containing the Drawer State */}
      <MobileDrawer navContent={navContent} />
    </>
  );
};

export default DashboardSidebar;