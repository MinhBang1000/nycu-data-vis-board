// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";

import MyChoropleth from "views/admin/default/my_components/MyChoropleth";
import MyRegionChart from "views/admin/default/my_components/MyRegionChart";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 2, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <MyChoropleth />
      </SimpleGrid>
    </Box>
  );
}
