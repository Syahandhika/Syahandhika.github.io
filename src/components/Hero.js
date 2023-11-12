import {Carousel} from "react-bootstrap";
import hero1 from "./../assets/GedungIsola.jpg";
import hero2 from "./../assets/museum.jpeg";

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={hero1} alt="First slide" />
        <Carousel.Caption>
          <h3>Universitas Pendidikan Indonesia</h3>
          <p>The Isola building is located on the Indonesian University of Education campus which is the hallmark of the campus</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>This is an UPI Museum which contains historical objects with educational themes.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
