import Comment from '@/components/entry/Comment'
import CreateEntry from '@/components/entry/CreateEntry'
import NoContent from '@/components/error/NoContent'
import EntryItem from '@/components/entry/EntryItem'
import { getEntry } from '@/server/entry/getEntry'
import { notFound } from 'next/navigation'

const Page = async ({ searchParams }: { searchParams: { url: string } }) => {
  const url = decodeURIComponent(searchParams.url)
  try {
    new URL(url)
  } catch (e) {
    return <NoContent text="不正なURLです" />
  }
  if (!url) notFound()
  const entry = await getEntry({ url })
  if (!entry) return <CreateEntry url={url} />
  return (
    <div className="bg-white dark:bg-lightDark dark:text-white">
      <div className="mx-auto max-w-[1000px] px-3 pt-5 pb-10 min-h-[calc(100vh-320px)]">
        <EntryItem entry={entry} />
        <Comment entry={entry} />
      </div>
    </div>
  )
}

export default Page
