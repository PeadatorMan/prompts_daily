import CategoryFilter from "@/components/shared/CategoryFilter"
import Collection from "@/components/shared/Collection"
import Search from "@/components/shared/Search"

import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';

const  page = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 100
  })

  return (
    <>
    <section className=" bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left ">Prompts preview</h3>
    </section>
    
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
          limit={100}
          page={page}
          totalPages={events?.totalPages}
        />

    </section>
    </>
  )
}

export default page