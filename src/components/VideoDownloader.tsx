import React, { useState } from 'react'
import { Download } from 'lucide-react'

const VideoDownloader: React.FC = () => {
  const [url, setUrl] = useState('')
  const [platform, setPlatform] = useState('youtube')
  const [format, setFormat] = useState('mp4')

  const handleDownload = () => {
    // Implement download logic here
    console.log('Downloading:', { url, platform, format })
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Download className="mr-2" /> Video Downloader
      </h2>
      <input
        type="text"
        placeholder="Paste video URL here"
        className="input w-full mb-4"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <select
        className="input w-full mb-4"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="youtube">YouTube</option>
        <option value="instagram">Instagram Reels</option>
        <option value="tiktok">TikTok</option>
      </select>
      <select
        className="input w-full mb-4"
        value={format}
        onChange={(e) => setFormat(e.target.value)}
      >
        <option value="mp4">MP4</option>
        <option value="mp3">MP3 (Audio Only)</option>
      </select>
      <button className="btn btn-primary w-full" onClick={handleDownload}>
        Download
      </button>
    </div>
  )
}

export default VideoDownloader