import { Divider, Flex, Image, Text, Title, useSafeMantineTheme } from "@mantine/core";
import {PlayCircleFilled,DeleteOutlined, PauseCircleFilled} from "@ant-design/icons"
import { useRef, useState } from "react";

export default function Song({name,source,added,onPlay,onPause}){
    const audioRef=useRef()
    const [playing,setplaying]=useState(false)
    const play=()=>{
        audioRef.current.play()
        setplaying(true)
        onPlay(name)
    }
    const pause=()=>{
        audioRef.current.pause()
        setplaying(false)
        onPause()
    }
    return(
    <>
    <audio ref={audioRef} src="song.mp3">

    </audio>
        <Flex w={'100%'} h={'15%'}  align={'center'}>
            <Flex w={'70%'} h={'100%'} align={'center'} justify={'space-between'}>
            <Flex h={'100%'} w={'25%'} align={'center'} gap={'3%'}>
            <Image h={70} w={70} fit="contain" radius={'md'} src={'https://img.youtube.com/vi/3FPwcaflCS8/sddefault.jpg'}/>
            <Text size="xl"> {name}</Text>
            </Flex>
            <Text size="xl">{source}</Text>
            <Text size="xl">{added}</Text>
            </Flex>
            <Flex w={'30%'} h={'100%'} align={'center'} justify={'space-around'}>
                {!playing &&<PlayCircleFilled onClick={play}  style={{color:"#FDB927",fontSize:'200%',cursor:"pointer"}}/>}
                {playing &&<PauseCircleFilled onClick={pause}  style={{color:"#FDB927",fontSize:'200%',cursor:"pointer"}}/>}

                <DeleteOutlined />
            </Flex>
        </Flex>
        <Divider variant="dotted"></Divider>
        </>
        
    )
}