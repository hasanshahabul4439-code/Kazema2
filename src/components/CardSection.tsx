import Card from "./card";

const cards = [
    {
        title: "Mastering Sustainable Botanical Space Designs",
        description:
            "A deep dive into regenerative architecture where living systems are integrated into modern homes.",
        image:
            "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
        tag: "Eco Focus",
    },
    {
        title: "Elevating Modern Urban Jungle Lifestyles",
        description:
            "Transforming concrete spaces into lush green sanctuaries with tropical plants.",
        image:
            "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
        tag: "Urban Edit",
    },
    {
        title: "Curating Restorative Zen Garden Spaces",
        description:
            "Design calming environments with minimalist greenery and natural balance.",
        image:
            "https://res.cloudinary.com/dtpttuebn/image/upload/v1774588006/Interior_Bar_Image_k1fray.webp",
        tag: "Mindfulness",
    },
];

export default function CardSection() {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    );
}