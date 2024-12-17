import { getMerch } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function MerchPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    console.log(slug)

    const merch = await getMerch();
    const correctMerch = merch.filter((merch) => merch.slug === slug)
    console.log(correctMerch)

    return(
        <div className="m-auto">
            <div className=" max-w-[1728px] h-[600px] md:h-[800px] mx-24 flex  justify-center items-center">
                <div className="max-w-[1300px] flex flex-wrap gap-8 items-center md:flex-nowrap" >
                    <div className="md:min-w-[300px]">
                        <Image src={correctMerch[0].image} alt={correctMerch[0].title} width={350} height={350} />
                    </div>
                    <div className="flex flex-col gap-4 justify-center max-w-[715px]">
                        <h1 className="font-sec text-4xl font-regular">Takk for at du ønsker å kjøpe vinyl!</h1>
                        <p className="font-sec leading-8 tracking-wide font-regular">Betalingsløsningen min er dessverre ikke tilgjengelig enda, så ta kontakt på<b> mads.gjetmundsen@gmail.com</b> eller <b>+46 902 35 356</b> så finner vi en løsning!</p>
                        <Link className="flex md:max-w-[175px] justify-center items-center h-11 px-6 bg-blue-main hover:bg-blue-hover text-white" href={"/"}> ⬅ Tilbake</Link>
                    </div>
            </div>
            </div>
        </div>
    )
}