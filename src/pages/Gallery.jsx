import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Image, Heading } from '@chakra-ui/react';

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    setShowGallery(true);
  }, []);

  function importAll(r) {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const poojaImages = importAll(require.context('../assets/pooja', false, /\.(png|jpe?g|svg)$/));
  const constImages = importAll(require.context('../assets/construction', false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <Box p="4" bg={'gray.800'} >
        <Heading justifyContent="center" align="center" p={3} mb={4} color={'gray.200'}>Re-Construction Images</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {Object.keys(constImages)?.map((imageName, index) => (
            <Box
              key={index}
              boxShadow="md"
              borderRadius="md"
              overflow="hidden"
              w="100%"
              h="auto"
              opacity={showGallery ? 1 : 0}
              transform={showGallery ? 'translateY(0)' : 'translateY(20px)'}
              transition="opacity 0.5s, transform 0.5s ease-out"
              _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
            >
              <Image
                src={constImages[imageName]}
                alt={`Image ${index + 1}`}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>


      <Box p="4" bg={'gray.800'}>
        <Heading justifyContent="center" align="center" p={3} mb={3} color={'gray.200'}>Pooja Images</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {Object.keys(poojaImages)?.map((imageName, index) => (
            <Box
              key={index}
              boxShadow="md"
              borderRadius="md"
              overflow="hidden"
              w="100%"
              h="auto"
              opacity={showGallery ? 1 : 0}
              transform={showGallery ? 'translateY(0)' : 'translateY(20px)'}
              transition="opacity 0.5s, transform 0.5s ease-out"
              _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
            >
              <Image
                src={poojaImages[imageName]}
                alt={`Image ${index + 1}`}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>


    </>
  );
};

export default Gallery;
