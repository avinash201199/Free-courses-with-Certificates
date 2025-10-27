import { useState } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Login({ onLogin ,setUserName }) {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert(t('auth.pleaseFillAllFields'));
      return;
    }

    setUserName(name);
    onLogin(true);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">{t('auth.login')}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64">
        <input
          type="name"
          placeholder={t('auth.name')}
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder={t('auth.email')}
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder={t('auth.password')}
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{t('auth.dontHaveAccount')} <span onClick={()=>navigate("/signup")} className="text-blue-600 cursor-pointer underline">{t('auth.signup')}</span></p>
        <button className="bg-blue-600 text-white py-2 rounded">{t('auth.login')}</button>
      </form>
    </div>
  );
}
