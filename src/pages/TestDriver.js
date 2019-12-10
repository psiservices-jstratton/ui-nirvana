import React from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'reactstrap';
import ToolBar from '../components/navigation/ToolBar';

export default function TestDriver() {
    const TestView = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: space-between;
    `;

    return (
        <Container fluid>
            <TestView>
                <Row>
                    <Col xs="auto">
                        Test Driver content here
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ToolBar />
                    </Col>
                </Row>
            </TestView>
        </Container>
    );
}