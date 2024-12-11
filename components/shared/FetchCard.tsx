import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

type CardProps = {
  event: IEvent,
  hasOrderLink?: boolean,
  hidePrice?: boolean
}

const FetchCard = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
     <div className="group relative flex min-h-[150px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
          <AspectRatio ratio={1 / 1} style={{backgroundImage: `url(${event.imageUrl})`}} className="bg-cover bg-center">
          <div className="w-full absolute bg-black md:bg-opacity-0 bottom-0 min-h-[30px] gap-3 p-3 md:gap-4">
            
            <div className="flex-between w-full">
              <p className="p-medium-8 md:p-medium-10 text-grey-400 flex justify-center items-center gap-2">
                <Image src="/assets/icons/machine-learning.png" alt="organizer" width={20} height={20} />
                {/* <span>{event.organizer.firstName} {event.organizer.lastName}</span> */}
              </p>
              {/* <span className="p-medium-8 md:p-medium-10 p-semibold-10 w-min rounded-full bg-green-300 md:bg-opacity-80 px-4 py-1 text-green-60">
                  {event.isFree ? 'FREE' : `$${event.price}`}
              </span> */}
            </div>
          </div>
          <Link 
          href={`/events/${event._id}`} 
          className="flex-center flex-grow h-full w-full bg-white opacity-0 transition-opacity duration-100 hover:opacity-20 rounded-xl"
          />
          {isEventCreator && (
          <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white opacity-60 p-2 shadow-sm transition-all">
            <Link href={`/events/${event._id}/update`}>
              <Image src="/assets/icons/edit.svg" alt="edit" width={15} height={15} />
            </Link>
          </div>
        )}
          </AspectRatio>
          {/* <div className="w-full md:absolute bg-black md:bg-opacity-50 bottom-0 min-h-[120px] gap-3 p-5 md:gap-4 relative">
            {!hidePrice && <div className="flex-between w-full gap-2">
                <div className='flex'>
                <span className="p-semibold-14 w-min rounded-full bg-green-300 px-4 py-1 text-green-60">
                  {event.isFree ? 'FREE' : `$${event.price}`}
                </span>
                <p className="p-semibold-14 w-min rounded-full bg-gray-50 bg-opacity-20 px-4 py-1 text-violet-100 line-clamp-1 mx-1">
                  {event.category.name}
                </p>
                </div>
                <p className="text-sm text-gray-400">
                {formatDateTime(event.startDateTime).dateTime}
              </p>
            </div>}

            <Link href={`/events/${event._id}`} className='min-w-full'>
              <p className="p-medium-12 md:p-medium-14 line-clamp-2 flex-1 text-white min-h-[50px] pt-2 leading-4">{event.title}</p>
            </Link>

            <div className="flex-between w-full">
              <p className="p-medium-10 md:p-medium-12 text-grey-400 flex justify-center items-center gap-2">
                <Image src="/assets/icons/machine-learning.png" alt="organizer" width={25} height={25} />
                <span>{event.organizer.firstName} {event.organizer.lastName}</span>
              </p>

              {hasOrderLink && (
                <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
                  <p className="text-primary-500">Order Details</p>
                  <Image src="/assets/icons/arrow.svg" alt="search" width={10} height={10} />
                </Link>
              )}
            </div>

          </div> */}
        
    </div>
  )
}

export default FetchCard