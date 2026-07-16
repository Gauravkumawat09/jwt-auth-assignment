import { Navigate, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <h1>User Dashboard</h1>

      <h2>Welcome {user.name}</h2>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}