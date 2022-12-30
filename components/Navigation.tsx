import {VStack, IconButton, Tooltip} from '@chakra-ui/react'
import {MdDashboard, MdMail, MdSettings} from 'react-icons/md'
import {HiBell, HiLightningBolt, HiSearch, HiTag} from 'react-icons/hi'
import ChakraLogo from './ChakraLogo'

const Navigation = () => {
  return (
    <VStack p={6} justifyContent="space-between" alignItems="center" w="full">
      <VStack>
        {/* Chakra Logo */}
        <ChakraLogo mb={6} />
        {/* IconButtons with Tooltips */}
        <Tooltip label="Dashboard" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdDashboard />}
            aria-label="Dashboard"
          />
        </Tooltip>
        <Tooltip label="Actions" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiLightningBolt />}
            aria-label="Actions"
          />
        </Tooltip>
        <Tooltip label="Search" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiSearch />}
            aria-label="Search"
          />
        </Tooltip>
        <Tooltip label="Notifications" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiBell />}
            aria-label="Notifications"
          />
        </Tooltip>
        <Tooltip label="Tag" placement="right">
          <IconButton color="gray.500" icon={<HiTag />} aria-label="Tag" />
        </Tooltip>
        <Tooltip label="Messages" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdMail />}
            aria-label="Messages"
          />
        </Tooltip>
      </VStack>
      {/* IconButton with Tooltip */}
      <Tooltip label="Settings" placement="right">
        <IconButton
          color="gray.500"
          icon={<MdSettings />}
          aria-label="Settings"
        />
      </Tooltip>
    </VStack>
  )
}

export default Navigation
