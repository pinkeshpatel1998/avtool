import React, { useState } from 'react'
import { Minimize2 } from 'lucide-react'

const VideoCompressor: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [quality, setQuality] = useState('medium')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleCompress = () => {
    // Implement video compression logic here
    console.log('Compressing video:', { file, quality })
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Minimize2 className="mr-2" /> Video Compressor
      </h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="input w-full mb-4"
      />
      <select
        className="input w-full mb-4"
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
      >
        <option value="high">High Quality</option>
        <option value="medium">Medium Quality</option>
        <option value="low">Low Quality</option>
      </select>
      <button className="btn btn-primary w-full" onClick={handleCompress}>
        Compress Video
      </button>
    </div>
  )
}

export default VideoCompressor