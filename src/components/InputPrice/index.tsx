import { Container, InputText, Label, Subtitle, Error, Span, InputContent } from "./styles";

interface Props {
    title?: string;
    subtitle?: string;
    disabled?: boolean;
    value?: string;
    onChange?: any;
    onBlur?: any;
    error?: string;
}

export function InputPrice({ title, subtitle, value, onChange, onBlur, error }: Props) {
    return (
        <Container>
            {title && <Label>{title}</Label>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            <InputContent>
                <InputText type={'text'} value={value} onChange={onChange} onBlur={onBlur} />
                <Span>R$</Span>
            </InputContent>
            {error &&
                <Error>{error}</Error>
            }
        </Container>
    )
}