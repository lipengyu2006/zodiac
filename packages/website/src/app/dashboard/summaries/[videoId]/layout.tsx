import YouTubePlayer from '@/components/custom/clientYoutubePlayer'
import { extractYouTubeID } from '@/lib/utils'
import { getSummaryById } from '@/data/loaders'
import { notFound } from 'next/navigation'

export default async function SummarySingleRoute(props: {
  readonly params: Promise<any>
  readonly children: React.ReactNode
}) {
  const params = await props.params
  const { children } = props

  const data = await getSummaryById(params.videoId)
  if (data?.error?.status === 404) return notFound()
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
