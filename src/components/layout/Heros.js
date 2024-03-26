import Right from '../icons/Right';
import Image from 'next/image';
export default function Heros() {
    return (
        <section className="grid grid-cols-2">
            <div className="py-8">
                <h1 className='text-3xl semibold'>Busy families love Gobla Food</h1>
                <p className='my-5 text-sm'>Experience the magic of WorldFlavor - where every 
          dish becomes a culinary delight
                    </p>
                    <div className="flex gap-5">
                        <button className="bg-primary flex gap-2 text-white px-6 py-2">
                            Order Now
                            <Right/>
                        </button>
                        <button className="flex gap-2 py-2">
                            Learn More
                            <Right/>
                        </button>
                    </div>

            </div>
            <div className=" relative">
                <Image src='/dish-3.png' layout='fill' objectFit='contain' alt='GLOBAL FOOD' />
            </div>
        </section>
    );
}

