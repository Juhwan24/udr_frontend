function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center">
          ←
        </button>
        <button className="w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center">
          →
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
          Explore Premium
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold border border-neutral-700 hover:scale-105 transition">
          Install App
        </button>
        <button className="w-9 h-9 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center">
          U
        </button>
      </div>
    </div>
  )
}

export default Header