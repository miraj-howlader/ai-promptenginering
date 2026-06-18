import DashboardSidebar from "@/components/DashboardSidebar"

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-scree mt-22">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6 ">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout