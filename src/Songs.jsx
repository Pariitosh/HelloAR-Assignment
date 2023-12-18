import { Flex, Text, Title } from "@mantine/core";

import Left from "./components/Left";
import Right from "./components/Right";
export default function Songs(){
    return(
        <Flex h={'100vh'} w={'100vw'}  >
            <Left/>
            <Right/>
        </Flex>
    )
}