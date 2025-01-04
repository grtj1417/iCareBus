import { useState, useRef, useEffect } from "react";
import { Carousel } from "flowbite-react";

const CustomCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const touchStartY = useRef(0);
  const touchCurrentY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchCurrentY.current = e.touches[0].clientY;

    const verticalMovement = Math.abs(touchCurrentY.current - touchStartY.current);
    if (verticalMovement > 10) {
      setIsDragging(true);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Carousel Component */}
      <Carousel
        id="custom-carousel"
        leftControl={<div style={{ display: "none" }} />}
        rightControl={<div style={{ display: "none" }} />}
        draggable={!isDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100 animate-bounce-in-out" : "opacity-0"
          }`}
      >
        <div
          className="h-[85vh]"
          style={{
            position: "relative",
          }}
        >
          {/* Slide 1 */}
          <img
            src="public/images/1008808_0.jpg"
            alt=""
            style={{
              borderRadius: "1rem",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: "0.8",
            }}
          />
        </div>
        {/* Slide 2 */}
        <div
          className="h-[85vh]"
          style={{
            position: "relative",
          }}
        >
          <img
            src="public/images/1008807_0.jpg"
            alt=""
            style={{
              borderRadius: "1rem",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: "0.8",
            }}
          />
        </div>

      </Carousel>

      {/* Shared Text and Button */}
      <div
        style={{
          position: "absolute",
          zIndex: "100",
          top: "60%",
          left: "20px",
          color: "rgba(255, 255, 255)",
          fontSize: "24px",
          fontWeight: "bold",
          textShadow: "2px 3px 4px rgba(0, 0, 0, 0.8)",
        }}
      >
        無障礙移動的最佳選擇
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: "150",
          top: "68%",
          left: "20px",
          width: "90%",
          height: "46px",
          borderRadius: "27px",
          color: "rgba(37, 40, 40, 0.8)",
          backgroundColor: "rgba(255, 255, 255)", // 半透明背景
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(75, 75, 75, 0.8)",
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        <div id="container" style={{ width: `100%` }}>
          <button
            className="learn-more"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({
                  top: 650,
                  behavior: "smooth",
                });
              }, 500);
            }}
          >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">想知道更多？</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
