
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <header className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-700">
          Payroll Payment System
        </h1>
        <Button>Logout</Button>
      </header>

     <div className="mt-8 flex flex-col gap-6 border-t border-slate-200 pt-6 md:flex-row">
<aside className="w-full min-h-[500px] rounded-xl bg-slate-900 p-5 text-white md:w-64">
    <h2 className="mb-6 text-xl font-bold">MENU</h2>

    <nav className="flex flex-col gap-5 text-sm font-medium">
      <p className="cursor-pointer rounded-lg bg-slate-700 px-3 py-2 text-blue-300">
  Dashboard
</p>
     <p className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-700 hover:text-blue-300">
  Employees
</p>
     <p className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-700 hover:text-blue-300">
  Salary Rules
</p>
      <p className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-700 hover:text-blue-300">
  Salary Structures
</p>
      <p className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-700 hover:text-blue-300">
  Payslips
</p>
     <p className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-700 hover:text-blue-300">
  Payments
</p>
      
      <p className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-700 hover:text-blue-300">
  Profile
</p>
    </nav>
  </aside>

  <main className="flex-1">
       <p className="mt-2 text-sm text-slate-500">
  Overview of your payroll activities.
</p>

<p className="mt-2 text-sm font-medium text-blue-700">
  Payroll Management System
</p>

        <p className="mt-2 text-slate-600">
          Welcome to Payroll Payment System.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-slate-500">Total Employees</h3>
            <p className="mt-3 text-3xl font-bold text-blue-700">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-slate-500">Total Salary</h3>
            <p className="mt-3 text-3xl font-bold text-green-700">TZS 0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-slate-500">Pending Payments</h3>
            <p className="mt-3 text-3xl font-bold text-orange-600">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-slate-500">Completed Payments</h3>
            <p className="mt-3 text-3xl font-bold text-purple-700">0</p>
          </div>
        </div>
      
      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
  <h3 className="text-xl font-bold text-slate-800">
    Recent Payments
  </h3>

  <div className="mt-6 overflow-x-auto">
  <table className="w-full text-left text-sm">
    <thead className="bg-slate-100 text-slate-600">
      <tr>
        <th className="p-3">Employee Name</th>
        <th className="p-3">Payment Date</th>
        <th className="p-3">Amount</th>
        <th className="p-3">Status</th>
      </tr>
    </thead>

    <tbody>
      <tr className="border-b">
        <td className="p-3">No payments yet</td>
        <td className="p-3">-</td>
        <td className="p-3">TZS 0</td>
        <td className="p-3">-</td>
      </tr>
    </tbody>
  </table>
</div>
  
</div>
</main>
    </div>
    </div>
  )
}

export default App
