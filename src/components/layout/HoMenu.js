
import MenuItem from "@/components/menu/MenuItem";
import SectionHeader from "@/components/layout/SectionHeader"; 
export default function HoMenu() {
    return (
        <section className="py-8">
            <SectionHeader 
                subHeader={'Check Out'}
                mainHeader={'Menu'}
            />
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
}

