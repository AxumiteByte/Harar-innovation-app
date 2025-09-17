import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();
  const linkClasses = (path) =>
    `block px-4 py-2 rounded hover:bg-gray-700 ${
      location.pathname === path
        ? "bg-gray-700 text-green-400"
        : "text-gray-300"
    }`;

  return (
    <aside className="w-6 4p-4">
      <h2 className="text-lg font-bold mb-6 text-green-400">Admin Panel</h2>
      <nav className="space-y-2">
        <Link to="/admin/programs" className={linkClasses("/admin/programs")}>
          📂 Programs
        </Link>
        <Link to="/admin/events" className={linkClasses("/admin/events")}>
          📅 Events
        </Link>
        <Link to="/admin/news" className={linkClasses("/admin/news")}>
          📰 News
        </Link>
        <Link
          to="/admin/directorate"
          className={linkClasses("/admin/directorate")}>
          Directorate
        </Link>
      </nav>
    </aside>
  );
}
