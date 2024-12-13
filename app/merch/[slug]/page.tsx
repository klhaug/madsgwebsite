import { getMerch } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function MerchPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    console.log(slug)

    const merch = await getMerch();
    const correctMerch = merch.filter((merch) => merch.slug === slug)
    console.log(correctMerch)

    return(
        <div className="mx-auto h-[1080px]">
            <div className="flex">
                <div>{correctMerch[0].title} </div>
                <div>
                    <Link className="bg-blue-main text-white px-8 py-4" href={"/"} >Tilbake</Link>
                </div>
            </div>
        </div>
    )
}