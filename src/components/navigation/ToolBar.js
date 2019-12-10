import React from 'react';
import styled from 'styled-components/macro';
import {
    Button,
    Navbar,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

export default function ToolBar() {
    const ToolbarButtons = styled.div`
      margin: 0 5px;
      
      .btn {
        margin: 0 5px;
      }
      .btn:last-child {
        margin: 0;
      }
    `;

    return (
        <Navbar fixed="bottom">
            <Pagination>
                <PaginationItem>
                    <PaginationLink previous />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next />
                </PaginationItem>
            </Pagination>
            <ToolbarButtons>
                <Button color="secondary">
                    Flag
                </Button>
                <Button color="primary">
                    Answer
                </Button>
            </ToolbarButtons>
        </Navbar>
    );
}