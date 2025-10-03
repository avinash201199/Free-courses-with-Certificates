import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      alert("All fields required");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    
    onSignup(true);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-2 rounded"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <p>Already have an account ? <span onClick={(e)=>{e.preventDefault();
        navigate("/login");}} className="text-blue-600 cursor-pointer underline">Login</span></p>
        <button className="bg-green-600 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
