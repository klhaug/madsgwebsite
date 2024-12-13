import Image from "next/image";



function MerchCard({title, description, image, price}){  
    return (
        <div className="bg-white shadow-lg px-5 py-8 max-w-[390px] lg:max-w-[1260px] flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="min-w-[350px]">
                <Image src={image} height={400} width={400} alt={title} />
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl">{title}</h2>
                    <h3 className="text-xl font-sec font-medium">Pris: {price},-</h3>
                    <p className="leading-8">{description}</p>
                </div>
                <button className="bg-blue-main flex items-center gap-3 lg:max-w-[176px] justify-center text-white px-6 w-full h-11 font-sec hover:bg-blue-hover"><Image src={"/shopping_cart.svg"} width={20} height={20} alt="shopping cart svg" />Kjøp nå</button>
            </div>
        </div>
    )
}



export default MerchCard;