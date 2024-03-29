import React, { useState, useEffect } from "react";
import { IconButton, Flex, Image, Text, Circle, useBreakpointValue } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const GallerySlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);


  const isMobile = useBreakpointValue({ base: true, md: false });

  function importAll(r) {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const [images, setImages] = useState([]);

  useState(() => {
    const imagesInFolder = importAll(require.context('../assets/landingPageSlider', false, /\.(png|jpe?g|svg)$/))
    const allImages = Object.keys(imagesInFolder)?.map((imageName, index) => {
      return imagesInFolder[imageName];
    });
    setImages(allImages);
  }, [])

  useEffect(() => {


    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage]);

  const goToPrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  };



  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column" bg={'gray.800'}>
      <Flex alignItems="center" justifyContent="center" position="relative" width="100vw">
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="Previous"
          onClick={goToPrevious}
          variant="ghost"
          position="absolute"
          left="0"
          bottom="50%"
          transform="translateY(50%)"
          zIndex={1}
          bg={'gray.200'}
          color={'gray.800'}
        />
        <Image
          src={images[currentImage]}
          alt={"image"}
          objectFit="cover"
          width="100%"
          height={isMobile ? "500px" : "1000px"}
          borderRadius="md"
          zIndex={0}
          opacity={isAnimating ? 0.1 : 0.3}
          transition="opacity 0.5s ease"
        />
        <Text
          position="absolute"
          top={isMobile ? "40%" : "50%"}
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          zIndex={2}
          fontSize={isMobile ? "30px" : "50px"}
        >
          Thirle Shri Vishnumoorthy Temple
        </Text>
        <Text
          position="absolute"
          top={isMobile ? "60%" : "55%"}
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          zIndex={2}
          fontSize={isMobile ? "10px" : "xl"}
        >
          Thirle, Konalu Grama, Kadaba Taluk, Dakshina Kannada District, Karnataka
        </Text>
        <Flex position="absolute" bottom="10px" left="50%" transform="translateX(-50%)">
          {images?.map((image, index) => (
            <Circle
              key={index}
              size="5"
              bg={index === currentImage ? "blue.500" : "gray.300"}
              mx={2}
            />
          ))}
        </Flex>
        <IconButton
          icon={<ArrowForwardIcon />}
          aria-label="Next"
          onClick={goToNext}
          variant="ghost"
          position="absolute"
          right="0"
          bottom="50%"
          transform="translateY(50%)"
          bg={'gray.200'}
          color={'gray.800'}
        />
      </Flex>
    </Flex>
  );
};

export default GallerySlider;
