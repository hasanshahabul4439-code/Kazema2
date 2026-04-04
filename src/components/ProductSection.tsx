import Card from "./card";
import SectionHeader from "./SectionHeader";

const products = [
    {
        title: "Standard Portable Toilet",
        description: "High-quality, durable portable toilet units perfect for construction sites and outdoor events.",
        image: "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
        tag: "Portable Sanitation",
    },
    {
        title: "Luxury VIP Restroom Trailer",
        description: "Premium restroom facilities featuring modern amenities for high-end corporate events and weddings.",
        image: "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
        tag: "VIP Units",
    },
    {
        title: "Modular Site Cabin",
        description: "Robust modular cabins optimized for temporary office spaces, security posts, and worker accommodations.",
        image: "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
        tag: "Modular Spaces",
    },
];

export default function ProductSection() {
    return (
        <section className="py-20 w-full">
            <SectionHeader
                title="Our Products Range"
                description="Explore our range of high-quality products designed to meet your needs."
            />
            <div className="py-2 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <Card key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
