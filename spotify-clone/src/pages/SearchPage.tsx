function SearchPage() {
  return (
    <main className="flex-1 bg-gradient-to-b from-neutral-800 to-neutral-900 p-6 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6">Search</h2>

      <div className="mb-8">
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full max-w-lg px-4 py-3 rounded-full bg-white text-black outline-none"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-pink-500 rounded-lg p-6 h-32 font-bold text-xl">Podcasts</div>
        <div className="bg-blue-500 rounded-lg p-6 h-32 font-bold text-xl">Live Events</div>
        <div className="bg-green-500 rounded-lg p-6 h-32 font-bold text-xl">Made For You</div>
        <div className="bg-orange-500 rounded-lg p-6 h-32 font-bold text-xl">New Releases</div>
        <div className="bg-purple-500 rounded-lg p-6 h-32 font-bold text-xl">K-Pop</div>
        <div className="bg-red-500 rounded-lg p-6 h-32 font-bold text-xl">Hip-Hop</div>
        <div className="bg-yellow-500 rounded-lg p-6 h-32 font-bold text-xl">Rock</div>
        <div className="bg-teal-500 rounded-lg p-6 h-32 font-bold text-xl">Jazz</div>

      </div>
    </main>
  )
}

export default SearchPage