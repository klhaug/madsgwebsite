import Image from "next/image";



function MerchCard({title, description, image, price}){  
    return (
        <div className="bg-white px-5 py-8 flex flex-col justify-center items-center">
            <div>
                <Image src={image} height={400} width={400} alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <h3>{price}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}



export default MerchCard;