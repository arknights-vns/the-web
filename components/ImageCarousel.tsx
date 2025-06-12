import Image from "next/image";

type ImageCarouselProps = {
    images: string[];
};

export default function ImageCarousel(props: ImageCarouselProps) {
    return (
        <div className={"carousel w-full"}>
            {props.images.map((image, i) => {
                return (
                    <div
                        id={`slide${i}`}
                        key={`slide${i}`}
                        className={"carousel-item w-full"}
                    >
                        <Image
                            src={image}
                            alt={`slide${i}`}
                            className={"w-full"}
                            width={2048}
                            height={2048}
                        />
                    </div>
                );
            })}
        </div>
    );
}
