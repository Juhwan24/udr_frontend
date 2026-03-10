import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import PlayerBar from "./components/PlayerBar"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import LibraryPage from "./pages/LibraryPage"
import { tracks } from "./data/tracks"

function App() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const handleSelectTrack = (track: (typeof tracks)[number]) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <BrowserRouter>
      <div className="h-screen bg-black text-white flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />

          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage onSelectTrack={handleSelectTrack} />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/library" element={<LibraryPage />} />
            </Routes>
          </div>
        </div>

        <PlayerBar
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
        />
      </div>
    </BrowserRouter>
  )
}

export default App