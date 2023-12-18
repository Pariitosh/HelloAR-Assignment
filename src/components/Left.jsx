import { Divider, Flex,Title } from "@mantine/core";
import {LoginOutlined,WindowsOutlined} from "@ant-design/icons"

export default function Left(){
    return(
        <>
        <Flex h={'100%'} w={'20%'}  direction={'column'} >
                <Flex w={'100%'} h={'20%'}  justify={'center'} align={'center'} >
                    <Title order={1} style={{color:"#552583"}}>Logo</Title>
                </Flex>
                <Flex w={'100%'} h={'80%'}   justify={'space-between'} direction={'column'} >
                    <Title ml={'10%'} order={4}><WindowsOutlined/>   Songs</Title>
                    
                    <Title ml={'10%'} order={4} mb={'5%'}><LoginOutlined/>   Logout</Title>
                </Flex>
            </Flex>
            <Divider orientation="vertical"></Divider>
            </>
    )
}