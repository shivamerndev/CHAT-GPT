import { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { username, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="w-full max-w-sm p-8 bg-zinc-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">Login To Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5 mb-8">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-zinc-300 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-700 text-white rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder-zinc-400"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-700 text-white rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder-zinc-400"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Login
          </button>
        </form>

        <GoogleOAuthProvider clientId={"536825012398-c2gga80iemtn21prat7pdhqomsp6ichp.apps.googleusercontent.com"}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>

      </div>
    </div>
  )
}

export default Login
