import Image from 'next/image';
import Link from 'next/link';

interface ProyectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export const ProyectCard = ({ title, description, imageUrl, link }: ProyectCardProps) => {
    return (
        <div className="rounded-lg flex flex-col items-center overflow-hidden shadow-lg">
            <Link href={link}>
            <Image src={imageUrl} alt={title} width={500} height={300} className='rounded' />
            </Link>
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                
            </div>
        </div>
    );
}