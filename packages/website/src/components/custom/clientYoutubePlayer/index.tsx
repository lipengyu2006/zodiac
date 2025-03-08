'use client'

import dynamic from 'next/dynamic'

const YouTubePlayer = dynamic(
  () => import('@/components/custom/clientYoutubePlayer/YouTubePlayer'),
  { ssr: false }
)

export default function ClientYouTubePlayer({ videoId }: { videoId: string }) {
  return <YouTubePlayer videoId={videoId} />
}
