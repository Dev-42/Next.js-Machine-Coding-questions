'use client'
import React, { useState } from 'react'

const Tabs = () => {
  const tabData = [
    { name: "Tab 1", content: "🔥 This is content for Tab 1" },
    { name: "Tab 2", content: "🚀 Here comes the content for Tab 2" },
    { name: "Tab 3", content: "🎯 You are now viewing Tab 3 content" }
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].name);
  const activeTabData = tabData.find(tab => tab.name === activeTab)?.content;

  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabData.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-sm
              ${activeTab === tab.name
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
            `}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300">
        <p className="text-gray-700 text-lg">{activeTabData}</p>
      </div>
    </div>
  );
}

export default Tabs;
