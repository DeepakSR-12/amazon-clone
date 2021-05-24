import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative top-20">
      <div className="absolute bottom-0 bg-gradient-to-t from-gray-100 to-transparent h-32 w-full z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="image1"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="image2"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="image3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
