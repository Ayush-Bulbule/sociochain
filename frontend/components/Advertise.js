import Ad from "../public/ad.jpg"
import Image from 'next/image'

export default function Advertise() {
    return (
        <div className="flex flex-col items-center space-y-5 ">
            {/* <h1 className="text-xl uppercase tracking-wide font-bold">Advertisements</h1> */}
            <div className="rounded-lg flex flex-col justify-center items-center max-w-2xl bg-white border p-6 border-gray-200 shadow dark:bg-gray-800 dark:border-gray-70 w-80">
                <Image src={Ad} className="rounded-t-lg" />
                <div className="p-4">
                    <h1 className="text-lg font-bold tracking-wide">Heading..</h1>
                    <p className=" text-justify">Lorem ipsum eew dolor sitllhhvwehvk kjvbkrv kjvbw le jkboweuvk ebvwe</p>
                </div>
            </div>
            <div className="rounded-lg flex flex-col justify-center items-center max-w-2xl bg-white border p-6 border-gray-200 shadow dark:bg-gray-800 dark:border-gray-70 w-80">
                <Image src={Ad} className="rounded-t-lg" />
                <div className="p-4">
                    <h1 className="text-lg font-bold tracking-wide">Heading..</h1>
                    <p className=" text-justify">Lorem ipsum eew dolor sitllhhvwehvk kjvbkrv kjvbw le jkboweuvk ebvwe</p>
                </div>
            </div>
        </div>
    )
}