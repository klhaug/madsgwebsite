import Image from "next/image";
import Link from "next/link";



function MerchCard({title, description, image, price, slug}){  
    return (
        <div className="bg-white px-5 py-8 lg:px-10 lg:py-10 w-full max-w-[390px] lg:max-w-[1260px] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
            <div className="lg:min-w-[300px]">
                <Image src={image} height={350} width={350} alt={title} />
            </div>
            <div className="flex flex-col gap-6 mr-7">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl">{title}</h2>
                    <p className="leading-8 max-w-[500px]">{description}</p>
                    <h3 className="text-2xl font-sec font-medium tracking-wider">Pris: {price},-</h3>
                </div>
                <Link href={`/merch/${slug}`} className="bg-blue-main flex items-center gap-3 lg:max-w-[176px] justify-center text-white px-6 w-full h-11 font-sec hover:bg-blue-hover"><Image src={"/shopping_cart.svg"} width={20} height={20} alt="shopping cart svg" />Kjøp nå</Link>
            </div>
        </div>
    )
}



export default MerchCard;