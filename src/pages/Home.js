import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Home() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle('This is the home page.');
    });

    return (
        <Container>
            <Row>
                <Col xs="auto">
                    <h2 role="heading">{title}</h2>
                </Col>
            </Row>
        </Container>
    );
}