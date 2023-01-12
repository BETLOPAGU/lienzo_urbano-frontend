import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardLink,
    CardTitle,
    Input,
    InputGroup,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Carousel,
    CarouselItem,
    CarouselIndicators
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { LUNavbar } from "LienzoUrbano/components/LUNavbar.jsx";

const items = [
    {
        content: (
            <img
                alt="..."
                className="d-block"
                src={require("assets/img/shirt.png")}
            />
        ),
        altText: "",
        caption: "",
        src: "0"
    },
    {
        content: (
            <img
                alt="..."
                className="d-block"
                src={require("assets/img/shorts.png")}
            />
        ),
        altText: "",
        caption: "",
        src: "1"
    },
    {
        content: (
            <img
                alt="..."
                className="d-block"
                src={require("assets/img/tshirt.png")}
            />
        ),
        altText: "",
        caption: "",
        src: "2"
    }
];

export const OpenPost = ({ idImagen }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);
    const wrapper = React.useRef(null);
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        wrapper.current.scrollTop = 0;
        document.body.classList.add("product-page");
        return function cleanup() {
            document.body.classList.remove("product-page");
        };
    }, []);
    const onExiting = () => {
        setAnimating(true);
    };

    const onExited = () => {
        setAnimating(false);
    };

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    const deleteQuantity = () => {
        setQuantity(quantity === 0 ? 0 : quantity - 1);
    };
    const addQuantity = () => {
        setQuantity(quantity === 100 ? 100 : quantity + 1);
    };
    return (
        <>
            <LUNavbar />
            <div className="wrapper" ref={wrapper}>
                <br /><br /><br /><br />
                <div className="section">
                    <Container>
                        <Row>
                            <h1>{idImagen}</h1>
                            <Col lg="6" md="12">
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={next}
                                    previous={previous}
                                >
                                    <CarouselIndicators
                                        className="mt-5"
                                        items={items}
                                        activeIndex={activeIndex}
                                        onClickHandler={goToIndex}
                                    />
                                    {items.map((item, key) => {
                                        return (
                                            <CarouselItem
                                                onExiting={onExiting}
                                                onExited={onExited}
                                                key={key}
                                                className="justify-content-center"
                                            >
                                                {item.content}
                                            </CarouselItem>
                                        );
                                    })}
                                    <a
                                        className="carousel-control-prev"
                                        data-slide="prev"
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            previous();
                                        }}
                                        role="button"
                                    >
                                        <Button
                                            className="btn-icon btn-round"
                                            color="warning"
                                            name="button"
                                            size="sm"
                                            type="button"
                                        >
                                            <i className="tim-icons icon-minimal-left" />
                                        </Button>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        data-slide="next"
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            next();
                                        }}
                                        role="button"
                                    >
                                        <Button
                                            className="btn-icon btn-round"
                                            color="warning"
                                            name="button"
                                            size="sm"
                                            type="button"
                                        >
                                            <i className="tim-icons icon-minimal-right" />
                                        </Button>
                                    </a>
                                </Carousel>
                            </Col>
                            <Col className="mx-auto" lg="6" md="12">
                                <h2 className="title">Givenchy</h2>
                                <div className="stats stats-right">
                                    <div className="stars text-warning">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star ml-1" />
                                        <i className="fas fa-star ml-1" />
                                        <i className="fas fa-star ml-1" />
                                        <i className="far fa-star ml-1" />
                                        <p className="d-inline ml-1">(76 customer reviews)</p>
                                    </div>
                                </div>
                                <br />
                                <h2 className="main-price">$3,390</h2>
                                <h5 className="category">Description</h5>
                                <p className="description">
                                    Eres' daring 'Grigri Fortune' swimsuit has the fit and
                                    coverage of a bikini in a one-piece silhouette. This fuchsia
                                    style is crafted from the label's sculpting peau douce fabric
                                    and has flattering cutouts through the torso and back. Wear
                                    yours with mirrored sunglasses on vacation.
                                </p>
                                <br />
                                <Row className="pick-size">
                                    <Col lg="4" md="4">
                                        <label>Quantity</label>
                                        <InputGroup>
                                            <div className="input-group-btn">
                                                <Button
                                                    className="btn-round btn-simple"
                                                    color="warning"
                                                    onClick={deleteQuantity}
                                                >
                                                    <i className="tim-icons icon-simple-delete" />
                                                </Button>
                                            </div>
                                            <Input
                                                className="input-number"
                                                value={quantity}
                                                id="myNumber"
                                                type="text"
                                                onChange={(e) => {
                                                    setQuantity(parseInt(e.target.value));
                                                }}
                                            />
                                            <div className="input-group-btn">
                                                <Button
                                                    className="btn-round btn-simple"
                                                    color="warning"
                                                    onClick={addQuantity}
                                                >
                                                    <i className="tim-icons icon-simple-add" />
                                                </Button>
                                            </div>
                                        </InputGroup>
                                    </Col>
                                    <Col lg="4" md="4" sm="6">
                                        <label>Select color</label>
                                        <Select
                                            className="react-select react-select-warning"
                                            classNamePrefix="react-select"
                                            options={[
                                                {
                                                    value: "",
                                                    label: "Choose Color",
                                                    isDisabled: true
                                                },
                                                { value: "1", label: "Black" },
                                                { value: "2", label: "Gray" },
                                                { value: "3", label: "White" }
                                            ]}
                                        />
                                    </Col>
                                    <Col lg="4" md="4" sm="6">
                                        <label>Select size</label>
                                        <Select
                                            className="react-select react-select-warning"
                                            classNamePrefix="react-select"
                                            options={[
                                                {
                                                    value: "",
                                                    label: "Choose size ",
                                                    isDisabled: true
                                                },
                                                { value: "0", label: "Extra Small " },
                                                { value: "1", label: "Small " },
                                                { value: "2", label: "Medium" },
                                                { value: "3", label: "Large" },
                                                { value: "4", label: "Extra Large" }
                                            ]}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row className="justify-content-start">
                                    <Button className="ml-3" color="warning">
                                        Add to Cart  <i className="tim-icons icon-cart" />
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
