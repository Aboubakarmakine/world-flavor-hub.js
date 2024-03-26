
import Heros from "@/components/layout/Heros";
import HoMenu from "@/components/layout/HoMenu";
import SectionHeader from "@/components/layout/SectionHeader";
export default function Home() {
  return (
   <>
   <Heros/>
   <HoMenu/>
   <section className="my-16">
    <SectionHeader
    subHeader={'Our story'}
    mainHeader={'About Us'}
    />
    <div className=" flex flex-col gap-4">
    <p>in the flavors of authenticity at our restaurant,
       where we serve the finest Gobla food in town. 
      It is not just a meal; it is a culinary journey to savor the best
       </p>
       <p>in the flavors of authenticity at our restaurant,
       where we serve the finest Gobla food in town. 
      It is not just a meal; it is a culinary journey to savor the best
       </p>
       <p>in the flavors of authenticity at our restaurant,
       where we serve the finest Gobla food in town. 
      It is not just a meal; it is a culinary journey to savor the best
       </p>
       <section className="text-center my-8">
        <SectionHeader subHeader=
        {'Dont Hasite to '}
        mainHeader=
        {'Contect us'}
        />
        <div className="mt-8">
        <a className="text-4xl " href="PhoneN:249-996- 6765-44">
        +249-996- 6765-44
        </a>
        </div>
       </section>
    </div>
   </section>

   </>
  );
}
