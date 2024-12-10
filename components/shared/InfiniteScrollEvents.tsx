'use clients'

import { IEvent } from '@/lib/database/models/event.model'
import Image from "next/image";

import FetchCard from './FetchCard'

type CollectionProps = {
  data: IEvent[],
  emptyTitle: string,
  emptyStateSubtext: string,
  page?: number | string,
  urlParamName?: string,
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
}

const InfiniteScrollEvents = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          
            {data.map((event) => {
              const hasOrderLink = collectionType === 'Events_Organized';
              const hidePrice = collectionType === 'All_Events';

              return (
                <li key={event._id} className="flex justify-center">
                  <FetchCard event={event} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
                </li>
              )
            })}


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

export default InfiniteScrollEvents