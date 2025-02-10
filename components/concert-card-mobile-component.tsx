import React from 'react'

export default function ConcertCardMobile({_id, createdAt, venue, location, datetime, ticketUrl}) {
  
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
    <div key={_id} className=' py-4'>
      <div  className='grid grid-cols-[0.75fr_1.5fr] gap-7 '>
              <div className='flex flex-col justify-center items-center col-span-1 mr-2 border-r border-r-black'>
                <h3 className='font-sec font-semibold text-xl tracking-wide min-w-[85px]'>{date}. {months[month].substring(0,3)}</h3>
              </div>
              <div className='flex flex-col justify-between items-center py-4 '>
                <h3 className='font-sec font-semibold text-xl tracking-wider'>{venue}</h3>
                <p>{location}</p>
                <p>{weekDays[day].toLowerCase().substring(0,3)} - {hours}:{minutes}</p>
            </div>
        <div className='col-span-2 '>
          <a href={ticketUrl} target='_blank' className="bg-blue-main flex items-center gap-3 justify-center text-white px-6 h-11 font-sec hover:bg-blue-hover">Billetter</a></div>
      </div>
    </div>
  )
}
