
import Link from 'next/link';
export default function header(){
    return(
        <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-3xl" href={'/'}>
          GLOBAL FOOD
          </Link>
        <nav className="flex items-center gap-8 font-semibold"> 
          <Link href={'/'}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
        </nav>
        <nav className='flex items-center gap-4'>
          <Link href={'/Login'}>Login</Link>
        <Link href={'/register'}className="bg-primary  text-white px-6 py-2">
          Register</Link>
        </nav>

       </header>
    );

}