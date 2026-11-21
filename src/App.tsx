import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Calculator, Layers, FileText, Wallet, UserRound, History, Settings } from "lucide-react"

function App() {
  const [activePage, setActivePage] = useState("Dashboard")

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <header className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-700">
          Payroll Payment System
        </h1>
       <Button
  onClick={() => window.confirm("Are you sure you want to logout?")}
>
  Logout
</Button>
      </header>

     <div className="mt-8 flex flex-col gap-6 border-t border-slate-200 pt-6 md:flex-row">
<aside className="w-full min-h-[500px] rounded-2xl bg-gradient-to-b from-slate-950 to-blue-950 p-5 text-white shadow-xl md:w-64">
    <div className="mb-6 flex items-center gap-3 border-b border-slate-700 pb-5">
 <div className="rounded-xl bg-blue-600 p-3 shadow-lg shadow-blue-500/30">
  <Wallet size={26} />
</div>

  <div>
    <h2 className="text-sm font-bold">PAYROLL SYSTEM</h2>
    <p className="text-xs text-slate-400">Management Panel</p>
  </div>
</div>

<h2 className="mb-3 text-xs font-bold tracking-widest text-slate-400">
  MENU
</h2>
<div className="space-y-2">


<p
  onClick={() => setActivePage("Dashboard")}
 className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 ${
    activePage === "Dashboard"
      ? "bg-slate-700 text-blue-300"
      : "hover:bg-slate-700 hover:text-blue-300"
  }`}
>
  <LayoutDashboard size={18} />
  Dashboard
</p>

<p
  onClick={() => setActivePage("Employees")}
  className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200${
    activePage === "Employees"
      ? "bg-slate-700 text-blue-300"
      : "hover:bg-slate-700 hover:text-blue-300"
  }`}
>
  <Users size={18} />
  Employees
</p>

<p
  onClick={() => setActivePage("Salary Rules")}
  className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200${
    activePage === "Salary Rules"
      ? "bg-slate-700 text-blue-300"
      : "hover:bg-slate-700 hover:text-blue-300"
  }`}
>
  <Calculator size={18} />
  Salary Rules
</p>

<p
  onClick={() => setActivePage("Salary Structures")}
  className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200${
    activePage === "Salary Structures"
      ? "bg-slate-700 text-blue-300"
      : "hover:bg-slate-700 hover:text-blue-300"
  }`}
>
  <Layers size={18} />
  Salary Structures
</p>

<p
  onClick={() => setActivePage("Payslips")}
  className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200${
    activePage === "Payslips"
      ? "bg-slate-700 text-blue-300"
      : "hover:bg-slate-700 hover:text-blue-300"
  }`}
>
  <FileText size={18} />
  Payslips
</p>

<p
  onClick={() => setActivePage("Payments")}
  className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200${
    activePage === "Payments"
      ? "bg-slate-700 text-blue-300"
      : "hover:bg-slate-700 hover:text-blue-300"
  }`}
>
  <Wallet size={18} />
  Payments
</p>

<p
  onClick={() => setActivePage("Users")}
  className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200${
    activePage === "Users"
      ? "bg-slate-700 text-blue-300"
      : "hover:bg-slate-700 hover:text-blue-300"
  }`}
>
  <UserRound size={18} />
  Users
</p>

<p
  onClick={() => setActivePage("Profile")}
  className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200${
    activePage === "Profile"
      ? "bg-slate-700 text-blue-300"
      : "hover:bg-slate-700 hover:text-blue-300"
  }`}
>
  <UserRound size={18} />
  Profile
</p>
<p
  onClick={() => setActivePage("Settings")}
  className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200${
    activePage === "Settings"
      ? "bg-slate-700 text-blue-300"
      : "hover:bg-slate-700 hover:text-blue-300"
  }`}
>
  <Settings size={18} />
  Settings
</p>

</div>
  </aside>
<main className="flex-1">
<h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-slate-900">
  <LayoutDashboard size={28} className="text-blue-600" />
  {activePage}
</h2>
  <p className="mt-2 text-sm leading-relaxed text-slate-500">
  {activePage === "Dashboard"
    ? "Overview of your payroll activities."
    : `Welcome to ${activePage} page.`}
</p>


         
        {activePage === "Dashboard" && (
  <>
<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
            <h3 className="text-sm font-semibold text-slate-500">Total Employees</h3>
            <p className="mt-3 text-3xl font-bold text-blue-700">0</p>
          </div>
         <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
            <h3 className="text-sm font-semibold text-slate-500">Total Salary</h3>
            <p className="mt-3 text-3xl font-bold text-green-700">TZS 0</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
            <h3 className="text-sm font-semibold text-slate-500">Pending Payments</h3>
            <p className="mt-3 text-3xl font-bold text-orange-600">0</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
           <h3 className="text-sm font-semibold text-slate-500">Completed Payments</h3>
            <p className="mt-3 text-3xl font-bold text-purple-700">0</p>
          </div>
        </div>
        
      <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg">
<h3 className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900">
  <History size={21} className="text-blue-600" />
  Recent Payments
</h3>

<div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
<table className="w-full border-collapse text-left text-sm text-slate-700">
  <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
     <tr className="border-b border-slate-200 bg-slate-100">

<th className="p-3 text-xs font-bold uppercase tracking-wider text-slate-600">Employee Name</th>
<th className="p-3 text-xs font-bold uppercase tracking-wider text-slate-600">Payment Date</th>
<th className="p-3 text-xs font-bold uppercase tracking-wider text-slate-600">Amount</th>
<th className="p-3 text-xs font-bold uppercase tracking-wider text-slate-600">Status</th>
      </tr>
    </thead>

   <tbody className="divide-y divide-slate-100">
<tr className="bg-white">
       <td colSpan={4} className="py-10 text-center text-sm font-medium text-slate-500">
  No payments yet
</td>
        <td className="p-3">-</td>
        <td className="p-3">TZS 0</td>
        <td className="p-3">-</td>
      </tr>
    </tbody>
  </table>
</div>
  
</div>
  </>
)}
{activePage === "Employees" && (
  <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg">
   <div className="mb-6">
  <h3 className="text-xl font-bold text-slate-900">
    Employees Management
  </h3>
  <p className="mt-1 text-sm text-slate-500">
    Manage all company employees.
  </p>
</div>
<div className="mb-6 flex justify-end">
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    + Add Employee
  </Button>
</div>
<div className="overflow-x-auto rounded-xl border border-slate-200">
 <table className="w-full border-collapse text-left text-sm text-slate-700">
    <thead className="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-600">
      <tr className="border-b border-slate-200">
        <th className="p-4">Employee Name</th>
<th className="p-4">Email</th>
<th className="p-4">Phone</th>
<th className="p-4">Position</th>
      </tr>
    </thead>
   <tbody className="divide-y divide-slate-100 border-t border-slate-200">
      <tr className="bg-white">
        <td colSpan={4} className="py-10 text-center text-sm font-medium text-slate-500">
          No employees yet
        </td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
)}
{activePage === "Salary Rules" && (
  <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg">
    <div className="mb-6">
  <h3 className="text-xl font-bold text-slate-900">
    Salary Rules Management
  </h3>
  <p className="mt-1 text-sm text-slate-500">
    Manage salary rules and deductions.
  </p>
</div>
<div className="mb-6 flex justify-end">
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    + Add Salary Rule
  </Button>
</div>
<div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
  <table className="w-full border-collapse text-left text-sm text-slate-700">
    <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
      <tr className="border-b border-slate-200 bg-slate-100">
        <th className="p-4">Rule Name</th>
        <th className="p-4">Type</th>
        <th className="p-4">Amount</th>
        <th className="p-4">Description</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100 border-t border-slate-200 bg-white">
     <tr className="bg-slate-50">
        <td colSpan={4} className="py-12 text-center text-sm font-medium text-slate-400">
          No salary rules yet
        </td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
)}
{activePage === "Salary Structures" && (
  <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-slate-900">
        Salary Structures Management
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Manage employee salary structures.
      </p>
    </div>
    <div className="mb-6 flex justify-end">
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    + Add Salary Structure
  </Button>
</div>
<div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
  <table className="w-full border-collapse text-left text-sm text-slate-700">
    <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
      <tr className="border-b border-slate-200 bg-slate-100">
        <th className="p-4">Structure Name</th>
        <th className="p-4">Basic Salary</th>
        <th className="p-4">Allowances</th>
        <th className="p-4">Description</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100 border-t border-slate-200 bg-white">
      <tr className="bg-slate-50">
        <td colSpan={4} className="py-12 text-center text-sm font-medium text-slate-400">
          No salary structures yet
        </td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
)}
{activePage === "Payslips" && (
  <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-slate-900">
        Payslips Management
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Manage and view employee payslips.
      </p>
    </div>
    <div className="mb-6 flex justify-end">
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    + Generate Payslip
  </Button>
</div>
<div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
  <table className="w-full border-collapse text-left text-sm text-slate-700">
    <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
      <tr className="border-b border-slate-200 bg-slate-100">
        <th className="p-4">Employee Name</th>
        <th className="p-4">Pay Period</th>
        <th className="p-4">Basic Salary</th>
        <th className="p-4">Net Salary</th>
        <th className="p-4">Status</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100 border-t border-slate-200 bg-white">
      <tr className="bg-slate-50">
        <td colSpan={5} className="py-12 text-center text-sm font-medium text-slate-400">
          No payslips yet
        </td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
)}
{activePage === "Payments" && (
  <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-slate-900">
        Payments Management
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Manage and monitor employee salary payments.
      </p>
      <div className="mb-6 flex justify-end">
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    + Process Payment
  </Button>
</div>
<div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
  <table className="w-full border-collapse text-left text-sm text-slate-700">
    <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
      <tr className="border-b border-slate-200">
        <th className="p-4">Employee Name</th>
        <th className="p-4">Payment Date</th>
        <th className="p-4">Amount</th>
        <th className="p-4">Payment Method</th>
        <th className="p-4">Status</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-slate-100">
      <tr className="bg-slate-50">
        <td
          colSpan={5}
          className="py-12 text-center text-sm font-medium text-slate-400"
        >
          No payments yet
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    
  </div>
)}
{activePage === "Users" && (
  <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-slate-900">
        Users Management
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Manage system users and their access.
      </p>
      <div className="mb-6 flex justify-end">
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    + Add User
  </Button>
  
</div>
<div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
  <table className="w-full border-collapse text-left text-sm text-slate-700">
    <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
      <tr className="border-b border-slate-200">
        <th className="p-4">Full Name</th>
        <th className="p-4">Email</th>
        <th className="p-4">Role</th>
        <th className="p-4">Status</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-slate-100">
      <tr className="bg-slate-50">
        <td
          colSpan={4}
          className="py-12 text-center text-sm font-medium text-slate-400"
        >
          No users yet
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  </div>
)}
{activePage === "Profile" && (
  <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-slate-900">
        My Profile
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        View and manage your personal account information.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      Full Name
    </label>
    <input
      type="text"
      placeholder="Enter your full name"
      className="w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      Email Address
    </label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500"
    />
  </div>
</div>
<div className="mt-6">
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Phone Number
  </label>
  <input
    type="tel"
    placeholder="Enter your phone number"
    className="w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500 md:w-1/2"
  />
  <div className="mt-6">
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    User Role
  </label>
  <input
    type="text"
    value="Administrator"
    readOnly
    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-600 md:w-1/2"
  />
</div>
<div className="mt-8 flex justify-end">
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    Save Changes
  </Button>
</div>
</div>
    </div>
  </div>
)}
{activePage === "Settings" && (
  <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg">
    <h3 className="text-xl font-bold text-slate-900">
      System Settings
    </h3>
    <p className="mt-1 text-sm text-slate-500">
      Manage your system preferences.
    </p>
    <div className="mt-8 rounded-xl border border-slate-200 p-5">
  <h4 className="text-lg font-semibold text-slate-800">
    General Settings
  </h4>
  <p className="mt-1 text-sm text-slate-500">
    Configure general system information.
  </p>
  <div className="mt-5">
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    System Name
  </label>
  <input
    type="text"
    value="Payroll Payment System"
    readOnly
    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-600 md:w-1/2"
  />
  <div className="mt-5">
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Company Name
  </label>
  <input
    type="text"
    placeholder="Enter company name"
    className="w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500 md:w-1/2"
  />
</div>
<div className="mt-5">
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Currency
  </label>
  <input
    type="text"
    value="TZS"
    readOnly
    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-600 md:w-1/2"
  />
  <div className="mt-6 flex justify-end">
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    Save Settings
  </Button>
</div>
<div className="mt-8 rounded-xl border border-slate-200 p-5">
  <h4 className="text-lg font-semibold text-slate-800">
    Security Settings
  </h4>
  <p className="mt-1 text-sm text-slate-500">
    Manage your account security preferences.
  </p>
  <div className="mt-5">
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Current Password
  </label>
  <input
    type="password"
    placeholder="Enter current password"
    className="w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500 md:w-1/2"
  />
</div>
<div className="mt-5">
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    New Password
  </label>
  <input
    type="password"
    placeholder="Enter new password"
    className="w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500 md:w-1/2"
  />
</div>
<div className="mt-5">
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Confirm New Password
  </label>
  <input
    type="password"
    placeholder="Confirm new password"
    className="w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500 md:w-1/2"
  />
</div>
<div className="mt-6 flex justify-end">
  <Button className="bg-blue-600 text-white hover:bg-blue-700">
    Update Password
  </Button>
</div>
</div>
</div>
</div>
</div>
  </div>
)}
</main>
    </div>
    </div>
  )
}

export default App
