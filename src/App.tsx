import React from 'react'
import IntegratedVideoTool from './components/IntegratedVideoTool'
import { Download, Scissors, Minimize2 } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">All-in-One Video Tool</h1>
        <p className="text-xl mb-8 text-center">Download, Cut, and Compress Videos in One Place</p>
        
        <div className="mb-8">
          <IntegratedVideoTool />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={<Download size={48} />} title="Download" description="From YouTube and Instagram Reels" />
          <FeatureCard icon={<Scissors size={48} />} title="Cut" description="Trim videos with precision" />
          <FeatureCard icon={<Minimize2 size={48} />} title="Compress" description="Reduce file size easily" />
        </div>
      </div>
    </div>
  )
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default App