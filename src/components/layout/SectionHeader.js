export default function SectionHeader({ subHeader, mainHeader }) {
    return (
        <div className="mb-4">
            <h3 className="text-primary font-bold text-2xl">{subHeader}</h3>
            <h2 className="text-primary font-bold text-2xl">{mainHeader}</h2>
        </div>
    );
}
