import Image from "next/image";
import Link from "next/link";

export const Imgtext = ({ imageUrl, text, link }: { imageUrl: string; text: string, link: string }) => {
    return (
        <div className="flex flex-col items-center shadow-2xl p-3 rounded-2xl gap-3 text-center">
            <Link className="hover:scale-105 transition-transform duration-200" href={link}>
            <Image src={imageUrl} alt={text} width={100} height={100} className="rounded-full grayscale-100 hover:grayscale-0 transition-all duration-200" />
            </Link>
            <p className="font-bold">{text}</p>
        </div>
    )
}