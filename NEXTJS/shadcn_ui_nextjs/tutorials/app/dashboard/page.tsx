import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarDateRangePicker from "@/components/components_dashboard/date-range-picker";
import MainNav from "@/components/components_dashboard/main-nav";
import Overview from "@/components/components_dashboard/overview";
import RecentSales from "@/components/components_dashboard/recent-sales";
import Search from "@/components/components_dashboard/search";
import TeamSwitcher from "@/components/components_dashboard/team-switcher";
import UserNav from "@/components/components_dashboard/user-nav";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};
export default function Dashboard() {
  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          alt="Dashboard"
          width={1200}
          height={866}
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div> */}
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div>
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
