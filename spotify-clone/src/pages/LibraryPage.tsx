function LibraryPage() {
  return (
    <main className="flex-1 bg-gradient-to-b from-neutral-800 to-neutral-900 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Your Library</h2>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
          Create Playlist
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-neutral-800 hover:bg-neutral-700 transition rounded-lg p-4">
          <h3 className="font-bold">Liked Songs</h3>
          <p className="text-sm text-neutral-400">Playlist • 24 songs</p>
        </div>

        <div className="bg-neutral-800 hover:bg-neutral-700 transition rounded-lg p-4">
          <h3 className="font-bold">My R&B Mix</h3>
          <p className="text-sm text-neutral-400">Playlist • 12 songs</p>
        </div>

        <div className="bg-neutral-800 hover:bg-neutral-700 transition rounded-lg p-4">
          <h3 className="font-bold">Late Night Drive</h3>
          <p className="text-sm text-neutral-400">Playlist • 18 songs</p>
        </div>

        <div className="bg-neutral-800 hover:bg-neutral-700 transition rounded-lg p-4">
          <h3 className="font-bold">Lo-Fi Playlist</h3>
          <p className="text-sm text-neutral-400">Playlist • 3 songs</p>
        </div>

        <div className="bg-neutral-800 hover:bg-neutral-700 transition rounded-lg p-4">
          <h3 className="font-bold">❤️‍🔥</h3>
          <p className="text-sm text-neutral-400">Playlist • 256 songs</p>
        </div>

      </div>
    </main>
  )
}

export default LibraryPage