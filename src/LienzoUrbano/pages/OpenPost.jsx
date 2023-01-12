import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import { gql, useQuery, useLazyQuery } from "@apollo/client"

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
    CarouselIndicators,
} from "reactstrap";

import {
    Routes,
    Route,
    useSearchParams,
    BrowserRouter
  } from "react-router-dom"

  
import TagsInput from "LienzoUrbano/components/TagsInput/TagsInput.js";

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
    }
];

export const OpenPost = (data) => {
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

    const artworkId = Number(localStorage.getItem('artworkId'))
    console.log({artworkId});

	const ARTWORK_QUERY = gql`
query Artwork($artworkId: Int!) {
  artwork(id: $artworkId) {
    id
    artistId
    title
    description
    imageUrl
    minWorkingHours
    maxWorkingHours
    minPrice
    maxPrice
    minHeight
    maxHeight
    minWidth
    maxWidth
    address
    longitude
    latitude
    createdDate
    deletedDate
    isDeleted
    favoriteCount
    collaborators {
      id
      artistId
      artworkId
      artist {
        id
        firstName
        lastName
        photoUrl
      }
    }
    tags {
      id
      artworkId
      tag
    }
    colors {
      id
      artworkId
      color
    }
    movements {
      id
      artworkId
      movement
    }
    materials {
      id
      artworkId
      material
    }
    artist {
      id
      firstName
      lastName
      photoUrl
      followersCount
    }
  }
}
	`
	const ARTWORK_DATA = useQuery(ARTWORK_QUERY, {
        variables: {
            artworkId: 26 || 26
        }
    })
	const artwork = ARTWORK_DATA?.data?.artwork || {}

    const artworkTags = artwork?.tags?.map(t => t.tag) || []
    const [tags, setTags] = React.useState([]);
    if (tags.length === 0 && artworkTags.length > 0) {
        setTags(artworkTags)
    }

    const artworkMaterials = artwork?.materials?.map(t => t.material) || []
    const [materials, setMaterials] = React.useState([]);
    if (materials.length === 0 && artworkMaterials.length > 0) {
        setMaterials(artworkMaterials)
    }
      
    const artworkMovements = artwork?.movements?.map(t => t.movement) || []
    const [movements, setMovements] = React.useState([]);
    if (movements.length === 0 && artworkMovements.length > 0) {
        setMovements(artworkMovements)
    }
      
    const artworkColors = artwork?.colors?.map(t => t.color) || []
    const [colors, setColors] = React.useState([]);
    if (colors.length === 0 && artworkColors.length > 0) {
        setColors(artworkColors)
    }

      
    return (
        <>
            <LUNavbar />
            <div className="wrapper" ref={wrapper}>
                <br /><br /><br /><br />
                <div className="section">
                    <Container>
                        <Row>
                            <h1></h1>
                            <Col lg="6" md="12">
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={() => {}}
                                    previous={() => {}}
                                >
                                    {items.map((item, key) => {
                                        return (
                                            <CarouselItem
                                                onExiting={onExiting}
                                                onExited={onExited}
                                                key={key}
                                                className="justify-content-center"
                                            >

                                            <img
                                                alt="..."
                                                className="d-block"
                                                src={artwork.imageUrl}
                                            />

                                            </CarouselItem>
                                        );
                                    })}
                                </Carousel>
                            </Col>
                            <Col className="mx-auto" lg="6" md="12">
                                <h2 className="title">{artwork.title}</h2>
                                {/* <div className="stats stats-right">
                                    <div className="stars text-warning">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star ml-1" />
                                        <i className="fas fa-star ml-1" />
                                        <i className="fas fa-star ml-1" />
                                        <i className="far fa-star ml-1" />
                                        <p className="d-inline ml-1">(76 customer reviews)</p>
                                    </div>
                                </div> */}
                                <br />
                                <h2 className="main-price">${artwork.minPrice} - ${artwork.maxPrice}</h2>
                                <h5 className="category">Descripción</h5>
                                <p className="description">
                                    {artwork.description}
                                </p>
                                <br />

                            <div className="title">
                                <h4>Tags</h4>
                            </div>
                            <TagsInput
                                tagProps={{ className: "react-tagsinput-tag bg-danger" }}
                                value={tags}
                                ot
                                onChange={(value) => setTags(value)}
                             />
                             
                            <div className="title">
                                <h4>Corrientes artísticas</h4>
                            </div>
                            <TagsInput
                                tagProps={{ className: "react-tagsinput-tag bg-danger" }}
                                value={movements}
                                ot
                                onChange={(value) => setMovements(value)}
                             />
                             
                            <div className="title">
                                <h4>Materiales utilizados</h4>
                            </div>
                            <TagsInput
                                tagProps={{ className: "react-tagsinput-tag bg-danger" }}
                                value={materials}
                                ot
                                onChange={(value) => setMaterials(value)}
                             />
                             
                            <div className="title">
                                <h4>Gama de colores</h4>
                            </div>
                            {colors?.map((color) => (
								<><a
                                    key = {color}
                                    className="avatar rounded-circle"
                                    onClick={(e) => e.preventDefault()}
                                    id= "tooltipColor"
                                    style={{backgroundColor: color}}
                                >
                                </a><UncontrolledTooltip
                                    delay={0}
                                    target="tooltipColor"
                                >
                                    {color}
                                    </UncontrolledTooltip></>
							))}

                            </Col>
                        </Row>
                    </Container>



                    <div className="team-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Autor</h2>
                {/* <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4> */}
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" lg="10">
                <Card className="card-profile card-horizontal">
                  <Row>
                    <Col xl="7">
                      <div className="card-image no-mask">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={artwork?.artist?.photoUrl}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col xl="5">
                      <CardBody className="mt-3">
                        <h6 className="card-category">Nombre</h6>
                        <CardTitle tag="h4">{artwork?.artist?.firstName} {artwork?.artist?.lastName}</CardTitle>
                        <br />
                        {/* <h6 className="card-category">Position</h6>
                        <CardTitle tag="h4">Project Manager</CardTitle>
                        <br /> */}
                        <Row>
                          <Col lg="4">
                            <h6 className="card-category">Seguidores</h6>
                            <CardTitle tag="h4">{artwork?.artist?.followersCount}</CardTitle>
                          </Col>
                          {/* <Col lg="4">
                            <h6 className="card-category">Projects</h6>
                            <CardTitle tag="h4">31</CardTitle>
                          </Col> */}
                        </Row>
                      </CardBody>
                      <CardFooter>
                        <h6 className="card-category">Colaboradores</h6>

                            {artwork?.collaborators?.map((collaborator) => (
								<><a
                                    key = {collaborator.id}
                                    className="avatar rounded-circle"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    id="tooltip147210950"
                                >
                                    <img
                                        alt="..."
                                        src={collaborator?.artist?.photoUrl} />
                                </a><UncontrolledTooltip
                                    delay={0}
                                    target="tooltip147210950"
                                >
                                    {collaborator?.artist?.firstName} {collaborator?.artist?.lastName}
                                    </UncontrolledTooltip></>
							))}
                      </CardFooter>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
                </div>
            </div>
        </>
    )
}
