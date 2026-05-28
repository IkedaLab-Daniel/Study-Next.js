import { getAllModels } from "@/app/lib/models"
import Image from "next/image"

export default async function Models() {
    const res = await getAllModels()

    return(
        <div className="flex flex-col gap-2 items-center">
            {res.map((item, index) => (
                <div key={index} className="w-100 border-2 rounded-md p-4">
                    <Image 
                        src={item.image}
                        width={600}
                        height={750}
                        alt="item image"
                        className="rounded-md"
                    />
                    <h2 className="font-bold text-2xl my-2">{item.name}</h2>
                    <p className="mb-2">{item.description}</p>
                    <p>Likes: {item.likes}</p>
                    <p>Category: {item.category}</p>
                    <p>Date added: {item.dateAdded}</p>
                </div>
            ))}
        </div>
    )

}