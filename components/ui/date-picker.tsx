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
}: {
  container?: React.ComponentProps<typeof PopoverContent>['container'];
}) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date('2025-06-01'));
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(formatDate(date));

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
