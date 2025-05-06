import { Carousel } from "react-responsive-carousel";
import okok from "../../assets/okok.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Intro_Carousel() {
    return (
        <div
          className="carousel-section"
          style={{
            flex: "1 1 400px",
            padding: "20px",
            maxWidth: "600px",
            marginTop: "40px",
          }}
        >
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            dynamicHeight={true}
          >
            <div>
              <img
                src={okok}
                alt="State-of-the-art Facilities"
                style={{ borderRadius: "10px" }}
              />
              <p className="legend">State-of-the-art Facilities</p>
            </div>
            <div>
              <img
                src={okok}
                alt="Experienced Professional"
                style={{ borderRadius: "10px" }}
              />
              <p className="legend">Experienced Professional</p>
            </div>
            <div>
              <img
                src={okok}
                alt="Compassionate Care"
                style={{ borderRadius: "10px" }}
              />
              <p className="legend">Compassionate Care</p>
            </div>
          </Carousel>
        </div>
    )
}