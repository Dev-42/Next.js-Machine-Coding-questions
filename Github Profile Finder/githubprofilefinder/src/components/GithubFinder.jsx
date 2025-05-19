'use client'
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchGitHubUser = async () => {
    try {
      setError('');
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error('User not found');
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setUserData(null);
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) fetchGitHubUser();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">🔍 GitHub Profile Finder</h1>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {userData && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center transition duration-300 hover:scale-[1.01]">
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="w-24 h-24 rounded-full mx-auto shadow-md"
          />
          <h2 className="text-2xl font-semibold mt-4">{userData.name || 'No name provided'}</h2>
          <p className="text-gray-600">{userData.bio || 'No bio available'}</p>
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-700">
            <span>📦 {userData.public_repos} Repos</span>
            <span>👥 {userData.followers} Followers</span>
            <span>➡️ {userData.following} Following</span>
          </div>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            🔗 View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
