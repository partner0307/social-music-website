import Image, { ImageProps } from "@/components/basic/img";
import { HoverableMediaContainer } from "./style";
import { useState } from "react";

interface MediaOption {
    type: 'gif' | 'video',
    src: string;
}

interface HoverableMediaProps {
    imageOption: ImageProps;
    mediaOption: MediaOption
}

const HoverableMedia = ({
    imageOption,
    mediaOption
}: HoverableMediaProps) => {

    const [hovered, setHovered] = useState<boolean>(false);
    const { type, src } = mediaOption;

    return (
        <HoverableMediaContainer onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>
            {
                !hovered
                    ? <Image {...imageOption} />
                    : <Image {...{ ...imageOption, src: src }} />
            }
        </HoverableMediaContainer>
    )
}

export default HoverableMedia;
