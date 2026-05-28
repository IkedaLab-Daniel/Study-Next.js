import { getAllModels } from "@/app/lib/models"
import Image from "next/image"

export default async function Models() {
    const res = await getAllModels()

    return(
        <>
            {res.map((item, index) => (
                <div key={index}>
                    <Image 
                        src={item.image}
                        width={50}
                        height={50}
                        alt="item image"
                    />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.likes}</p>
                    <p>Category: {item.category}</p>
                    <p>Date added: {item.dateAdded}</p>
                </div>
            ))}
        </>
    )

}