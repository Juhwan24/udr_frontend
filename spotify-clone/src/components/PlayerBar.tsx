type PlayerBarProps = {
  currentTrack: {
    title: string
    artist: string
    image: string
    duration: string
  }
  isPlaying: boolean
  onTogglePlay: () => void
}

function PlayerBar({ currentTrack, isPlaying, onTogglePlay }: PlayerBarProps) {
  return (
    <footer className="h-24 bg-neutral-950 border-t border-neutral-800 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 w-1/4">
        <img
          src={currentTrack.image}
          alt={currentTrack.title}
          className="w-14 h-14 rounded-md object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{currentTrack.title}</p>
          <p className="text-xs text-neutral-400">{currentTrack.artist}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-2/4">
        <div className="flex items-center gap-4">
          <button className="text-neutral-400 hover:text-white">⏮</button>

          <button
            onClick={onTogglePlay}
            className="w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center"
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <button className="text-neutral-400 hover:text-white">⏭</button>
        </div>

        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-neutral-400">0:00</span>
          <div className="flex-1 h-1 bg-neutral-700 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-neutral-400">{currentTrack.duration}</span>
        </div>
      </div>

      <div className="w-1/4 flex justify-end items-center gap-3">
        <span className="text-sm text-neutral-400">🔊</span>
        <div className="w-24 h-1 bg-neutral-700 rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-white rounded-full"></div>
        </div>
      </div>
    </footer>
  )
}

export default PlayerBar