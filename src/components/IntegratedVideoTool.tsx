import React, { useState } from 'react'
import { Download, Scissors, Minimize2 } from 'lucide-react'

const IntegratedVideoTool: React.FC = () => {
  const [url, setUrl] = useState('')
  const [platform, setPlatform] = useState('youtube')
  const [format, setFormat] = useState('mp4')
  const [shouldCut, setShouldCut] = useState(false)
  const [startTime, setStartTime] = useState('00:00:00')
  const [endTime, setEndTime] = useState('')
  const [shouldCompress, setShouldCompress] = useState(false)
  const [quality, setQuality] = useState('medium')

  const handleProcess = () => {
    console.log('Processing video:', {
      url,
      platform,
      format,
      cut: shouldCut ? { startTime, endTime } : false,
      compress: shouldCompress ? { quality } : false,
    })
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Download className="mr-2" /> Video Processor
      </h2>
      <input
        type="text"
        placeholder="Paste video URL here"
        className="input w-full mb-4"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <select
          className="input w-full"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="youtube">YouTube</option>
          <option value="instagram">Instagram Reels</option>
        </select>
        <select
          className="input w-full"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="mp4">MP4</option>
          <option value="avi">AVI</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={shouldCut}
            onChange={(e) => setShouldCut(e.target.checked)}
            className="mr-2"
          />
          <Scissors className="mr-2" /> Cut Video
        </label>
        {shouldCut && (
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Start time (HH:MM:SS)"
              className="input w-full"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="End time (HH:MM:SS)"
              className="input w-full"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={shouldCompress}
            onChange={(e) => setShouldCompress(e.target.checked)}
            className="mr-2"
          />
          <Minimize2 className="mr-2" /> Compress Video
        </label>
        {shouldCompress && (
          <div className="mt-2">
            <select
              className="input w-full"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
            >
              <option value="high">High Quality</option>
              <option value="medium">Medium Quality</option>
              <option value="low">Low Quality</option>
            </select>
          </div>
        )}
      </div>

      <button className="btn btn-primary w-full" onClick={handleProcess}>
        Process Video
      </button>
    </div>
  )
}

export default IntegratedVideoTool