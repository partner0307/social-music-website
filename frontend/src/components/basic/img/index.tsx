import { ImageContainer, StyledFlexPropsType, StyledImage } from "./style";

export interface ImageProps {
    src: string,
    alt: string,
    $style?: StyledFlexPropsType
}

const Image = ({ src, alt, $style }: ImageProps) => {
    return (
        <ImageContainer $style={$style || {}}>
            <StyledImage src={src} alt={alt} />
        </ImageContainer>
    )
}

export default Image;
