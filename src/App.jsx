import { useState } from 'react'
import './App.css'
import Songs from './Songs'
import { Flex,Title,Text,Input,Button,PinInput } from '@mantine/core'
function App() {
  const [current,setCurrent]=useState('login')
  
  return (
    <>
    {current==='login' && <Flex h='100vh' w="100vw"  justify={'center'} align={'center'}>
          <Flex h='30%' w='25%'  direction={'column'} gap={'5%'}>
              <Title style={{color:'#552583'}}>Sign In</Title>
              <Text size="sm">Please enter your mobile number to login. We will send an OTP to verify your number.</Text>
              <Input  radius="md" placeholder="Phone Number" />
              <Button onClick={()=>setCurrent('otp')} radius={'md'} variant="filled" color="#552583">Sign In</Button>
          </Flex>
      </Flex>}
    {current==='otp' && <Flex h='100vh' w="100vw"  justify={'center'} align={'center'}>
      <Flex h='40%' w='25%'  direction={'column'} gap={'3%'}  justify={'center'} align={'center'}>
          <Flex direction={'column'} >
          <Title style={{color:'#552583'}}>OTP Verification</Title>
          <Text size="sm">We have sent and OTP to +919889898989. Please enter the code received to verify.</Text>
          </Flex>
          <PinInput  size="xl" placeholder="" />
          <Button onClick={()=>setCurrent('songs')} w={'100%'} radius={'md'} variant="filled" color="#552583">Verify</Button>
          <Text td="underline">Resend OTP</Text>
          <Text td="underline">Use another number</Text>
      </Flex>
  </Flex>}
  {current==='songs' &&<Songs/> }
      </>
  )
  }
export default App


