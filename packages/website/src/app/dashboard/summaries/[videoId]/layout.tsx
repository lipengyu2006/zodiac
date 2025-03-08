import YouTubePlayer from '@/components/custom/clientYoutubePlayer'
import { extractYouTubeID } from '@/lib/utils'
import { getSummaryById } from '@/data/loaders'
import { notFound } from 'next/navigation'

export default async function SummarySingleRoute({
  params,
  children,
}: {
  readonly params: any
  readonly children: React.ReactNode
}) {
  params = await params
  console.log('params', params)
  const data = await getSummaryById(params.videoId)
  if (data?.error?.status === 404) return notFound()
  console.log('videoId', data.videoId)
  const videoId = extractYouTubeID(data.videoId)

  return (
    <div>
      <div className="grid h-full grid-cols-5 gap-4 p-4">
        <div className="col-span-3">{children}</div>
        <div className="col-span-2">
          <div>
            <YouTubePlayer videoId={videoId as string} />
          </div>
        </div>
      </div>
    </div>
  )
}
