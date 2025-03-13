import Link from 'next/link'
import { getSummaries } from '@/data/loaders'
import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from '@/components/custom/Search'
import { PaginationComponent } from '@/components/custom/PaginationComponent'
import LayoutWithBreadcrumb from '@/app/layout-with-breadcrumb'
import { SummaryForm } from '@/components/forms/SummaryForm'

interface LinkCardProps {
  documentId: string
  title: string
  summary: string
}

function LinkCard({ documentId, title, summary }: Readonly<LinkCardProps>) {
  return (
    <Link href={`/dashboard/summaries/${documentId}`}>
      <Card className="relative">
        <CardHeader>
          <CardTitle className="leading-8 text-pink-500">
            {title || 'Video Summary'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="card-markdown prose prose-sm prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-ul:list-disc prose-ul:pl-4 prose-ol:list-decimal prose-ol:pl-4 max-w-none">
            <ReactMarkdown>
              {summary.slice(0, 164) + ' [read more]'}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

interface SearchParamsProps {
  searchParams?: Promise<{
    page?: string
    query?: string
  }>
}

export default async function SummariesRoute({
  searchParams,
}: SearchParamsProps) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Summaries' },
  ]

  const search = await searchParams
  const query = search?.query ?? ''
  const currentPage = Number(search?.page) || 1
  const { data, meta } = await getSummaries(query, currentPage)
  const pageCount = meta?.pagination?.pageCount

  return (
    <LayoutWithBreadcrumb breadcrumbItems={breadcrumbItems}>
      <div className="flex-1 flex-col">
        <div className="grid w-full grid-cols-1 gap-4 p-4">
          <SummaryForm />
        </div>
        <div className="grid grid-cols-1 gap-4 p-4">
          <Search />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data &&
              data.map((item: LinkCardProps) => (
                <LinkCard key={item.documentId} {...item} />
              ))}
          </div>
          <PaginationComponent pageCount={pageCount} />
        </div>
      </div>
    </LayoutWithBreadcrumb>
  )
}
