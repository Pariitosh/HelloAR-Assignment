import {Image, Anchor, Breadcrumbs, Button, Divider, FileInput, Flex, Modal, Progress, Text, TextInput, Title } from "@mantine/core";
import Song from "./Song";
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { UploadOutlined,StepBackwardOutlined,StepForwardOutlined,PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
export default function Right(){
    const [songs,setSongs]=useState([{name:"Song 1", source:"Youtube",added:"17/06/2021"},
    {name:"Song 2", source:"Youtube",added:"27/08/2020"},
    {name:"Song 3", source:"Youtube",added:"07/06/2001"}])
    const [opened, { open, close }] = useDisclosure(false);
    const [current,setCurrent]=useState(false)
    const [playingSong, setPlayingSong] = useState(null);
    const handlePlay = (songName) => {
        setPlayingSong(songName);
        setCurrent(true)
      };
      const handlePause = (songName) => {
        setCurrent(false)
      };
    const items = [
        { title: 'First-level Menu', href: '#' },
        { title: 'Second-level Menu', href: '#' },
        { title: 'Current Page', href: '#' },
      ].map((item, index) => (
        <Anchor   href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));
    
    const form=useForm(
        {
            initialValues:{
                name:'',
                link:'',
                source:'',

            }
            
        }
        
    )

    return (
        <>
        <Flex ml={'1%'} h={'100%'} w={'80%'}  direction={'column'}>
            <Flex w={'100%'} h={'10%'}  direction={'column'}>
                <Flex w={'100%'} h={'50%'} >
                    <Breadcrumbs>{items}</Breadcrumbs>
                </Flex>
                <Flex w={'100%'} h={'100%'}  justify={'space-between'} align={'center'}>
                    <Text size="xl" fw={600}>Songs</Text>
                    <Button style={{color:'black'}} onClick={open} mr={'3%'} color="#FDB927">Add Songs</Button>
                </Flex>
                
            </Flex>
            <Divider  />
            <Flex w={'100%'} h={'10%'}  >
                <Flex w={'70%'} h={'100%'}  justify={'space-between'} align={'center'}>
                    <Text size="lg" fw={600}>SONG NAME</Text>
                    <Text size="lg" fw={600} ml={'13%'}>SOURCE</Text>
                    <Text size="lg" fw={600}>ADDED ON</Text>
                </Flex>
                <Flex w={'30%'} h={'100%'} ></Flex>
            </Flex>
            <Divider  />
            <Flex w={'100%'} h={'60%'}  direction={'column'}>
                {songs.map((song)=><Song onPause={handlePause} onPlay={handlePlay} key={song.name} name={song.name} source={song.source} added={song.added}/>)}
                
                
            </Flex>
            <Flex w={'100%'} h={'10%'} mt={'10%'} >
                <Progress value={50}/>
                <Flex h={'100%'} w={'100%'} justify={'space-between'}>
                    <Flex w={'20%'} h={'100%'} align={'center'} gap={'1%'} >
                    <Image h={70} w={70} fit="contain" radius={'md'} src={'https://img.youtube.com/vi/3FPwcaflCS8/sddefault.jpg'}/>
                    <Title order={5}>{playingSong}</Title>
                    </Flex>
                    <Flex w={'20%'} h={'100%'} align={'center'} justify={'center'}>
                        <StepBackwardOutlined style={{fontSize:"40px"}}/>
                        {!current && <PlayCircleOutlined style={{fontSize:"40px"}}/>}
                        {current &&<PauseCircleOutlined style={{fontSize:"40px"}}/>}
                        <StepForwardOutlined style={{fontSize:"40px"}}/>
                    </Flex>
                    
                </Flex>
            </Flex>
            
        </Flex>
        <Modal opened={opened} onClose={close} title="Add song" centered size={'xl'}>
            <Divider></Divider>
            <form onSubmit={form.onSubmit((values) => {
                close()
                setSongs(prevSongs=>[...prevSongs,values])
                console.log(values)})}>
                <Flex  h={'100%'} w={'100%'} direction={'column'} gap={'xl'}>
                
                <TextInput {...form.getInputProps('name')} label="Song Name" placeholder="Song Name"/>
                <TextInput {...form.getInputProps('link')} label="Song Link" placeholder="URL"/>
                <TextInput {...form.getInputProps('source')} label="Song Source" placeholder="Source Link"/>
                <FileInput leftSection={<UploadOutlined />} placeholder="Click to upload profile thumbnail" variant="filled"></FileInput>
                <Button type="submit">Add song</Button>
                
                </Flex>
                </form>
      </Modal>
        </>
    )
}