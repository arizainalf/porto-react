
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <div className="p-4 text-xl font-bold">My Dashboard</div>
      <nav className="flex flex-col gap-2 p-4">
        <a href="#" className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          🏠 Home
        </a>
        <a href="#" className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          📊 Analytics
        </a>
        <a href="#" className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          ⚙ Settings
        </a>
      </nav>
    </aside>
  );
}
