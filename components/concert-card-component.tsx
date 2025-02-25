import React from 'react'

type ConcertCardProps = {
  venue: string;
  location: string;
  datetime: string; // Consider using Date if handling actual Date objects
  ticketUrl: string;
};

export default function ConcertCard({venue, location, datetime, ticketUrl}: ConcertCardProps) {
  
  const timeStamps = new Date(datetime)

  const month = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', month: 'short' })
  const date = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', day: 'numeric' })
  const day = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', weekday: 'short' })
  const hours = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', hour: '2-digit' })
  const minutes = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', minute: '2-digit' }).padStart(2, '0');



  
  

  return (
    <div className='border-b py-8
    '>
      <div  className='grid grid-cols-[0.5fr_2.5fr_1fr] auto-cols-min '>
            <div className='flex flex-col justify-between col-span-1 mr-2'>
              <h3 className='font-sec font-semibold text-xl tracking-wide min-w-[85px]'>{date} {month}</h3>
              <p>{day} - {hours}:{minutes}</p>
            </div>
            <div className='flex flex-col justify-between '>
              <h3 className='font-sec font-semibold text-xl tracking-wider'>{venue}</h3>
              <p>{location}</p>
            </div>
        <div className='flex items-center justify-end '>
          {ticketUrl ? <a href={ticketUrl} target='_blank' className="bg-blue-main flex items-center gap-3 lg:max-w-[176px] justify-center text-white px-6  h-14 font-sec hover:bg-blue-hover">Billetter</a>
          :<p className="flex items-center gap-3 min-w-[119px] lg:max-w-[176px] justify-center text-blue-main  px-6  h-14 font-sec ">Gratis</p> }
          </div>
      </div>
    </div>
  )
}
