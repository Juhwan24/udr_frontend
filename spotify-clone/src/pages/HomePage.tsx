import Header from "../components/Header"
import PlaylistCard from "../components/PlaylistCard"
import SmallPlaylistCard from "../components/SmallPlaylistCard"
import { playlists } from "../data/playlists"
import { tracks } from "../data/tracks"

type HomePageProps = {
  onSelectTrack: (track: (typeof tracks)[number]) => void
}

function HomePage({ onSelectTrack }: HomePageProps) {
  return (
    <main className="flex-1 bg-gradient-to-b from-neutral-800 to-neutral-900 p-6 overflow-y-auto">
      <Header />

      <h2 className="text-3xl font-bold mb-6">Good evening</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
        {playlists.slice(0, 6).map((playlist) => (
          <SmallPlaylistCard
            key={playlist.id}
            title={playlist.title}
            image={playlist.image}
          />
        ))}
      </div>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-bold">Made for you</h3>
          <button className="text-sm text-neutral-400 hover:text-white">
            Show all
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tracks.map((track) => (
            <PlaylistCard
              key={track.id}
              title={track.title}
              description={`${track.artist} • ${track.album}`}
              image={track.image}
              onClick={() => onSelectTrack(track)}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-bold">Popular albums</h3>
          <button className="text-sm text-neutral-400 hover:text-white">
            Show all
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tracks.map((track) => (
            <PlaylistCard
              key={`popular-${track.id}`}
              title={track.album}
              description={track.artist}
              image={track.image}
              onClick={() => onSelectTrack(track)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage