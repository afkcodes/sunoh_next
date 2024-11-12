import { Button } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';

const PlayerSheet = () => {
  return (
    <Drawer>
      <DrawerTrigger className='fixed bottom-14 w-full bg-secondary py-4'>
        Open
      </DrawerTrigger>
      <DrawerContent className='h-screen'>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>{/* <Button variant='outline'>Cancel</Button> */}</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default PlayerSheet;
