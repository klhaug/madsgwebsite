

import { getConcerts } from "@/sanity/sanity-utils";
import ConcertCard from "./concert-card-component";
import ConcertCardMobile from "./concert-card-mobile-component";


export default async function ConcertCardList() {
    const concerts = await getConcerts();
    console.log("Cardlist rendered")
  return (
       <div>
            <div className="hidden lg:flex flex-col py-8">
                    {concerts.length > 0 ? concerts.map((concert) =>{
                        const {_id, venue, location, ticketUrl, datetime} = concert;
                        return(
                        <ConcertCard key={_id} venue={venue} location={location} ticketUrl={ticketUrl} datetime={datetime} />
                        )
                    }): <p>Det er ingen kommende konserter for øyeblikket.</p>}
                    </div>
                    <div className="lg:hidden flex flex-col gap-12 py-11">
                    {concerts.length > 0 ? concerts.map((concert) =>{
                        const {_id, venue, location, ticketUrl, datetime} = concert;
                        return(
                        <ConcertCardMobile key={_id} venue={venue} location={location} ticketUrl={ticketUrl} datetime={datetime}  />
                        )
                    }) : <p className="text-center">Det er ingen kommende konserter for øyeblikket.</p>}
                    </div>
        </div>
    
  )
}

