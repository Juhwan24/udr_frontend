type SmallPlaylistCardProps = {
  title: string
  image: string
  onClick?: () => void
}

function SmallPlaylistCard({ title, image, onClick }: SmallPlaylistCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white/10 hover:bg-white/20 transition rounded-md overflow-hidden flex items-center cursor-pointer group"
    >
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover"
      />

      <div className="flex-1 px-4 font-semibold text-sm">
        {title}
      </div>

      <div className="pr-4 opacity-0 group-hover:opacity-100 transition">
        <button className="w-10 h-10 rounded-full bg-green-500 text-black font-bold shadow-lg">
          ▶
        </button>
      </div>
    </div>
  )
}

export default SmallPlaylistCard