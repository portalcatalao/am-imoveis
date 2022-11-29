import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { DropdownButton, Container, DropdowBody } from "./styles";

export function Dropdown({ title, children }) {
    const [show, setShow] = useState(false);
    return (
        <Container onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <DropdownButton>
                {title}
                <FiChevronDown />
            </DropdownButton>
            {show && <DropdowBody>
                {children}
            </DropdowBody>}
        </Container>
    )
}