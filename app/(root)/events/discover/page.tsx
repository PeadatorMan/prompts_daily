import CategoryFilter from "@/components/shared/CategoryFilter"
import Collection from "@/components/shared/FetchCollection"
import Search from "@/components/shared/Search"
import { getAllEvents } from "@/lib/actions/event.actions";



import { SearchParamProps } from '@/types';

const  page = async ({ searchParams }: SearchParamProps) => {
const page = Number(searchParams?.page) || 1;
const searchText = (searchParams?.query as string) || '';
const category = (searchParams?.category as string) || '';


  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 42
  })

  return (
    <>
    <section id="events" className="wrapper my-6 flex flex-col gap-6 md:gap-12">
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={42}
          page={page}
          totalPages={events?.totalPages}
        />
    </section>
    </>
  )
}

export default page