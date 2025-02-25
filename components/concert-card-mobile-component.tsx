import React from 'react'
type ConcertCardPropsMobile = {
  venue: string;
  location: string;
  datetime: string; // Consider using Date if handling actual Date objects
  ticketUrl: string;
};

export default function ConcertCardMobile({venue, location, datetime, ticketUrl}:ConcertCardPropsMobile) {
  
  const timeStamps = new Date(datetime)

  const month = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', month: 'short' })
  const date = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', day: 'numeric' })
  const day = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', weekday: 'short' })
  const hours = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', hour: '2-digit' })
  const minutes = timeStamps.toLocaleString('no-NO', { timeZone: 'Europe/Oslo', minute: '2-digit' }).padStart(2, '0');



  

  return (
    <div className=' py-4'>
      <div  className='grid grid-cols-[0.75fr_1.5fr] '>
              <div className='flex flex-col justify-center items-center col-span-1 mr-2 border-r border-r-black'>
                <h3 className='font-sec font-semibold text-xl tracking-wide min-w-[85px]'>{date} {month}</h3>
              </div>
              <div className='flex flex-col justify-between items-center py-4 '>
                <h3 className='font-sec font-semibold text-xl py-4 px-2 tracking-wider text-center'>{venue}</h3>
                <p>{location}</p>
                <p>{day} - {hours}:{minutes}</p>
            </div>
        <div className='mt-4 col-span-2 '>
        {ticketUrl ? <a href={ticketUrl} target='_blank' className="bg-blue-main flex items-center gap-3 lg:max-w-[176px] justify-center text-white px-6  h-14 font-sec hover:bg-blue-hover">Billetter</a>
          :<p className="flex items-center gap-3 min-w-[119px] border border-solid lg:max-w-[176px] justify-center text-blue-main  px-6  h-14 font-sec ">Gratis</p> }
          </div>
      </div>
    </div>
  )
}
