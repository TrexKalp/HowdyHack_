import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Heading,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import DarkModeSwitch from "./DarkModeSwitch";
import Upload from "./Upload";
// import use states from react
import React from "react";
import NearYou from "./NearYou";
import { Grid, GridItem, Text } from '@chakra-ui/react';

const businessdata = [
  {"name": "Sweet Eugene's", img:'https://images.squarespace-cdn.com/content/v1/549230e3e4b0524c33444a1e/1580392255373-0ZQR6K722HOHO2L1O0CM/Avery+and+Sophia.jpg'},
  {"name": "The Beef and Reef Food Truck", img:'https://d3hbe0kmbam4a5.cloudfront.net/photos/a9137021-79b8-4793-871e-fd581d323499.jpg'},
  {"name": "1541 Pastries and Coffee", img:'https://img1.wsimg.com/isteam/stock/105064/:/rs=w:2320'},
  {"name": "Sabi Boutique", img:'https://www.sabiboutique.com/cdn/shop/files/Untitled_design_-_2023-08-01T115915.196_1800x.png?v=1690909170'},
  {"name":'Stampede College Station', img:'https://static.wixstatic.com/media/d831b5_c89948a6a47a479aa31dcf160377119a~mv2.jpg/v1/fill/w_995,h_428,al_c,q_85,enc_auto/d831b5_c89948a6a47a479aa31dcf160377119a~mv2.jpg'},
  {"name": 'Maroon & White Barber Shop', img:'https://s3-media0.fl.yelpcdn.com/bphoto/xHGpuWKHrl4I9UwiMn6Lvw/o.jpg'},
  {"name":'Stella Southern Cafe', img:'https://images.squarespace-cdn.com/content/v1/58d96e7b46c3c455ff795ed4/1625681239993-28EW4GVKLQP2LRZWKL7B/20210707_073204.jpg?format=1000w'},
  {"name": 'Raging Bull Street Tacos', img:'https://images.getbento.com/accounts/ea9e523363a5e7d2e6a5ae7e9d5139e3/media/images/93727RagingBullLogo.png?w=600&fit=max&auto=compress,format&h=600'},
  {"name": "Kolache Rolf's", img: 'https://s3-media0.fl.yelpcdn.com/bphoto/buq3sBnAzoNKiyVx9YQaBQ/l.jpg'},
  {"name": "E11even Bar and Grill", img:'https://s3-media0.fl.yelpcdn.com/bphoto/OtpsHePQDhvGuKABqwPcxQ/l.jpg'},
  {"name": "Aggieland Scuba", img:'https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/98/d6/98d66a55f90cda15a5ff4e85bb92f8a7.webp'},
  {"name": "A Wild Hair Salon & Co", img:'https://s3-media0.fl.yelpcdn.com/bphoto/FB1HAV7nNLPvDcGcPmFVfw/o.jpg'},
  {"name": "What's The Buzz Specialty Coffee", img: 'https://c6e9a23b9c67ef1e825d.cdn6.editmysite.com/uploads/b/c6e9a23b9c67ef1e825d35743f6047bc5913b58dd05fa8ad8574296e2ff8a318/IMG_0583_5d1682b4-ed0e-41b8-8869-73690b2649e8_1080x_1628624554.jpg?width=1200&optimize=medium'},
  {"name": "Brazos Cedar Works", img: 'https://s3-media0.fl.yelpcdn.com/bphoto/s8V3ghJ94ZFVmbaMZ9pLJA/l.jpg'},
  {"name": "BonAppeTea", img: 'https://static.wixstatic.com/media/3100fb_d4d546250e3d43a0b63972cf61d5a34b~mv2.png/v1/crop/x_110,y_8,w_901,h_743/fill/w_901,h_738,al_c,q_90,enc_auto/Bon%20App%2004-04-20%20(1%20of%2057).png'},
  {"name": "The Village", img: 'https://images.squarespace-cdn.com/content/v1/5a731764c027d80adbbd6ec3/1614708871697-BYIO7FFJ2OKPY75PTWD5/wonder+how+to+FYV.png?format=2500w'},
  {"name": "Gomez Shoe Repair", img:"https://shaker.life/wp-content/uploads/2019/12/carlos-gomez-1.jpg"},
  {"name": "Burdett & Son Outdoor Adventure Shop", img: "https://images.squarespace-cdn.com/content/v1/608f69c5dcf02d1962d52ed5/1625943865882-8FRIWLZXDBES8WCDOH6J/Burdett-2.jpg?format=2500w"},
  {"name": "M&M Apparel", img: 'https://m-mapparel.com/wp-content/uploads/2021/03/team-uniforms2.png'},
  {"name": "Bea's Alterations", img:'https://lh3.googleusercontent.com/p/AF1QipM6ePSvRLZ0HL8OtaA4FdcnfGoadxCSWDmEOWw1=w1080-h608-p-k-no-v0'},
  {"name": "BCS Asian Market", img:'https://s3-media0.fl.yelpcdn.com/bphoto/MJHwaRjWQAyJCqlGUw-Y7Q/l.jpg'},
  {"name": "iPho", img:'https://iphobcs.com/img/slide1.jpg'}
]

const LinkItems = [
  { name: "Near You", icon: FiHome },
  { name: "Upload", icon: FiTrendingUp },
  { name: "Points", icon: FiCompass },
  { name: "Shop", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

const SidebarContent = ({ onClose, setActiveContent, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue(
        "linear-gradient(135deg, #E29495, #D47583, #BF556A)",
        "gray.800"
      )}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Heading
          fontSize={"xl"}
          fontFamily="'Pacifico', cursive"
          textShadow="
        -1px -1px 0 #000,  
         1px -1px 0 #000,
         -1px 1px 0 #000,
          1px 1px 0 #000"
          color={"white"}
        >
          Reveille Rewards
        </Heading>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          color="white"
          fontWeight="bold"
          setActiveContent={setActiveContent}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, setActiveContent, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={() => setActiveContent(children)}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const savedFirstName = localStorage.getItem("firstName");
  const savedLastName = localStorage.getItem("lastName");
  const tokens = localStorage.getItem("points");
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue(
        "linear-gradient(135deg, #E29495, #D47583, #BF556A)",
        "gray.800"
      )}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Heading
        display={{ base: "flex", md: "none" }}
        fontSize={"xl"}
        fontFamily="'Pacifico', cursive"
        textShadow="
        -1px -1px 0 #000,  
         1px -1px 0 #000,
         -1px 1px 0 #000,
          1px 1px 0 #000"
        color={"white"}
      >
        Reveille Rewards
      </Heading>

      <HStack spacing={{ base: "0", md: "4" }}>
        <Tag size="lg" colorScheme="red" borderRadius="full">
          <Avatar
            src="https://thefan-brand.com/cdn/shop/products/texas-am-aggies-modern-disc-wall-sign-525895.jpg?v=1644363931"
            size="xs"
            name="Segun Adebayo"
            ml={-1}
            mr={2}
          />
          <TagLabel>TAMUTokens: {tokens} </TagLabel>
        </Tag>
        <DarkModeSwitch />

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" color="white">
                    {savedFirstName} {savedLastName}
                  </Text>
                  <Text fontSize="xs" color="white">
                    Student
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeContent, setActiveContent] = React.useState("Near You");

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue(
        "radial-gradient(circle, #EEC5C6, #E6B2B4, #D99CA1)",
        "gray.800"
      )}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        setActiveContent={setActiveContent}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {activeContent === "Upload" && <Upload />}
        {activeContent === "Near You" && <NearYou />}
      </Box>
    </Box>
  );
};

export default Dashboard;