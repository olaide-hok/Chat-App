import {HStack, Flex} from '@chakra-ui/react'
import ChatHistorySidebar from '../components/ChatHistory/ChatHistorySidebar'
import Navigation from '../components/Navigation'

const IndexPage = () => (
  <HStack h="100vh" spacing={0}>
    <Flex as="nav" h="full" maxW={16} w="full" bg="gray.100">
      <Navigation />
    </Flex>
    <Flex
      as="aside"
      h="full"
      maxW="sm"
      w="full"
      borderRightColor="gray.100"
      borderRightWidth={1}
      pt={8}>
      <ChatHistorySidebar />
    </Flex>
    <Flex
      as="main"
      h="full"
      maxW={16}
      flex={1}
      borderRightColor="gray.100"
      borderRightWidth={1}
    />
    <Flex as="aside" h="full" maxW="sm" w="full" />
  </HStack>
)

export default IndexPage
