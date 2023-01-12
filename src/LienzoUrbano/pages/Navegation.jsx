import React, { useEffect } from "react"
import Slick from "react-slick"
import { useNavigate } from "react-router-dom"

import { Container, Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap"

import { LUNavbar } from "LienzoUrbano/components/LUNavbar"
import { gql, useQuery, useLazyQuery } from "@apollo/client"

// custom previous button for the slick component
const PrevButton = (props) => {
	return (
		<Button
			className="btn-round btn-icon btn-simple slick-prev slick-arrow"
			color="primary"
			aria-label="Previous"
			type="button"
			onClick={props.onClick}
		>
			<i className="tim-icons icon-minimal-left" />
		</Button>
	)
}
// custom next button for the slick component
const NextButton = (props) => {
	return (
		<Button
			className="btn-round btn-icon btn-simple slick-next slick-arrow"
			color="primary"
			aria-label="Next"
			type="button"
		>
			<i className="tim-icons icon-minimal-right" onClick={props.onClick} />
		</Button>
	)
}

export const Navegation = () => {
	const [movementSelected, setMovementSelected] = React.useState("")

	let slickHeader3Settings = {
		dots: false,
		infinite: true,
		centerMode: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: <PrevButton />,
		nextArrow: <NextButton />,
		className: "center slider slick-buttons-under",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	}

	let navigate = useNavigate()
	const visitArtwork = (artworkId) => {
		let path = `openPost/${artworkId}`
    localStorage.setItem('artworkId', artworkId)
		navigate(path)
	}

	const RECOMENDATIONS_QUERY = gql`
		query GetArtworkRecommendations {
			getArtworkRecommendations {
				artist {
					firstName
					lastName
					id
					photoUrl
				}
				id
				title
				imageUrl
				description
			}

			artworks {
				artist {
					firstName
					lastName
					id
					photoUrl
				}
				id
				title
				imageUrl
				description
			}
		}
	`
	const RECOMENDATIONS_DATA = useQuery(RECOMENDATIONS_QUERY)
	const artworkRecommendations = RECOMENDATIONS_DATA?.data?.getArtworkRecommendations || []
	const latestArtworks = RECOMENDATIONS_DATA?.data?.artworks?.sort((a, b) => b.id - a.id).slice(0, 8) || []

	const ARTWORKS_QUERY = gql`
		query Artworks($filters: FindArtworksInput) {
			artworks(filters: $filters) {
				id
				artistId
				title
				description
				imageUrl
				createdDate
				movements {
					id
					artworkId
					movement
				}
        artist {
          firstName
          lastName
          id
          photoUrl
        }
			}
		}
	`
	const ARTWORKS_DATA = useQuery(ARTWORKS_QUERY, {
		variables: {
			filters: {
				movements: movementSelected,
			},
		},
	})
	const movementArtworks = ARTWORKS_DATA?.data?.artworks || []

	return (
		<>
			<LUNavbar />
			<div className="testimonials-4">
				<div className="section blogs-2" id="blogs-2">
					<Container fluid>
						<h2 className="title">Obras recientemente agregadas</h2>
						<br />
						<Row>
							{latestArtworks?.map((artwork) => (
								<Col lg="3" key={artwork.id}>
									<Card
										className="card-blog card-background"
										data-animation="zooming"
										style={{ cursor: "pointer" }}
										onClick={() => visitArtwork(artwork.id)}
									>
										<div
											className="full-background"
											style={{
												backgroundImage: "url(" + artwork.imageUrl + ")",
											}}
										/>
										<CardBody>
											<div className="content-bottom">
												<h6 className="card-category">{artwork.description}</h6>
												<a href="#pablo" onClick={(e) => e.preventDefault()}>
													<CardTitle tag="h3">{artwork.title}</CardTitle>
												</a>
											</div>
										</CardBody>
									</Card>
								</Col>
							))}
						</Row>
					</Container>
				</div>

				{/* <img alt="..." className="path" src={require("assets/img/blob.png")} /> */}

				{artworkRecommendations.length > 0 ? (
					<div className="header header-3">
						<div className="page-header">
							<div className="content-center">
								<Row>
									<Col className="ml-auto mr-auto positioned" lg="5" md="8" xs="12">
										<h1 className="title">Obras de arte recomendadas</h1>
										<p className="description">Basado en tus interacciones recientes</p>
									</Col>
									<Col md="12">
										<Slick {...slickHeader3Settings}>
											{artworkRecommendations?.map((recommendation) => (
												<div key={recommendation.id}>
													<img
														alt={recommendation.title}
														height="450"
														src={recommendation.imageUrl}
														width="450"
														style={{ cursor: "pointer" }}
														onClick={() => visitArtwork(recommendation.id)}
													/>
												</div>
											))}
										</Slick>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				) : null}

				<Container fluid>
					<h2 className="title">Categorías populares</h2>

					<Row>
						<Col lg="1" style={{ position: "sticky" }} className="justify-content-center">
							<img
								alt="..."
								src="https://mktefa.ditrendia.es/hs-fs/hubfs/Ejemplos%20publicidad%20banca%20y%20seguros/ditrendia-Ejemplo%20publicidad%20en%20banca%20y%20seguros-banner%20Openbank%20Hipoteca%201.gif?width=300&amp;height=600&amp;name=ditrendia-Ejemplo%20publicidad%20en%20banca%20y%20seguros-banner%20Openbank%20Hipoteca%201.gif"
								style={{ height: "400px" }}
							/>
							<br />
							<br />
							<img
								alt="..."
								src="https://i2.wp.com/esferacreativa.com/wp-content/uploads/2021/12/mc-donalds.jpg?resize=206%2C300&amp;ssl=1"
								style={{ height: "300px" }}
							/>
						</Col>

						<Col lg="11" className="justify-content-center">
							<div className="section blogs-4" id="blogs-4">
								<Container fluid>
									<Row>
										<Col lg="3">
											<Card
												className="card-blog card-background"
												data-animation="zooming"
												style={{ cursor: "pointer" }}
												onClick={() => setMovementSelected("Surreal")}
											>
												<div
													className="full-background"
													style={{
														backgroundImage: "url(https://piase.s3.us-east-2.amazonaws.com/lu-welcome.jpg)",
													}}
												/>
												<CardBody>
													<div className="content-bottom">
														{/* <h6 className="card-category">Climate Change</h6> */}
														<a href="#pablo" onClick={(e) => e.preventDefault()}>
															<CardTitle tag="h3">Surreal</CardTitle>
														</a>
													</div>
												</CardBody>
											</Card>
										</Col>
										<Col lg="3">
											<Card
												className="card-blog card-background"
												data-animation="zooming"
												style={{ cursor: "pointer" }}
												onClick={() => setMovementSelected("Pop")}
											>
												<div
													className="full-background"
													style={{
														backgroundImage: "url(https://piase.s3.us-east-2.amazonaws.com/lu-cat-1.webp)",
													}}
												/>
												<CardBody>
													<div className="content-bottom">
														{/* <h6 className="card-category">Save the World</h6> */}
														<a href="#pablo" onClick={(e) => e.preventDefault()}>
															<CardTitle tag="h3">Pop</CardTitle>
														</a>
													</div>
												</CardBody>
											</Card>
										</Col>
										<Col lg="3">
											<Card
												className="card-blog card-background"
												data-animation="zooming"
												style={{ cursor: "pointer" }}
												onClick={() => setMovementSelected("Realista")}
											>
												<div
													className="full-background"
													style={{
														backgroundImage: "url(https://piase.s3.us-east-2.amazonaws.com/lu-cat-2.webp)",
													}}
												/>
												<CardBody>
													<div className="content-bottom">
														{/* <h6 className="card-category">Applications Companies</h6> */}
														<a href="#pablo" onClick={(e) => e.preventDefault()}>
															<CardTitle tag="h3">Realista</CardTitle>
														</a>
													</div>
												</CardBody>
											</Card>
										</Col>
										<Col lg="3">
											<Card
												className="card-blog card-background"
												data-animation="zooming"
												style={{ cursor: "pointer" }}
												onClick={() => setMovementSelected("Abstracto")}
											>
												<div
													className="full-background"
													style={{
														backgroundImage: "url(https://piase.s3.us-east-2.amazonaws.com/lu-cat-3.webp)",
													}}
												/>
												<CardBody>
													<div className="content-bottom">
														{/* <h6 className="card-category">RFID microchips</h6> */}
														<a href="#pablo" onClick={(e) => e.preventDefault()}>
															<CardTitle tag="h3">Abstracto</CardTitle>
														</a>
													</div>
												</CardBody>
											</Card>
										</Col>
									</Row>
								</Container>
							</div>
						</Col>
					</Row>


          
          <div className="blogs-7">
          <Container>
            <h2 className="title">{movementSelected}</h2>
            <Row>
              {movementArtworks?.map((artwork) => (
                <Col md="4" key={artwork.id}>
                <Card className="card-blog card-background" style={{ cursor: "pointer" }}
										onClick={() => visitArtwork(artwork.id)}>
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(" +  artwork.imageUrl +
                        ")"
                    }}
                  />
                  <CardBody>
                    <div className="content-center">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <CardTitle tag="h2">{artwork.title}</CardTitle>
                      </a>
                      <h3 className="card-category">{artwork.artist.firstName}</h3>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={artwork.artist.photoUrl}
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
                </Col>
							))}
            </Row>
          </Container>
        </div>




				</Container>
			</div>
		</>
	)
}
