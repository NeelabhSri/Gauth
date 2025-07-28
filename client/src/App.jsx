import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/dashboard", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setUser(data.user);
      });
  }, []);

  if (user) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Welcome, {user.name}</h1>
        <p>Email: {user.email}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Please Login with Google</h1>
      <a href="http://localhost:5000/auth/google">
        <button style={{ padding: "10px 20px" }}>
          Sign in with Google
        </button>
      </a>
    </div>
  );
}

export default App;
