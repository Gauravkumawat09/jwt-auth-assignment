import { Navigate } from "react-router-dom";

export default function AdminDashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/login" />;

  if (user.role !== "admin")
    return <Navigate to="/dashboard" />;

  return (
    <div>

      <h1>Admin Dashboard</h1>

      <h2>Welcome {user.name}</h2>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href="/login";
        }}
      >
        Logout
      </button>

    </div>
  );
}