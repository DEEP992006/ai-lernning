import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("name");
    if (userData) {
      setUsername(userData)
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Greeting with username */}
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Welcome, {username ?? 'Learner'} 👋
      </h1>

      {/* Pending message */}
      <p className="text-lg text-gray-600 mb-4">
        Your dashboard is still under construction.
      </p>

      {/* Subtext with a teaser */}
      <p className="text-sm text-gray-500 mb-6 max-w-md">
        We’re crafting your personalized learning experience. Soon you’ll see your skill tree, course progress, and smart flashcards here!
      </p>

      {/* Spinner / loader */}
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>

      {/* Optional Coming Soon label */}
      <p className="text-xs text-gray-400 mt-4 italic">Coming soon 🚀</p>
    </div>
  );
};

export default Dashboard;
