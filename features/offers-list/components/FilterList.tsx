'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { DatePickerInput } from '@/components/ui/date-picker';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Field } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { IconAdjustments, IconMapPin2, IconUser } from '@tabler/icons-react';

const FilterList = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-2xl">Découvrez vos offres</h2>
      <Drawer repositionInputs={false}>
        <DrawerTrigger className="flex w-7 h-7 items-center justify-center">
          <IconAdjustments stroke={1.3} />
        </DrawerTrigger>
        <DrawerContent ref={contentRef} className="px-4 pb-5 gap-7">
          <DrawerHeader className="p-0 items-start">
            <DrawerTitle className="text-xl">Filtres</DrawerTitle>
          </DrawerHeader>
          <div className="border border-white/20 h-0" />
          <div className="flex flex-col gap-2 ">
            <h4 className="text-base">Quand ?</h4>
            <DatePickerInput container={contentRef} />
          </div>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-base">Où ?</h4>
            <Field className="w-85.75">
              <InputGroup className="h-13.25 border border-[#725ADF] text-white">
                <InputGroupInput id="location" placeholder="Paris" />
                <InputGroupAddon align="inline-end">
                  <IconMapPin2 stroke={2} className="h-7 w-7 text-white" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-base">Combien ?</h4>
            <Field className="w-85.75">
              <InputGroup className="h-13.25 border border-[#725ADF] text-white">
                <InputGroupInput id="guests" placeholder="2" />
                <InputGroupAddon align="inline-end">
                  <IconUser stroke={2} className="h-7 w-7 text-white" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
          <DrawerFooter className="p-0">
            <DrawerClose asChild>
              <Button className="h-11.5 w-full bg-[#725ADF] text-base text-white hover:bg-[#725ADF]/90 rounded-4xl">
                Appliquer les filtres
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FilterList;
