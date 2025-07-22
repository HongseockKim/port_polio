export const imageLoader = (src :string) : Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error(`Failed to load ${src}`));
        img.src = src;
    });
};


interface SuspenseImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const SuspenseImage = ({ src, alt, className }: SuspenseImageProps) => {
    return <img src={src} alt={alt} className={className} />;
};
