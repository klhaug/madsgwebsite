import React from 'react'

type ConcertCardProps = {
  venue: string;
  location: string;
  datetime: string; // Consider using Date if handling actual Date objects
  ticketUrl: string;
};

export default function ConcertCard({venue, location, datetime, ticketUrl}: ConcertCardProps) {
  
  const timeStamps = new Date(datetime)
  
  const month = timeStamps.getMonth();
  const date = timeStamps.getDate();
  const day = timeStamps.getDay();
  const hours = timeStamps.getHours()
  const minutes = datetime.substring(14,16)

  const months = [
    "Januar", "Februar", "Mars", "April", "Mai", "Juni", 
    "Juli", "August", "September", "Oktober", "November", "Desember"
  ];

  const weekDays = [
    "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag","Lørdag","Søndag"
  ]
  
  

  return (
    <div className='border-b py-8
    '>
      <div  className='grid grid-cols-[0.5fr_1fr_2fr] auto-cols-min '>
            <div className='flex flex-col justify-between col-span-1 mr-2'>
              <h3 className='font-sec font-semibold text-xl tracking-wide min-w-[85px]'>{date}. {months[month].substring(0,3)}</h3>
              <p>{weekDays[day].toLowerCase().substring(0,3)} - {hours}:{minutes}</p>
            </div>
            <div className='flex flex-col justify-between '>
              <h3 className='font-sec font-semibold text-xl tracking-wider'>{venue}</h3>
              <p>{location}</p>
            </div>
        <div className='flex items-center justify-end '>
          <a href={ticketUrl} target='_blank' className="bg-blue-main flex items-center gap-3 lg:max-w-[176px] justify-center text-white px-6  h-14 font-sec hover:bg-blue-hover">Billetter</a></div>
      </div>
    </div>
  )
}
