import {
  Box,
  Heading,
  HStack,
  IconButton,
  VStack,
  Flex,
  Avatar,
  AvatarBadge,
  Divider,
  Input,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react'

import {RiDribbbleLine, RiInstagramFill, RiTwitterFill} from 'react-icons/ri'
import UserAvatar from './UseAvatar'
import ChatRow from './ChatRow'

const onlineFriends = [
  'Lazar Nikolov',
  'Mark Chandler',
  'Segun Adebayo',
  'Tim Kolberger',
  'Folashade Agbaje',
  'Alex Gerrit',
  'Jason Hughes',
  'Jonathan Bakebwa',
  'Tioluwani Kolawole',
]
const ChatHistorySidebar = () => {
  return (
    <VStack h="full" alignItems="center" w="full" spacing={6}>
      <Flex
        w="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start">
        <Avatar name="Habeeb Kareem" size="2xl">
          <AvatarBadge bg="green.400" boxSize={8} borderWidth={4} />
        </Avatar>
        <VStack>
          <Heading size="md" mt={{base: 0, lg: 3}}>
            Habeeb Kareem
          </Heading>
          <HStack px={8} justifyContent="center" spacing={3} mt={6}>
            <IconButton
              icon={<RiDribbbleLine />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="Dribbble Account"
            />
            <IconButton
              icon={<RiInstagramFill />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="instagram Account"
            />
            <IconButton
              icon={<RiTwitterFill />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="Twitter Account"
            />
          </HStack>
        </VStack>
      </Flex>
      <Box px={8} w="full">
        <Divider color="gray.100" />
      </Box>
      <HStack px={8} w="full" justifyContent="space-between">
        <Heading size="xs">Friends online</Heading>
        <Text fontSize="sm" color="gray.500" fontWeight="semibold">
          25
        </Text>
      </HStack>
      <HStack
        overflowX="auto"
        px={8}
        justifyContent="flex-start"
        spacing={3}
        minH={24}
        w="full">
        {onlineFriends.map((friend) => (
          <UserAvatar name={friend} key={friend} />
        ))}
      </HStack>
      <Box px={8} w="full">
        <Divider color="gray.100" />
      </Box>
      <Box px={8} w="full">
        <Heading size="xs" w="full">
          Chats
        </Heading>
        <Input
          variant="filled"
          mt={2}
          minH={10}
          rounded="full"
          placeholder="Search chat"
        />
      </Box>
      <Box w="full" overflowY="auto">
        <List w="full" spacing={0}>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
        </List>
      </Box>
    </VStack>
  )
}

export default ChatHistorySidebar
