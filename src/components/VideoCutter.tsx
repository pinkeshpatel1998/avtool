import React, { useState } from 'react'
import { Scissors } from 'lucide-react'

const VideoCutter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleCut = () => {
    // Implement video cutting logic here
    console.log('Cutting video:', { file, startTime, endTime })
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Scissors className="mr-2" /> Video Cutter
      </h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="input w-full mb-4"
      />
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Start time (HH:MM:SS)"
          className="input flex-1"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="End time (HH:MM:SS)"
          className="input flex-1"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <button className="btn btn-primary w-full" onClick={handleCut}>
        Cut Video
      </button>
    </div>
  )
}

export default VideoCutter