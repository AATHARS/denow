import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Nav,
  Navbar,
  Container,
  Button,
  Carousel,
  Card,
} from "react-bootstrap";

function App() {
  // contact
  const [contactVisible, setcontactVisible] = useState(false);

  const handleContactClick = () => {
    setcontactVisible(true);
  };

  const handleContacthideClick = () => {
    setcontactVisible(false);
  };
  // Service
  const [serviceVisible, setServicetVisible] = useState(false);

  const handleServiceClick = () => {
    setServicetVisible(true);
  };
  const handleServicehideClick = () => {
    setServicetVisible(false);
  };

  // Product
  const [productVisible, setProductVisible] = useState(false);

  const handleProductClick = () => {
    setProductVisible(true);
  };

  const handleProducthideClick = () => {
    setProductVisible(false);
  };

  // Feedback post

  return (
    <div className="App">
      <Container className="py-3">
        {/* Navbar */}
        <Navbar
          className="navcss"
          collapseOnSelect
          expand="md"
          data-bs-theme="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="navhead"> Denow</h1>
              <h6 className="navsubhead"> The Complete family saloon</h6>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <div className=" fs-4 fw-bolder">
                <Nav className="navcontent">
                  <Nav.Link
                    className=" navcontent1 text-info mx-3"
                    href="#Hairsection"
                  >
                    Hair
                  </Nav.Link>
                  <Nav.Link
                    className=" navcontent1 text-info mx-3"
                    href="#Skinsection"
                  >
                    Skin
                  </Nav.Link>
                  <Nav.Link
                    className=" navcontent1 text-info mx-3"
                    href="#Mackupsection"
                  >
                    Mackup
                  </Nav.Link>
                  <Nav.Link
                    className=" navcontent1 text-info mx-3"
                    href="#Hairfixingsection"
                  >
                    Hair Fixing
                  </Nav.Link>
                  <Nav.Link
                    className=" navcontent1 text-info mx-3"
                    href="#Footersection"
                  >
                    Contact Us
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
            <div>
              <Nav className="d-flex  mx-3 ">
                <Button
                  className="btn-app fs-5 fw-bolder my-3 "
                  variant="outline-success"
                >
                  Book your slot
                </Button>
              </Nav>
            </div>
          </Container>
        </Navbar>
        <hr className=" hline text-info" />

        {/* Home */}
        <h2 className="CarouselHead text-center my-3">
          Welcome to Denow family
        </h2>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className=" imgstyle d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CCXjVodt5aaN7RwdX4gmYVzs6FuR6hiTfw&s"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5 className="CarouselContent1">Hair cut</h5>
                <p className="CarouselContent2 text-info">
                  Our Expert Stylists Create Cuts That Flatter You!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgstyle d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh9dkPNe2979FlWOq5w_MTf9y3CWwMuEaxUIchDn36eNUlILsZMuCEfZx7aTec_87ens&usqp=CAU"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5 className="CarouselContent1">Facials</h5>
                <p className="CarouselContent2 text-info">
                  Say Goodbye to Dull Skin, Get a Professional Facial Today!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgstyle d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GkoQfSabB2aVuAdSNPk8c_WznrqbdJLWHg&s"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5 className="CarouselContent1">Makup</h5>
                <p className="CarouselContent2 text-info">
                  Makeup for Every Occasion: Weddings, Proms, & More!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgstyle d-block w-100 "
                src="data:image/jpeg;base64,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"
                alt="Third slide"
                style={{ height: "200px", width: "180px" }}
              />
              <Carousel.Caption>
                <h5 className="CarouselContent1">Hair Fixing</h5>
                <p className="CarouselContent2 text-info">
                  Tired of Baldness? Don't worry, We give the better solution !
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgstyle d-block w-100 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjLoorBnlpv_MftcnQUCY8L_a3TAPLhJOjw&s"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5 className="CarouselContent1">Manicure & Pedicure</h5>
                <p className="CarouselContent2 text-info">
                  Pamper Your Hands & Feet: Book a Manicure & Pedicure Today!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Why Denow? */}

        <div>
          <h1 className="CarouselHead text-center my-5 ">
            Why you need to choose Denow ?
          </h1>
          <hr className=" hline text-info mb-5" />
          <div className=" d-flex justify-content-evenly flex-wrap mt-3">
            <div className=" d-block text-center">
              <img
                className="imagesize img-fluid rounded-circle"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR565EttLFzci2tzfE0yJVG317XrIHJ9AFTA7cKqMVp7zVCOigS"
                alt="Img not available"
                style={{ height: "200px", width: "180px" }}
              />
              <p className="navsubhead my-2">Personalised Expert Consulting</p>
            </div>
            <div className=" d-block text-center">
              <img
                className="imagesize img-fluid rounded-circle"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbGAvEFjgJ6N9CpIOGMXgmw9mDiuHPYNf192KynzWnddZDEIhd"
                alt="Img not available"
                style={{ height: "200px", width: "180px" }}
              />
              <p className="navsubhead my-2">Hospitality Service</p>
            </div>
            <div className=" d-block text-center">
              <img
                className=" imagesize img-fluid rounded-circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkzEpJrgaO0_wN8Fx-GvM0hFghALBfsliSCALZ0VInas0ynNI"
                alt="Img not available"
                style={{ height: "200px", width: "180px" }}
              />
              <p className="navsubhead my-2">Client First Approach</p>
            </div>
            <div className=" d-block text-center">
              <img
                className="imagesize img-fluid rounded-circle"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRprIFafztyxz9hYSv3tJrmlgf0ALpjmOG1C1i4w2IY9TI9LdbV"
                alt="Img not available"
                style={{ height: "200px", width: "180px" }}
              />
              <p className="navsubhead my-2">25+ Years of Expertise</p>
            </div>
          </div>
        </div>

        {/* Hair related service  */}

        <h2 id="Hairsection" className="CarouselHead text-center my-5">
          Hair Related Services
        </h2>
        <hr className=" hline text-info mb-5" />
        <div className="cards d-flex justify-content-center flex-wrap gap-3 ">
          <>
            <Card style={{ width: "18rem", height: "420px" }}>
              <Card.Img
                style={{ height: "150px" }}
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvc7JMte6aobapf8SZwzlLlyxi6l4RcSxfg&s"
              />
              <Card.Body className="cardcontent">
                <Card.Title className="cardhead text-center">
                  Hair Cut
                </Card.Title>
                <hr className="hline text-info" />
                <Card.Text className=" text-white fw-bold text-center">
                  We are seeing more curls and frizz today as the closure of
                  salons finally made women fall in love with their natural
                  texture. “We are finally embracing our natural texture and not
                  fighting it !
                </Card.Text>
              </Card.Body>
            </Card>
          </>
          <>
            <Card style={{ width: "18rem", height: "420px" }}>
              <Card.Img
                style={{ height: "150px" }}
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJ5nPSL4Uis9A5um2lbprMpoTZn5JFyMKZA&s"
              />
              <Card.Body className="cardcontent">
                <Card.Title className="cardhead text-center">
                  Hair Color
                </Card.Title>
                <hr className="hline text-info" />
                <Card.Text className=" text-white fw-bold text-center">
                  Get beautiful color from root-to-tip with Quality product
                  permanent hair color. Find our best permanent hair color for
                  every hair type and need !
                </Card.Text>
              </Card.Body>
            </Card>
          </>
          <>
            <Card style={{ width: "18rem", height: "420px" }}>
              <Card.Img
                style={{ height: "150px" }}
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KiuWlw6JOuM_R6ts2otXpjZb_DdqMFQZAQ&s"
              />
              <Card.Body className="cardcontent">
                <Card.Title className="cardhead text-center">
                  Hair Smoothening
                </Card.Title>
                <hr className="hline text-info" />
                <Card.Text className=" text-white fw-bold text-center">
                  Treat your hair to the care it deserves. From in-shower masks
                  and scrubs, to leave-in conditioners, oils, serums and more,
                  there's a treatment for every need !
                </Card.Text>
              </Card.Body>
            </Card>
          </>
          <>
            <Card style={{ width: "18rem", height: "420px" }}>
              <Card.Img
                style={{ height: "150px" }}
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30VROfwDUELs6vMgmp7nt8Ok8BsFXz8JqkQ&s"
              />
              <Card.Body className="cardcontent">
                <Card.Title className="cardhead text-center">
                  Hair Straightening
                </Card.Title>
                <hr className="hline text-info" />
                <Card.Text className=" text-white fw-bold text-center">
                  The hair leaving it aligned and with long lasting
                  straightening effect. Straightens and protects hair
                  simultaneously with superior and proven performance !
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        </div>

        {/* Skin related service */}

        <h2 id="Skinsection" className="CarouselHead text-center my-5">
          Skin Related Services
        </h2>
        <hr className=" hline text-info mb-5" />
        <div className="cards d-flex justify-content-center flex-wrap gap-3 h-50">
          <Card style={{ width: "18rem", height: "480px" }}>
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4hlSTJJ7YOs_VTzBy7VpvGOR1OawcQwahQ&s"
            />
            <Card.Body className="cardcontent">
              <Card.Title className="cardhead text-center">Clean Up</Card.Title>
              <hr className="hline text-info" />
              <Card.Text className=" text-white fw-bold text-center">
                Face clean up is a grooming treatment that is focused on
                cleaning and exfoliating your skin. This typically involves
                using a variety of skincare products, such as cleansers, toners,
                and scrubs, to remove dirt, oil, and other impurities from the
                skin.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "480px" }}>
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6hSC8ctJSAqQAUc76ETNlzZSuflyL6fWJw&s"
            />
            <Card.Body className="cardcontent">
              <Card.Title className="cardhead text-center">Facial</Card.Title>
              <hr className="hline text-info" />
              <Card.Text className=" text-white fw-bold text-center">
                Facials are in-depth skincare treatments that aim to improve
                your skin's health and appearance. They involve cleaning,
                exfoliating, and moisturizing your skin, often using special
                products and techniques like masks, serums, and massages.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "480px" }}>
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body className="cardcontent">
              <Card.Title className="cardhead text-center">Bleach</Card.Title>
              <hr className="hline text-info" />
              <Card.Text className=" text-white fw-bold text-center">
                Skin bleaching is like using a special cream to make your skin
                lighter. Some people use it to lighten just a few spots, while
                others want their whole face to be lighter.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "480px" }}>
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body className="cardcontent">
              <Card.Title className="cardhead text-center">
                Pimples Treatment
              </Card.Title>
              <hr className="hline text-info" />
              <Card.Text className=" text-white fw-bold text-center">
                Pimples right before a party can be annoying and make you feel
                less confident. There are ways to treat them, but we need to
                choose the right method based on your skin type.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "480px" }}>
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body className="cardcontent">
              <Card.Title className="cardhead text-center">
                Galvanic Facial
              </Card.Title>
              <hr className="hline text-info" />
              <Card.Text className=" text-white fw-bold text-center">
                A galvanic facial uses direct electrical current to introduce
                water-soluble substances into the surface of the skin. This
                helps to improve absorption and is obviously therefore great for
                dry or dehydrated skin.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "480px" }}>
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZf_DYDbjv-YAKSLBSUV8fljjC_QavAIqew&s"
            />
            <Card.Body className="cardcontent">
              <Card.Title className="cardhead text-center">
                Hydra Facial
              </Card.Title>
              <hr className="hline text-info" />
              <Card.Text className=" text-white fw-bold text-center">
                Hydra Facial is a non-invasive skin treatment that uses a
                patented device to cleanse, extract, and hydrate the skin. The
                treatment combines exfoliation, deep-cleansing, and hydration to
                improve the appearance of fine lines, wrinkles, pores, and
                hyperpigmentation.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Mackup Related service */}

        <h2 id="Mackupsection" className="CarouselHead text-center my-5">
          Makeup Related Services
        </h2>
        <hr className=" hline text-info mb-5" />
        <div className="cards d-flex justify-content-center flex-wrap gap-3">
          <>
            <Card style={{ width: "18rem", height: "480px" }}>
              <Card.Img
                style={{ height: "150px" }}
                className=" img-fluid"
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aAQI6dcACcBTE4E3IeirEWQnaiUUziHMeQ&s"
              />
              <Card.Body className="cardcontent">
                <Card.Title className="cardhead text-center">
                  Bridal Make-up
                </Card.Title>
                <hr className="hline text-info" />
                <Card.Text className=" text-white fw-bold text-center">
                  Bridal makeup is used to enhance the bride’s natural beauty
                  and create a look that is both timeless and elegant. Bridal
                  makeup typically focuses on creating a flawless complexion,
                  accentuating the eyes, and enhancing the lips.
                </Card.Text>
              </Card.Body>
            </Card>
          </>
          <>
            <Card style={{ width: "18rem", height: "480px" }}>
              <Card.Img
                style={{ height: "150px" }}
                className=" img-fluid"
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoN9i0jbrofEWBZrSpG5giP0dsNIdkIx0dQ&s"
              />
              <Card.Body className="cardcontent">
                <Card.Title className="cardhead text-center">
                  Party Make-up
                </Card.Title>
                <hr className="hline text-info" />
                <Card.Text className=" text-white fw-bold text-center">
                  Party makeup usually looks consistent throughout the skin.
                  That means we will only use one shade of foundation to even
                  out the skin tone.
                </Card.Text>
              </Card.Body>
            </Card>
          </>
          <>
            <Card style={{ width: "18rem", height: "480px" }}>
              <Card.Img
                style={{ height: "150px" }}
                className=" img-fluid"
                variant="top"
                src="data:image/jpeg;base64,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"
              />
              <Card.Body className="cardcontent">
                <Card.Title className="cardhead text-center">
                  Fashion Make-up
                </Card.Title>
                <hr className="hline text-info" />
                <Card.Text className=" text-white fw-bold text-center">
                  Fashion makeup is generally used by professional makeup
                  artists for catwalk models, collection look books or clothing
                  advertisements. It is all about the full body shots to show
                  off the clothing. The look can be edgy and dramatic or classic
                  and vintage.
                </Card.Text>
              </Card.Body>
            </Card>
          </>
          <>
            <Card style={{ width: "18rem", height: "480px" }}>
              <Card.Img
                style={{ height: "150px" }}
                className=" img-fluid"
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLJEoLjcD-FrLLMygc4dq7cElQpg5kd8hlg&s"
              />
              <Card.Body className="cardcontent">
                <Card.Title className="cardhead text-center">
                  Traditional Make-up
                </Card.Title>
                <hr className="hline text-info" />
                <Card.Text className=" text-white fw-bold text-center">
                  Traditional makeup is applied by hand tools such as a brush,
                  beauty blender, or sponge and it can be worked into the skin
                  for an even finish. The coverage of traditional makeup can
                  range from a natural dewy glow to a matte-heavy/full coverage
                  based on the formula.
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        </div>

        {/* Hair Fixing  */}
        <h2 id="Hairfixingsection" className="CarouselHead text-center my-5">
          Hair Fixing
        </h2>
        <hr className=" hline text-info mb-5" />
        <div className="cards d-flex justify-content-center flex-wrap gap-5">
          <Card style={{ width: "20rem", height: "480px" }}>
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body className="cardcontent">
              <Card.Title className="cardhead text-center">
                Hair Patching or Clipping
              </Card.Title>
              <hr className="hline text-info" />
              <Card.Text className=" text-white fw-bold text-center">
                Hair extensions will be secured using an interlocking technique
                beneath pre-existing hair patches, seamlessly blending with the
                client's natural hair. Removal is recommended at night or during
                bathing for optimal comfort and hair health.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", height: "480px" }}>
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body className="cardcontent">
              <Card.Title className="cardhead text-center">
                Non Surgical hair Bonding
              </Card.Title>
              <hr className="hline text-info" />
              <Card.Text className=" text-white fw-bold text-center">
                This hair extension method provides long-lasting results,
                lasting 3-5 weeks. Clients can enjoy their regular activities
                without limitation, even during exercise. A professional removes
                the extension monthly, and any new hair growth can be managed
                through trimming and reattachment with a special Glue.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>

      {/* Footer  */}

      <div id="Footersection" className="FootBody">
        <footer>
          <div class="content">
            <div class="top">
              <div class="logo-details">
                <i class="fab fa-slack"></i>
                <span className="CarouselHead text-center my-3">
                  Denow Unisex Saloon
                </span>
              </div>
              <div className=" d-flex" class="media-icons">
                <a
                  href="https://www.instagram.com/denow_unisex_beauty_parlor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="blanck"
                >
                  <img
                    className=" rounded-circle w-25"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAgMFBgcBAP/EAE0QAAEDAgIECAgHDwQDAQAAAAEAAgMEEQUGEiExQQcTUVJhcYGRFCIyM6GxwdEWI0JicnSyFRc0NkNUVWRzkpSk4eLwJmOCokVlwiT/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwIEBQEG/8QAOBEAAwABAgMECAMIAgMAAAAAAAECAwQREiExBRNBURQiMmFxgbHBM0KhFSNygpHR4fAGUyQ0Q//aAAwDAQACEQMRAD8A2FABlP5pvb60ANVXlNQAmn84EAEv8k9SAAkAGQ+ab1IAYqvLHUgD1N5zsQA/IfinfRKAAkAHR+bb1BAA1R5zsQAql8o9SAHZ/NOQAIgA4bB1IAEn864oAQgAviY+b6SgBh7nRvLGGzRsCAFwjjdLjPGtsQB2VgjbpM1FADQkeTYu1dSAHJhBBG6SVzY2NFy5zrAdqAXMqmJ59wuiJjpHS1jhe3FNAZ+8fZdPnT0+vIfOnt9Ss1nCFis5Pg9PSwDpBeR26h6FYWljxZPuEiKlzdmGRxP3UkZ0RxxtH2UxYMa8CDhIb+FeYRsxeo7Q0+sKfcYvIW5CabPOPwW06mGo/bQNH2bLj0uJ9OQt8iew7hMOpmI0BaNQ4ymdf/q73pFaF/lZxUXHBcdwrGm//jrGSy2uY3HReP8AibFVbxXHtIkSUoEQBj1XSwEMe57w1xuDtQA/xEdvJ9JQAPxr9zrdiAHYmNkYHPF3HaUAL4mPm+koAa8IPNHegDwi43x9Ii+5AHtdObDxtLssgD2mZjo+T0oAreZs00OBkwRHwqtGviWnUz6R3dW1Nx4nRawaW8vPojN8YxrEMalMmIVBe292xN1Mb1N9puVciJjoaM4Yx+yiOsmJnHJwhSFVJxCE1JwhTTE1IldE1IgiykmKcnWuLHtewua5pu1zTYjqK6+ZEueXs/VdMWU2NF9VTjUJwLys6+cPT1qnl0ifOOR1M0qiqKarpWVlFUMnhOtrmHUej+izqTl7MmP+EEfIHeuAdFNf5foQBzjDCdAAG29AHvCDzR3oATxD+RADjJBG3Qde4QAmT44+ID4u3cgClZyzWcOc/DsMePC7WlmGyLoHzvUpzJqaLQ95+8ydPr/gzlxLnFziXOJuSTckqyma7nbkJKamJqToUxTk4V1MVUnF1Cak8QpJiqkSQpITUiSNy6hNISRZS3EtHF0gTGW8w1eAVRfBeSmkPx1OTqd0jkd09iTmwrKufU6nsa/hVZBi1DHWUMgkhk33sWneCNxCybiorhoYSInZYbe5RAbcx0ri9o1FAHOIfyBABOk3lHegAWUEyOIGpAFezhmE4HhpjpzatqgWxfMG9/ZfV0o32L/Z+k9Iybv2V1/sZOXFxLnElxNySbknlKkqPTuUlsjyamKqSYwLLOJY4dOljDKe9jPKbMv0bz2KfeKSjqNTjw8q6+RZouDKTR+Nxdmlv0KY29Llz0j3GfXaCfSf1/wL+9l/7f8Al/7kek+4W9bv+U997I/pf+X/ALl30n3EHq9/A597E/pf+X/uR6V7iD1O/ge+9if0v/L/ANy76U/Ii82/gcPBgT/5f+X/ALl30t+RB5NwDEuDbEqeJz6GrgqyPyZaY3HquSD6EydZPiiLaZS6mnmpp3w1ET4pWGz2SCxBV2aVLdC3I0ukCw5KzG/L+JjjXHwCchs7NzfnjpG/oSNRh7yd11RJM15vjNDm6wRcEbCsgmFQECMA6kAOaTecO9AAKAH+NZBSmWVwbGxrnOcdwG1B2U6eyMPx7FZMaxWeukJ0Xm0bT8hg8ke3rJSHe7Pc6XSrTYVj8fH4gATJZOpJrKmD/dzGYqR4Pg7QZJyOYN3abDvTVRna/N6PhdLr4GmZix2kyxh8TWQh0jho09OzxdQ9QCEtzzum016m3z+LKJNwgY/JI50b6SJl9TRBe3aSmqJ8TU/ZuFLnuI+HuYvzin/hx70xYoZB6DD7/wCv+D3w9zD+cU/8OPepdxBB6LF/rPfD3MP5xT/w49673EC3pMZz4fZh/OKf+HHvXfR4FvTQjxz9mEC/hFP/AA49676PjFvBJL4DwiTOqWQ45HDxTzbwiJpbodY13HSO5LyaXlvAm8W3Ql+EPAI8Swl+IwMHhdK3T0h+Uj3g8tto6ulL02VxW3gKRkpAWruRqRK6LNV4L8bNZhr8Lndeaj82TviOwdh1dVlmazHw1xLoxiLbN513Yqh0QgAzimc0IAqHCLWupsDfSREh1U4RkA/I2u9g7UnPfDJr9jYVk1PG+k8/n4GTuBYbblXVHsuTFApssU5L5wRtBrsVcdoihA6Ll9/UE+Xued7d5TjXx+wHwnyPOaGxlxLW0kZaOS7n39QTEyXZML0d1739EVJMTLzk9dNVCqkLocLr8S/AKOaoANiWN1A9exMWRLqVcmTHHK3sGTZXx6GMukwqosObZ/oBK6sseZX7/C+lEQ5pY5zHgtc02c1wsQeQhMT3Otb9DRODXB8PqMNmrqiCKepMpj+MbpcW0AWsDy3VTUXXFsjN1VNVt4ELwkYZRYditOaGNkfhEbnSxMFmgggA23Xue5O01055hhbqXuaDl4mqyhh5nOmZKFmnffdiqXyyPbzK98qZhcJJgjPKwH0LXGVIohSQmpJTKmJOwrMFHU6Voy8Ry67eI7Ue7UexKzwrxtEF1Nyija5t3C7t5KxyYvimc0IAY8IfyNQBQOECU1OKRRnZFD6XH3ALO1Veukek7GnhwuvN/Qps8F9yXNG/FgLmlhT1Q7lRfuCE3q8X/ZweuRWMT3bPN/8AIFtOP5/Yj+E4/wCrB9Ti+09MbGdjrfS/zP6Iql1NUX6kvGSMoR10TMTxVhdTu1wQHZIOc7o5BvUnRh6/XOKeLH18S3YvmjB8BIppZLytFhT07blo3X3DtXFLozcOkzZvWS5ebIyn4RMIfJoTQVcDSfLcwOA67ElT7mhtdnZl5Mk8VwjCc00DJQ6OQub8TVQkFze3eOgrk3WNlaLvDW36GYSOxfKuJz00NTJTTi2k6MAtkb8l1iCD7NauLhyrfY0dseaeIjquqqK2odUVcz5pn+U951lNlKVsjnApWyNmyr+J+F/UY/sBZ2T8R/EzMntv4mGU/wCDQ/Qb6lq7lqp5iyFLcRUiHtDmkcq6JqTdMAxB1XglDUai6SBpd9K2v03WNknhtoA/wh/NCgB7iH/NQBnmZ2l+N1elrsWtHY0LG1Nb5qPUdn+rp5IGaFRVGlNAE8NxsTZofFlw4JGaFdjDf9uA+mRXNO92zE/5A94xP4/YjeFD8ax9Tj+09Mt+sP7EW+kf8T+iK/hFH90cVpKK5AnlDHW26O/0XUpe5c1V91hrJ5I1vN2JnAcvSSUgayU2hgAHkk7+wXPYmnkdFg9Jzqa6dWY65znuc97i57jdzjrJPKUyWeocpLZCU1UKqSzZAxmTDccipXPPgtY7QcwnUHnyXDpvq7VzIlU7mbrsCrHxLqiycKWHtkw+mxFrbSQycU48rXf1A7yuaetq2KGhv1nHmZrydauGg5Nryr+J+F/UY/sBZ+T238THy/iV8TDqf8Gi+gPUtRvmXqnmKIQmIqThCluKqTW+DwvqMp0hJF2PlZrPI91vRZZmpX71iWWXiH8rUg4PmRlvLb3oAz3MEd8Yqz/uX9AWDqXtno9Jon+4kh5YuhQTL80BTRdCbNDpstPBgzRrsVNtsUPrkV/SPdv5fcyO3K3jH8/sQfCiD8KwRuo4vtPU8r9cv9hf+o/4n9ERWTpmRZpwx7zZvH6N/pNLR6SFLG+Y/tPG3pMiXl90X7hShe/L8MzAS2GpaX23Agtv3kJ7POdjUlqHL8UZcCuqj0lSeTExVSSOXKeSpzBh0UYJJqGO2bA06RPcCmOvVZT1e04ab8jR+EyVrMrvY4+NLPGGjpB0vUCoYfbRh6Gd8y+Zkw9qu7mvUm2ZU/E/C/qMf2AqGT238TCzfi18TDqX8Gh+g31LT8TTueY5ZdE1IkrqYmpNb4Mi1uVYi5wGlPKRc/Ot7Fnan8Qq37RbOMZz296QQAUAVjH4LYg51vLaHdeq3sWBrlw52/M3NBe+FLyIaWJIVGgmByxJqY5UWTg6Zo1mJdMcXretHQveq+X3Mrtl7zHz+xC8JMWnmS/6rGP+z13UPbJ/vvL/AGJW2l/mf0RS5GPikD4nFjmkFrhtaRsPeuRZt+ra4a6M2TA8So82ZfInYxxeziqqDmutr94KvTSpHhtVpsmg1Gy5bc0yg47knFMNneaOF9bSE3a+PW9o+c32hc2Zu6btTBmld4+GiKpsAxiqkEcOGVZcedEWAdZNgFNMfk1Wnhbu0aNkzKf3EBrK4tfXPbogN1tibvAO8neVJvlsec12t798MLaSqcIOOsxXEW0tLIH0tISNIHU+Q7T2bO9Mx8i/oNK8ccVLm/oVT3qxNFtybXlT8T8L+ox/YCqZPbZ5zUfjV8WYdSa6WH6DfUtI2sk+sx1G4hycspCak17JtP4NljD2WtpR8Yf+RLvas3M97bM/J7bJlKIB2gzmt7kAV/McAL2SgWt4psO33rI7Uj2b+Ro6C9m5K7LGsqaNVUCSxJqoaqJ/IjNGpr+lkfrctTs986+X3M3tZ7zHz+xD5/j0sfv+rM9bkat7Zfl/cu9kPbTv4v6IqU8KXNGzNjVBW1uD1oq8OmMUg1OFrteORw3hWMeRolnwYtTj7vIt19C+YXwlUcjA3FKSWnlG10XjtPTyjq1q1OVPqec1HYGaXvipUv6EhLwh4A1l4pKmV25rYHD7VlPjRVXY2r35pL5r7blSzDnmtxaJ9NSMNHTOFnaLryPHSRs6h3qSo09N2TGF8Vvif6FV3WTFRecnkxUJcm1ZUP8Ao7Cz+ox/YCTftM8xql/5F/F/Uw+l/BYf2bfUtHfmb2Resx7cuiHIunp31dRFTRecme2NureTb2ob2W7E3yTZvNFBFDSxRMYNGNoY3VuGoLLb35mM3u9x/QZzW9yABuPf0dyAEVVMKukePluGrrGxI1OLvcTkZiycFqiqyR6yLaxtXlua5M3ZoEkj6ExMbLJPKcrYMRliOrjmar7yLn2lafZ2RLI0/Ep9oy6xql4Cc8YbI+RlfGwuYGBklvk2Oo9Wsqxrcdb8aOdl6mZTxP4lLliCpzRvzQDNCmqh02R88JabhOmyzNJjIPLtT0ztSLF+RNliKk6L8iYqE1I/RUlRX1cdJRxmSeQ2a0buk8gHKmplbNc4od09kjZK2SLLuVXAOGhSUojYdl3AWaO02XOrPKSqz5/e2YoxoYxrBsaAFbVHpLnme3pqYipLhwbYUazF3V8rfiqQeKeWQjV3C57Qk572nYz9bfDPD4s0xz3Ru0GkWHKqZlnOPf0dyAFeDu5wQB0SCLxCL2QBB4vT6MhqIwQx5s4cjlg9pabgrvV0ZpaPLuuB+BGPZcbFmJl9PYGcHRSNkjJa9pu0jaCmxbl7rqT5UuF9Cy4bjlNUsEdWWxTWsdPU13UfYt7T6yMi2rkzHz6O8b3nmh+TBcIncXuoqZxdrJDRr7k/ucL57IhOq1ErZUxo5cwQ7cPpu5d7nD5Il6dql+diDlfAHeVhdKexd7vGvAl+0NWvzsQco5b34RR/uqXDB39pa3/sf9TnwQy1+iKP91d2kP2jrP8AsZ4ZRy0NYwijB+ipEfT9W/8A6MddJgGWadxb4HQsOstYAHP7BrKNyG2o1VeNMzjN+aX49K2Cna6KgiN2Md5TzzncnQP8EpZu6Ps/0dcVc6f6FcTky00OU8EtVURU9MzTmleGsbykpipLqIybQnVdDZ8u4fDgmFQ0UY0nN8aR/Pedp/zcqt1xPc83myvLbpkjxZlOmLAFRFHvB3c4IAd41nOQAw9rnvLmi4O9AHOLaY5I52+K8bDvULhXLmujOzTl7or1bTOpZdEnSYfIdyrzOp0t4L2fQ2MGZZZ38QV7AVXTLCYLLF0JiYxMDkhAvYWTZrYamCSwjXqTpobLA5YRr1JiofNAM0G3UmzQ6aI+enA1gJ02WZpA1raiE9UTcp9DrWMaSWtAJ2kC102aFVv0Fgpk0IqRQuSAASTqAG0pqoTUmn5Dy23C4/ujiItWyNsyM/kWn/6O/k2cq7VeB5rX6xZXwR7K/UtPFv5qgZw9E9rGBrzYjcgBzjWc5AAaAC6fzQ7fWgBqq2t6igBgwMqAYpW3aQl5cUZY4aXIlF1FbyQ9fh8tI4ny4tzxu6153VaPJge/VGrh1E5OT6gDmgqmmWUwaWNMmhk0CSxpqocqA5YtqamNmgOWJNTHTQFNCmqh82R9RByJ80WYsFN2mxTpom0mPU0E1VOynponyzP8mNjbk/5ypsvcr5ajHLq3sjTcqZMbhbW1+JhstcNbIxrZD73dO7dyqwuR5TX9pPPvGLlP6stCDKDm7AgASfzzkAIQAdYcg7kACTapHAbkAOUovpIAVUC0erlQAMNZsdYO5caTAYrMGikJfTni3H5J8n+izNR2bF88b2Zbxaup5VzRDVNDPCSJIyQPlN1hZWTSZ8T5yaGPUY76Mj5IwlJllUCSxdCaqGzQJLF0Js0OVAcsXKE1UOmgQUktTJoQRPlfzY2lx9CdG76DHmjGt6exMYbkCuriH18go4t7RZ0nuH+aldx4b/MUM/buLGtsS4n+hecMwHDsDpxHh8Oi52p8rtb39Z9mxWlKXQ89qdZm1NcWR7+7wDovOt5ORSKwZojkCAAe1ABVOAYhqQA5ojkHcgATjpOd6EAOsjbI3TcLk77oATJeEgR6r7UAcY50rg15uEAOmFgFwNnSgBjjZOd6EAPRxtc0OdrJ2m6ABaulgc6zoWEEXuRr70m9Piv2pGTluejBRg1DM8h0RGq/ivISXoMHkOWtzrxOPy1h2i4lkpsN8hXPQMJP0/P5iI8Gw2PWKSNx+fd3rTZ02KeiIVrdRX5iWhpYWRNEcbWC17MFh3J6SXQrOqrnT3EyOMTtGM2G1dOHYrzOtJrAQAqSNrGlzBZw2a0ANcdJzvQgB8QMtrHpQAy97onljDYDYEAc46TnehACEAF0/mh2+tADVV5Te1ACYPOBABT/ACT1IABQAZD5tvUgBiq84OpAHqbzh6kAESead9EoABQAdH5tvUEADVHnexACqXyj1IAdm825AAiADhsHUgASfzzkAIQB/9k="
                    alt="Insta Link"
                  />
                </a>
              </div>
            </div>
            <hr className=" hline text-info mb-2" />
            <div class="link-boxes">
              <ul class="box">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a
                    className="Pointercursor"
                    onClick={handleContactClick}
                    onDoubleClick={handleContacthideClick}
                  >
                    Contact us
                  </a>
                </li>
                {contactVisible && (
                  <div
                    id="cont"
                    className={contactVisible ? "visible" : "hidden"}
                  >
                    <h6>Mobile Number 1 : 85900 68090</h6>
                    <h6>Mobile Number 2 : 87147 16090</h6>
                    <p>Mail Id : denow@gmail.com</p>
                  </div>
                )}

                <li>
                  <a href="">About us</a>
                </li>
              </ul>
              <ul class="box">
                <li
                  className="Pointercursor"
                  // class="link_name"
                  onClick={handleServiceClick}
                  onDoubleClick={handleServicehideClick}
                >
                  Services
                </li>
                {serviceVisible && (
                  <div
                    id="card"
                    className={serviceVisible ? "visible" : "hidden"}
                  >
                    <li>
                      <a href="#">Hair Related service</a>
                    </li>
                    <li>
                      <a href="#">Skin Related service</a>
                    </li>
                    <li>
                      <a href="#">Make Up Related service</a>
                    </li>
                    <li>
                      <a href="#">Hair Fixing</a>
                    </li>
                  </div>
                )}
              </ul>

              <ul class="box">
                <li
                  id="idcursor"
                  onClick={handleProductClick}
                  onDoubleClick={handleProducthideClick}
                  class="link_name"
                >
                  Products
                </li>
                {productVisible && (
                  <div id="card" className="hidden">
                    <li>
                      <a href="#">L'Oréal </a>
                    </li>
                    <li>
                      <a href="#">Schwarzkopf</a>
                    </li>
                    <li>
                      <a href="#">VLCC</a>
                    </li>
                    <li>
                      <a href="#">Natures</a>
                    </li>
                    <li>
                      <a href="#">Shahnaz Husain</a>
                    </li>
                    <li>
                      <a href="#">Revlon</a>
                    </li>
                    <li>
                      <a href="#">Lotus</a>
                    </li>
                  </div>
                )}
              </ul>
              <ul class="box input-box">
                <li class="link_name"> Mail-id</li>
                <li>
                  <input type="text" placeholder="Enter your Mail-id" />
                </li>
                <li class="link_name">Your Valuable Feedback</li>
                <li>
                  <input type="text" placeholder="Feedback about Denow" />
                </li>
                <li>
                  <input type="button" value="Submit" />
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-details">
            <div class="bottom_text">
              <span class="copyright_text">
                Copyright © 2024 <a href="#">Denow.</a>All rights reserved
              </span>
              <span class="policy_terms">
                <a href="#">Privacy policy</a>
                <a href="#">Terms & condition</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
