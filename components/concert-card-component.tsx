import React from 'react'

export default function ConcertCard({_id, createdAt, venue, location, datetime, ticketUrl}) {
  
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
    <div key={_id} className='table-row-group'>
      <div  className='table-row border-b text'>
          <div className='table-cell'>
            <h3 className='font-sec font-semibold text-xl tracking-wider'>{date}. {months[month].substring(0,3)}</h3>
            <p>{weekDays[day].toLowerCase().substring(0,3)} - {hours}:{minutes}</p>
          </div>
          <div className='table-cell'>
            <h3 className='font-sec font-semibold text-xl tracking-wider'>{venue}</h3>
            <p>{location}</p>
          </div>
        <div className='flex justify-end '>
          <a href={ticketUrl} target='_blank' className="bg-blue-main flex items-center gap-3 lg:max-w-[176px] justify-center text-white px-6  h-11 font-sec hover:bg-blue-hover">Billetter</a></div>
      </div>
    </div>
  )
}
