import {Button, Menu, Portal} from "@chakra-ui/react"

function Navbar() {
  return (
    <Menu.Root>
        <Menu.Trigger asChild>
            <Button variant="outline" size="sm">
                open
            </Button>
        </Menu.Trigger>
         <Portal>
            <Menu.Positioner>
            <Menu.Content>
                <Menu.Item value="#">Test item</Menu.Item>
                <Menu.Item value="#2">Test item2</Menu.Item>
            </Menu.Content>
            </Menu.Positioner> 
        </Portal>
    </Menu.Root>
  )
}

export default Navbar