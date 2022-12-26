import React, { useState } from "react";
import { CheckboxContainer, StyledCheckbox, Text } from "./styles";
import { BsCheckLg } from 'react-icons/bs';

interface Props {
    checked: boolean;
    children: string;
}

function Checkbox({ children, ...props }: Props) {
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange() {
        setChecked(!checked);
    }
    return (
        <CheckboxContainer
            checked={checked}
            onClick={handleCheckboxChange}
        >

            <StyledCheckbox checked={checked}>
                <BsCheckLg />
            </StyledCheckbox>
            <Text checked={checked}>{children}</Text>
        </CheckboxContainer>
    )
}

export default Checkbox;