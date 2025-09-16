export default function Header({ toggleDark }) {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <button
        onClick={toggleDark}
        className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700"
      >
        🌙 Toggle Dark
      </button>
    </header>
  );
}
