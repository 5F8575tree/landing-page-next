import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ children, ...options }) => {
  // useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-1">{children}</div>
    </div>
  );
};

export default Carousel;
