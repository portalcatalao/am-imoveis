import {useRef, useEffect, useState} from "react";
import { getUrl } from "../../../../helpers/functions";
import { Container, Image } from "./styles";

export function Slide({ image }) {
    const ref = useRef(null);
    const [height, setHeight] = useState<string | number>('auto');
    useEffect(() => {
        const width = ref.current.offsetWidth;
        setHeight(width * 0.6);
    }, []);

    return (
        <Container ref={ref} style={{
            height: height
        }}>
            <Image src={getUrl(image)} />
        </Container>
    )
}