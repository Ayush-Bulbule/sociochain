import Ad from "../../public/ad.jpg"
import Image from 'next/image'

const RightBar = () => {
    return (
        <div className="text-white flex  items-center flex-col  h-screen ">
            <h1 className="text-[1.35rem] pt-5 font-bold ">Advertisements</h1>


            <div className="mt-5 border border-gray-600 w-64 bg-[#1e1f23] rounded-lg">
                <Image src={Ad} className="rounded-t-lg" />
                <div className="p-4">
                    <h1 className="text-lg font-bold tracking-wide">Heading..</h1>
                    <p className=" text-justify">Lorem ipsum eew dolor sitllhhvwehvk kjvbkrv kjvbw le jkboweuvk ebvwe</p>
                </div>
            </div>
        </div>
    )
}

export default RightBar