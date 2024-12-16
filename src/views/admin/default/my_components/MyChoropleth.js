// Chakra imports
import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";


import React, { useRef, useEffect } from "react";

import clsx from "clsx";
import Card from "components/card/Card.js";
import styles from "./my_choropleth.module.css"

export default function WeeklyRevenue(props) {
    const { ...rest } = props;

    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const iconColor = useColorModeValue("brand.500", "white");
    const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const bgHover = useColorModeValue(
        { bg: "secondaryGray.400" },
        { bg: "whiteAlpha.50" }
    );
    const bgFocus = useColorModeValue(
        { bg: "secondaryGray.300" },
        { bg: "whiteAlpha.100" }
    );

    return (
        <Card align="center" direction="column" w="100%" {...rest}>
            <Text fontSize="lg" fontWeight="bold" color="gray.700" mb="2">
                Population Density
            </Text>
            <Text fontSize="sm" fontWeight="medium" color="gray.500" textAlign="center">
                The number of people per km² of land area.
            </Text>
            <iframe
                src="http://127.0.0.1:5500/figure_1/index.html"
                width="100%"
                height="400px"
                style={{ overflow: "hidden" }}
                scrolling="no"
            />
        </Card>

    );
}
