'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { DatePickerInput } from '@/components/ui/date-picker';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Field } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import {
  IconAdjustments,
  IconFilterX,
  IconMapPin2,
  IconUser,
} from '@tabler/icons-react';

import { EMPTY_FILTERS, hasActiveFilters, type Filters } from '../filters';

type FilterListProps = {
  /** Filtres actuellement appliqués (conservés par le parent). */
  filters: Filters;
  /** Appelé au clic sur « Appliquer les filtres ». */
  onApply: (filters: Filters) => void;
  /** Appelé au clic sur le bouton de réinitialisation. */
  onReset: () => void;
};

const FilterList = ({ filters, onApply, onReset }: FilterListProps) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  // Brouillon local : modifié dans le drawer, remonté au parent seulement à « Appliquer ».
  const [draft, setDraft] = React.useState<Filters>(filters);

  // À chaque ouverture, repartir des filtres appliqués (conservés entre deux sessions du drawer).
  const handleOpenChange = (next: boolean) => {
    if (next) {
      setDraft(filters);
    }
    setOpen(next);
  };

  const handleApply = () => {
    onApply(draft);
    setOpen(false);
  };

  const handleReset = () => {
    setDraft(EMPTY_FILTERS);
    onReset();
  };

  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-2xl text-white">Découvrez vos offres</h2>
      <Drawer open={open} onOpenChange={handleOpenChange} repositionInputs={false}>
        <DrawerTrigger className="flex w-7 h-7 items-center justify-center text-white">
          <IconAdjustments stroke={1.3} />
        </DrawerTrigger>
        <DrawerContent ref={contentRef} className="px-4 pb-5 gap-7">
          <DrawerHeader className="p-0 flex-row items-center justify-between">
            <DrawerTitle className="text-xl text-white">Filtres</DrawerTitle>
            {hasActiveFilters(filters) && (
              <button
                type="button"
                onClick={handleReset}
                aria-label="Réinitialiser les filtres"
                className="flex h-7 w-7 items-center justify-center text-white"
              >
                <IconFilterX stroke={1.5} className="h-5 w-5" />
              </button>
            )}
          </DrawerHeader>
          <div className="border border-white/20 h-0" />
          <div className="flex flex-col gap-2 ">
            <h4 className="text-base text-white">Quand ?</h4>
            <DatePickerInput
              container={contentRef}
              value={draft.date}
              onValueChange={(date) => setDraft((d) => ({ ...d, date }))}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-base text-white">Où ?</h4>
            <Field className="w-85.75">
              <InputGroup className="h-13.25 border border-[#725ADF] text-white">
                <InputGroupInput
                  id="location"
                  placeholder="Paris"
                  value={draft.city}
                  onChange={(e) => setDraft((d) => ({ ...d, city: e.target.value }))}
                />
                <InputGroupAddon align="inline-end">
                  <IconMapPin2 stroke={2} className="h-7 w-7 text-white" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-base text-white">Combien ?</h4>
            <Field className="w-85.75">
              <InputGroup className="h-13.25 border border-[#725ADF] text-white">
                <InputGroupInput
                  id="guests"
                  type="number"
                  min={1}
                  placeholder="2"
                  value={draft.guests}
                  onChange={(e) => setDraft((d) => ({ ...d, guests: e.target.value }))}
                />
                <InputGroupAddon align="inline-end">
                  <IconUser stroke={2} className="h-7 w-7 text-white" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
          <DrawerFooter className="p-0">
            <Button
              onClick={handleApply}
              className="h-11.5 w-full bg-[#725ADF] text-base text-white hover:bg-[#725ADF]/90 rounded-4xl"
            >
              Appliquer les filtres
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FilterList;
