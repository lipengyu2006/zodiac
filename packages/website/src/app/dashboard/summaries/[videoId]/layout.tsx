import { extractYouTubeID } from '@/lib/utils'
import { getSummaryById } from '@/data/loaders'
import ClientYouTubePlayer from '@/components/custom/clientYoutubePlayer'

export default async function SummarySingleRoute({
  params,
  children,
}: {
  readonly params: any
  readonly children: React.ReactNode
}) {
  const { videoId } = await params
  const data = await getSummaryById(videoId)
  if (data?.error?.status === 404) return <p>No Items Found</p>
  const videoYTId = extractYouTubeID(data.videoId)

  return (
    <div>
      <div className="grid h-full grid-cols-5 gap-4 p-4">
        <div className="col-span-3">{children}</div>
        <div className="col-span-2">
          <ClientYouTubePlayer videoId={videoYTId as string} />
        </div>
      </div>
    </div>
  )
}
