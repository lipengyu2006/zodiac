'use client'
import {
  updateSummaryAction,
  deleteSummaryAction,
} from '@/data/actions/summary-actions'
import { cn } from '@/lib/utils'
import { useActionState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { SubmitButton } from '@/components/custom/SubmitButton'
import ReactMarkdown from 'react-markdown'
import { DeleteButton } from '@/components/custom/DeleteButton'
import { StrapiErrors } from '@/components/custom/StrapiErrors'

const INITIAL_STATE = {
  strapiErrors: null,
  data: null,
  message: null,
}

export function SummaryCardForm({
  item,
  className,
}: {
  readonly item: any
  readonly className?: string
}) {
  const deleteSummaryById = deleteSummaryAction.bind(null, item.id)

  const [deleteState, deleteAction] = useActionState(
    deleteSummaryById,
    INITIAL_STATE
  )

  const [updateState, updateAction] = useActionState(
    updateSummaryAction,
    INITIAL_STATE
  )

  return (
    <Card className={cn('relative mb-8 h-auto', className)}>
      <CardHeader>
        <CardTitle>Video Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <form action={updateAction}>
            <Input
              id="title"
              name="title"
              placeholder="Update your title"
              required
              className="mb-4"
              defaultValue={item.title}
            />
            <div className="flex flex-1 flex-col">
              <Tabs
                defaultValue="preview"
                className="flex h-full flex-col gap-2"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="markdown">Edit Markdown</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="flex-1">
                  <div className="markdown-preview placeholder:text-muted-foreground focus-visible:ring-ring relative mb-4 h-[600px] w-full overflow-auto scroll-smooth rounded-md border border-gray-300 bg-transparent bg-white p-4 px-3 py-2 text-sm shadow-sm focus-visible:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800">
                    <ReactMarkdown>{item.summary}</ReactMarkdown>
                  </div>
                </TabsContent>
                <TabsContent value="markdown" className="flex-1">
                  <Textarea
                    name="summary"
                    className="markdown-preview placeholder:text-muted-foreground focus-visible:ring-ring relative mb-4 h-[600px] w-full overflow-auto scroll-smooth rounded-md border border-gray-300 bg-transparent bg-white p-4 px-3 py-2 text-sm shadow-sm focus-visible:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800"
                    defaultValue={item.summary}
                  />
                </TabsContent>
              </Tabs>
            </div>
            <input type="hidden" name="id" value={item.documentId} />
            <SubmitButton
              text="Update Summary"
              loadingText="Updating Summary"
            />
          </form>
          <form action={deleteAction}>
            <DeleteButton className="absolute right-4 top-4 bg-red-700 hover:bg-red-600" />
          </form>
        </div>
      </CardContent>
      <CardFooter>
        <StrapiErrors
          error={deleteState?.strapiErrors || updateState?.strapiErrors}
        />
      </CardFooter>
    </Card>
  )
}
