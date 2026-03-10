type PlaylistCardProps = {
  title: string
  description: string
  image: string
  onClick: () => void
}

function PlaylistCard({ title, description, image, onClick }: PlaylistCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-neutral-800/50 hover:bg-neutral-700/80 transition-all duration-300 rounded-lg p-4 cursor-pointer group"
    >
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />

        <button className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-green-500 text-black font-bold shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center">
          ▶
        </button>
      </div>

      <h3 className="font-bold text-white mb-1 truncate">{title}</h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  )
}

export default PlaylistCard