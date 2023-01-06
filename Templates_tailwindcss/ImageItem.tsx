import Image from "next/image";
import toBase64 from "../../functions/toBase64";
import shimmerImage from "./loading/shimmerImage";
interface ImageItemProps {
  src: string;
  myElementIsVisible: boolean;
  objectFit?: "cover" | "contain";
  width?: number | string;
  height?: number | string;
  layout?: "fill" | "responsive";
  quality?: number;
  alt?: string;
  className?: string;
  animate?: boolean;
  onLoadingComplete?: () => void;
}
export default function ImageItem(props: ImageItemProps) {
  return (
    <Image
      objectFit={props.objectFit ? props.objectFit : "cover"}
      width={props.width ? props.width : "100%"}
      height={props.height ? props.height : "100%"}
      layout={props.layout ? props.layout : "responsive"}
      quality={props.quality ? props.quality : 100}
      alt={props.alt ? props.alt : "image"}
      className={`
            ${
              props.animate
                ? "transform transition-all duration-150 ease-out"
                : ""
            }
            
                ${
                  props.myElementIsVisible
                    ? "visible scale-100"
                    : "invisible scale-0"
                } 
                ${props.className}
            `}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmerImage(700, 475)
      )}`}
      src={props.src}
      onLoadingComplete={(ev) => props.onLoadingComplete}
    />
  );
}
