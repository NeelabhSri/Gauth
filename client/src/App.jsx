import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://gauth-backend-4zy8.onrender.com", {
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
      <a href="https://gauth-backend-4zy8.onrender.com">
        <button style={{ padding: "10px 20px" }}>
          Sign in with Google
        </button>
      </a>
    </div>
  );
}

export default App;
