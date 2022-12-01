import {
    Container,
    Row,
    Col,
} from "reactstrap";

import { SearchParams, SearchResults } from '../components';

export const Search = () => {
    return (
        <div className="section">
            <Container>
                <Row>
                    <Col>
                        <SearchParams />
                    </Col>
                    <Col>
                        <SearchResults />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
