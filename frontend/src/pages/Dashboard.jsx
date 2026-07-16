import { Navigate } from "react-router-dom";

export default function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>

      <h1>User Dashboard</h1>

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