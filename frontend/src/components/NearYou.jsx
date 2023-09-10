import { Flex, Text, Box } from "@chakra-ui/react";
import React from 'react';

const businessdata = [
  {
    name: "Sweet Eugene's",
    img: "https://images.squarespace-cdn.com/content/v1/549230e3e4b0524c33444a1e/1580392255373-0ZQR6K722HOHO2L1O0CM/Avery+and+Sophia.jpg",
    website:'http://sweeteugenes.net/',
  },
  {
    name: "The Beef and Reef Food Truck",
    img: "https://d3hbe0kmbam4a5.cloudfront.net/photos/a9137021-79b8-4793-871e-fd581d323499.jpg",
    website:'https://www.instagram.com/thebeefandreef2/',
  },
  {
    name: "1541 Pastries and Coffee",
    img: "https://img1.wsimg.com/isteam/stock/105064/:/rs=w:2320",
    website:'https://1541coffee.com/',
  },
  {
    name: "Sabi Boutique",
    img: "https://www.sabiboutique.com/cdn/shop/files/Untitled_design_-_2023-08-01T115915.196_1800x.png?v=1690909170",
    website:'https://www.sabiboutique.com/',
  },
  {
    name: "Stampede College Station",
    img: "https://static.wixstatic.com/media/d831b5_c89948a6a47a479aa31dcf160377119a~mv2.jpg/v1/fill/w_995,h_428,al_c,q_85,enc_auto/d831b5_c89948a6a47a479aa31dcf160377119a~mv2.jpg",
    website:'https://www.stationstampede.com/',
  },
  {
    name: "Maroon & White Barber Shop",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/xHGpuWKHrl4I9UwiMn6Lvw/o.jpg",
    website:'https://www.yelp.com/biz/maroon-and-white-barber-shop-college-station',
  },
  {
    name: "Stella Southern Cafe",
    img: "https://images.squarespace-cdn.com/content/v1/58d96e7b46c3c455ff795ed4/1625681239993-28EW4GVKLQP2LRZWKL7B/20210707_073204.jpg?format=1000w",
    website:'https://www.stellabcs.com/',
  },
  {
    name: "Raging Bull Street Tacos",
    img: "https://images.getbento.com/accounts/ea9e523363a5e7d2e6a5ae7e9d5139e3/media/images/93727RagingBullLogo.png?w=600&fit=max&auto=compress,format&h=600",
    website:'https://www.ragingbullstreettacos.com/',
  },
  {
    name: "Kolache Rolf's",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/buq3sBnAzoNKiyVx9YQaBQ/l.jpg",
    website:'https://kolacherolfs.com/',
  },
  {
    name: "E11even Bar and Grill",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/OtpsHePQDhvGuKABqwPcxQ/l.jpg",
    website:'https://www.yelp.com/biz/e11even-bar-and-grill-bryan',
  },
  {
    name: "Aggieland Scuba",
    img: "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/98/d6/98d66a55f90cda15a5ff4e85bb92f8a7.webp",
    website:'https://www.aggielandscuba.com/',
  },
  {
    name: "A Wild Hair Salon & Co",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/FB1HAV7nNLPvDcGcPmFVfw/o.jpg",
    website:'https://sincerelywild.com/',
  },
  {
    name: "What's The Buzz Specialty Coffee",
    img: "https://c6e9a23b9c67ef1e825d.cdn6.editmysite.com/uploads/b/c6e9a23b9c67ef1e825d35743f6047bc5913b58dd05fa8ad8574296e2ff8a318/IMG_0583_5d1682b4-ed0e-41b8-8869-73690b2649e8_1080x_1628624554.jpg?width=1200&optimize=medium",
    website:'https://www.whatsthebuzzcoffee.com/',
  },
  {
    name: "Brazos Cedar Works",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/s8V3ghJ94ZFVmbaMZ9pLJA/l.jpg",
    website:'https://ramblinrosemercantile.com/',
  },
  {
    name: "BonAppeTea",
    img: "https://static.wixstatic.com/media/3100fb_d4d546250e3d43a0b63972cf61d5a34b~mv2.png/v1/crop/x_110,y_8,w_901,h_743/fill/w_901,h_738,al_c,q_90,enc_auto/Bon%20App%2004-04-20%20(1%20of%2057).png",
    website:'https://www.bonappeteatx.com/',
  },
  {
    name: "The Village",
    img: "https://images.squarespace-cdn.com/content/v1/5a731764c027d80adbbd6ec3/1614708871697-BYIO7FFJ2OKPY75PTWD5/wonder+how+to+FYV.png?format=2500w",
    website:'https://www.thevillagedowntown.com/',
  },
  {
    name: "Gomez Shoe Repair",
    img: "https://shaker.life/wp-content/uploads/2019/12/carlos-gomez-1.jpg",
    website:'https://www.yelp.com/biz/gomez-shoe-repair-college-station',
  },
  {
    name: "Burdett & Son Outdoor Adventure Shop",
    img: "https://images.squarespace-cdn.com/content/v1/608f69c5dcf02d1962d52ed5/1625943865882-8FRIWLZXDBES8WCDOH6J/Burdett-2.jpg?format=2500w",
    website:'http://burdettandson.com/',
  },
  {
    name: "M&M Apparel",
    img: "https://m-mapparel.com/wp-content/uploads/2021/03/team-uniforms2.png",
    website:'https://m-mapparel.com/',
  },
  {
    name: "Bea's Alterations",
    img: "https://lh3.googleusercontent.com/p/AF1QipM6ePSvRLZ0HL8OtaA4FdcnfGoadxCSWDmEOWw1=w1080-h608-p-k-no-v0",
    website:'https://beas-alterations.business.site/',
  },
  {
    name: "BCS Asian Market",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/MJHwaRjWQAyJCqlGUw-Y7Q/l.jpg",
    website:'https://www.facebook.com/BCSasianmarket/',
  },
  { name: "iPho", 
    img: "https://iphobcs.com/img/slide1.jpg",
    website:'https://iphobcs.com/', 
  },
];



const NearYou = () => {
  return (
    <Flex flexWrap="wrap">
      {businessdata.map((business) => (
        <a key={business.name} href={business.website} target="_blank" rel="noopener noreferrer">
          <Box
            width="calc(33.33% - 16px)" // Set to 33.33% to create 3 columns
            margin="8px" // Add some margin to create even gaps
            borderRadius="md"
            boxShadow="md"
            bg="white" // White background color
            textAlign="center"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{
              transform: "translateY(-8px)", // Lift the box on hover
              boxShadow: "lg", // Add shadow on hover
            }}
          >
            <img
              src={business.img}
              alt={business.name}
              width="100%"
              height="auto"
              style={{ borderRadius: "8px" }}
            />
            <Text fontSize="xl" mt={2} fontWeight="bold">
              {business.name}
            </Text>
          </Box>
        </a>
      ))}
    </Flex>
  );
};

export default NearYou;

