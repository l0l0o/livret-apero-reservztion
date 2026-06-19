'use client';

import { CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Calendar } from '@/components/ui/calendar';
import { Field } from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

function formatDate(date: Date | undefined) {
  if (!date) {
    return '';
  }

  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export function DatePickerInput({
  container,
  value: controlledDate,
  onValueChange,
}: {
  container?: React.ComponentProps<typeof PopoverContent>['container'];
  /** Date contrôlée (optionnel). Si fournie avec onValueChange, le composant devient contrôlé. */
  value?: Date | undefined;
  onValueChange?: (date: Date | undefined) => void;
}) {
  const isControlled = onValueChange !== undefined;
  const [open, setOpen] = React.useState(false);
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    new Date('2025-06-01'),
  );
  const date = isControlled ? controlledDate : internalDate;
  const setDate = (next: Date | undefined) => {
    if (isControlled) {
      onValueChange(next);
    } else {
      setInternalDate(next);
    }
  };
  const [month, setMonth] = React.useState<Date | undefined>(date);
  // Texte affiché : dérivé de la date en mode contrôlé, état libre sinon
  // (pour autoriser une saisie texte invalide temporaire).
  const [internalValue, setInternalValue] = React.useState(formatDate(date));
  const value = isControlled ? formatDate(controlledDate) : internalValue;
  const setValue = (next: string) => {
    if (!isControlled) {
      setInternalValue(next);
    }
  };

  return (
    <Field className="w-[343px]">
      <InputGroup className="h-[53px] border border-[#725ADF] text-white">
        <InputGroupInput
          id="date-required"
          value={value}
          placeholder="June 01, 2025"
          onChange={(e) => {
            const date = new Date(e.target.value);
            setValue(e.target.value);
            if (isValidDate(date)) {
              setDate(date);
              setMonth(date);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              render={
                <InputGroupButton
                  id="date-picker"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Select date"
                  className="text-white hover:bg-transparent hover:text-white"
                />
              }
            >
              <CalendarIcon />
              <span className="sr-only">Select date</span>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden bg-white p-0 text-black"
              align="end"
              alignOffset={-8}
              sideOffset={10}
              container={container}
            >
              <Calendar
                className="bg-white text-black"
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setDate(date);
                  setValue(formatDate(date));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
