import { FaWhatsapp } from "react-icons/fa";
import { useConfig } from "../../contexts/ConfigContext";
import { Button } from "./styles";

export function ButtonWhatsapp() {
    const {config} = useConfig();

    const number = config.whatsapp.replace(/\D/g, '');

    return (
        <Button href={`https://wa.me/55${number}`} target={'_blank'}>
            <FaWhatsapp />
        </Button>
    )
}