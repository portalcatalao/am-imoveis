import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button, Container } from "./styles";

export function Pagination({ total, page, onChange }) {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        if (total > 0) {
            let pages = [];
            for (let i = 1; i <= Math.ceil(total / 15); i++) {
                pages.push(i);
            }
            setPages(pages);
        }
    }, [total]);

    if (total === 0) {
        return null;
    }
    return (
        <Container>
            <Button onClick={() => {
                { page > 1 && onChange(page - 1) }
            }}>
                <FiChevronLeft />
            </Button>
            {
                pages.map(item => (
                    <Button key={item} active={page === item} onClick={() => onChange(item)}>{item}</Button>
                ))
            }
            <Button onClick={() => {
                { page < total && onChange(page + 1) }
            }}>
                <FiChevronRight />
            </Button>
        </Container>
    )
}