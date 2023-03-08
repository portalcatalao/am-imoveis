import { IPage } from "../../types/interfaces";
import { Container, Content, Subtitle, Title } from "./styles";

interface Props {
    page: IPage;
}

export function WebPage({page}: Props) {

    function createMarkup(content) {
        return { __html: content };
    }

    return (
        <Container>
            <Content>
                <Title>{page?.title ?? ''}</Title>
                <Subtitle>{page?.subtitle ?? ''}</Subtitle>
                {page?.content && <div dangerouslySetInnerHTML={createMarkup(page.content)} />}
            </Content>
        </Container>
    )
}