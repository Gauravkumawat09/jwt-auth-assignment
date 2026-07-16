import { Navigate, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/login" />;

  if (user.role !== "admin")
    return <Navigate to="/dashboard" />;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Welcome {user.name}</h2>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}