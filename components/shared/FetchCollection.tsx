'use clients'

import { IEvent } from '@/lib/database/models/event.model'

import InfiniteScrollEvents from './InfiniteScrollEvents'
import FetchCard from './FetchCard'
import Pagination from './Pagination'

type CollectionProps = {
  data: IEvent[],
  emptyTitle: string,
  emptyStateSubtext: string,
  limit: number,
  page: number | string,
  totalPages?: number,
  urlParamName?: string,
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
}

const FetchCollection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {

  
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
  
          <ul className="grid w-full grid-cols-1 gap-1 sm:grid-cols-3 lg:grid-cols-6 xl:gap-1">
            {data.map((event) => {
              const hasOrderLink = collectionType === 'Events_Organized';
              const hidePrice = collectionType === 'All_Events';

              return (
                <li key={event._id} className="flex justify-center">
                  <FetchCard event={event} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
                </li>
              )
            })}
            {/* <InfiniteScrollEvents /> */}
          </ul>
          {totalPages > 1 && (
            <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages} />
          )}
        </div>
      ): (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  )
}

export default FetchCollection