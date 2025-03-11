import { getSummaryById } from '@/data/loaders'
import { SummaryCardForm } from '@/components/forms/SummaryCardForm'

interface ParamsProps {
  params: Promise<{
    videoId: string
  }>
}

export default async function SummaryCardRoute(props: Readonly<ParamsProps>) {
  const params = await props?.params
  const { videoId } = params
  const data = await getSummaryById(videoId)
  return <SummaryCardForm item={data} />
}
