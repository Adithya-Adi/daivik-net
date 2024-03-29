import React from "react";
import GallerySlider from "../components/GallerySlider";
import templeImage1 from "../assets/temple/43a76dc6-3dab-42f0-930a-91e3a9c2edf6.jpg";
import templeImage2 from "../assets/temple/2172a29a-1392-4e85-80ed-58d8210ca21f.jpg";
import templeImage3 from "../assets/temple/0f4fc888-c3a2-4ba4-bb48-250bd9af9e7c.jpg";
import templeImage4 from "../assets/Screenshot 2024-03-29 163223.png"
import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

function LandingPage() {

  const images = [
    { src: templeImage1 },
    { src: templeImage2 },
    { src: templeImage3 },
  ];

  
  return (
    <>
      <GallerySlider images={images} />

      <Flex alignItems="center" justifyContent="space-between" p="50px">
        <Image
          src={templeImage4}
          alt="temple"
          maxHeight="100%"
          opacity={0.5}
          _hover={{ opacity: 0.8 }}
          transition="opacity 0.5s ease"
        />

        <Flex flexDirection="column" justifyContent="center" flex={1} ml={8}>
          <Text fontSize="xl" align="justify" mb={4}>
            From the Sahasralingeshwara temple known as Dakshina Kashi, if you travel towards Bengaluru on National Highway 75 and drive 12 kilometers, there is a place called Golithottu where Sri Mahavishnumurti Temple is situated, approximately two kilometers to the right on Thirle Road. It is estimated to be older than a hundred years and is currently within the Kadaba taluk.
          </Text>
          <Text fontSize="xl" align="justify" mb={4}>
            Parama Devotee Elika's D. Krishna Shabharaya, for the well-being of his family and for the protection of the village people, built a temple near the huge Ashwatha tree where the ancient Chaturbahu Vishnumurti's stone idol was found and consecrated it.
          </Text>
          <Text fontSize="xl" align="justify">
            The Ashwatha tree, by providing shade to the temple, created an extremely peaceful atmosphere, which led to the worship of the deity and the conduct of various rituals and sacrifices for the atonement of sins.
          </Text>

          <Text fontSize="xl" align="justify">
            The presence of Lord Vishnu in this place, where the shade always exists, enhances the prosperity of devotees who come here, granting them immediate fruition of their desires and blessings in the form of auspicious gifts.
          </Text>

          <Text fontSize="xl" align="justify">
            When one comes here, atheists turn into believer. This has a special impact here. Those who come here once experience mental peace and often come back to receive the divine blessings, leading to victories in competitions, relief from diseases, successful marriages, attainment of children, and the nurturing of family bonds.
          </Text>


          <Text fontSize="xl" align="justify">
            The deity known as Konaalu Devate, serves as the protector of the deity here, relieving the villagers from fear.
          </Text>

          <Text fontSize="xl" align="justify">
            Every year, on February 26th, the annual Rangapooja and daily offerings are performed, which occur cyclically. Due to its greatness, this temple needs to be restored soon. 12 years ago, in Ashtamangala, it was considered, and on 12.09.2019, a divine consultation was conducted by Dhaivajna Chekodu Subrahmanya Bhatta, and guidance was provided by Mr. Ramesh Karantha, a Vastushilpi expert, based on the map prepared by Kemminje Mr. Kartik Tantri.
          </Text>

          <Text fontSize="xl" align="justify">
            The garbhagudi of Lord Sri Mahavishnu, the Namaskara Mantapa, Suttipauli, Ganapati Shastara, the installation of Goddess Lakshmi, and the consecration of the Naga are all essential aspects of the construction of the Konaalu Devasthana. This reconstruction project has been undertaken under the stewardship of Sri Madhava Saralaya's family. It is estimated that approximately 3 crore rupees will be required for this reconstruction project, and contributions are being solicited from devotees, as well as from the villages of Alantaaya, Konaalu, Golitottu, nearby villages, and Parvoor.
          </Text>


          <Text fontSize="xl" align="justify">
            The renowned temple architect, Sri Nagesh Tantri Kemminje, has blessed this endeavor, and all devotees, organizations, devotees, and prominent members of the village and surrounding areas are urged to wholeheartedly cooperate and contribute financially, mentally, and physically to expedite the temple reconstruction and conduct the Brahmakalashotsava.
          </Text>

        </Flex>
      </Flex>
    </>
  );
}

export default LandingPage;
