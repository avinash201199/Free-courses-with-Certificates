import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // optional: npm install lucide-react

export default function Signup({ onSignup, setUserName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

 
  const getPasswordStrength = (password) => {
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const mediumRegex = /^(?=.*[a-z])(?=.*\d).{6,}$/;

    if (strongRegex.test(password)) return "Strong";
    if (mediumRegex.test(password)) return "Medium";
    if (password.length > 0) return "Weak";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirm) {
      alert("All fields are required");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    // ✅ Save username and proceed
    setUserName(name);
    onSignup(true);
    navigate("/");
  };

  const strength = getPasswordStrength(password);
  const strengthColor =
    strength === "Strong"
      ? "text-green-600"
      : strength === "Medium"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-72 bg-white p-6 rounded-2xl shadow-md"
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* Password Strength */}
        {strength && (
          <p className={`text-sm font-semibold ${strengthColor}`}>
            Password strength: {strength}
          </p>
        )}

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* Already have account */}
        <p className="text-sm text-gray-700">
          Already have an account?{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            className="text-blue-600 cursor-pointer underline"
          >
            Login
          </span>
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
