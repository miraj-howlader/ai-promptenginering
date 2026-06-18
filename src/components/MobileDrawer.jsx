'use client';

import React, { useState } from 'react';
import { Button, Drawer, DrawerContent, DrawerHeader, DrawerBody } from '@heroui/react';
import { LayoutSideContentLeft } from "@gravity-ui/icons";

export default function MobileDrawer({ navContent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden p-4">
      <Button 
        onPress={() => setIsOpen(true)} 
        variant="flat" 
        className="gap-2"
      >
        <LayoutSideContentLeft className="size-5" />
        Menu
      </Button>

      <Drawer 
        isOpen={isOpen} 
        onOpenChange={setIsOpen} 
        placement="left" 
        size="xs"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 border-b border-default-100">
                Navigation
              </DrawerHeader>
              <DrawerBody className="py-4">
                {/* Clicking a link should automatically close the drawer */}
                <div onClick={() => setIsOpen(false)}>
                  {navContent}
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}