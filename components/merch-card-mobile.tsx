import Image from "next/image";

type MerchCardMobileProps = {
    title: string;
    description: string;
    image: string; // Consider using Date if handling actual Date objects
    price: string;
    storeUrl: string;
  };


function MerchCardMobile({title, description, image, price, storeUrl}:MerchCardMobileProps){  
    return (
        <div className="bg-white px-5 py-8 lg:px-10 lg:py-10 w-full   flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
             <div>
                <Image src={image} height={400 } width={400} alt={title} />
                
            </div> 
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl">{title}</h2>
                    <p className="leading-8 max-w-[500px]">{description}</p>
                    <h3 className="text-2xl font-sec font-medium tracking-wider">Pris: {price},-</h3>
                </div>
                <a href={storeUrl} target="blank" className="bg-blue-main flex items-center gap-3 lg:max-w-[176px] justify-center text-white px-6 w-full h-11 font-sec hover:bg-blue-hover"><Image src={"/shopping_cart.svg"} width={20} height={20} alt="shopping cart svg" />Kjøp nå</a>
            </div>
        </div>
    )
}



export default MerchCardMobile;