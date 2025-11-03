import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns human-friendly date strings for a deadline and a date range, plus the raw Date values.
 *
 * Rules:
 * - Deadline: 2 weeks from "now" formatted like "25th October, 2025".
 * - Date range: from 3 weeks from now to 5 days after that date, formatted like
 *   - Same month/year: "29th - 5th October 2025"
 *   - Different month, same year: "29th October - 5th of November 2025"
 *   - Different years: "29th October 2025 - 5th of January 2026"
 *
 * Import and usage (anywhere in the app):
 *
 *   import { getDatesDisplay } from '~/lib/utils';
 *   const { deadlineText, rangeText } = getDatesDisplay();
 *   // e.g. deadlineText => "25th October, 2025"
 *   //      rangeText    => "29th October - 5th of November 2025"
 */
export function getDatesDisplay(now: Date = new Date()) {
  const addDays = (date: Date, days: number) => {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  };

  const getOrdinal = (n: number) => {
    const mod100 = n % 100;
    if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
    switch (n % 10) {
      case 1:
        return `${n}st`;
      case 2:
        return `${n}nd`;
      case 3:
        return `${n}rd`;
      default:
        return `${n}th`;
    }
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formatSingleForDeadline = (date: Date) => {
    const day = getOrdinal(date.getDate());
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const formatRange = (start: Date, end: Date) => {
    const sDay = getOrdinal(start.getDate());
    const sMonth = monthNames[start.getMonth()];
    const sYear = start.getFullYear();

    const eDay = getOrdinal(end.getDate());
    const eMonth = monthNames[end.getMonth()];
    const eYear = end.getFullYear();

    const sameMonth = start.getMonth() === end.getMonth() && sYear === eYear;
    const sameYear = sYear === eYear;

    if (sameMonth) {
      // Example: "29th - 5th October 2025"
      return `${sDay} - ${eDay} ${eMonth} ${eYear}`;
    }

    if (sameYear) {
      // Example: "29th October - 5th of November 2025"
      return `${sDay} ${sMonth} - ${eDay} of ${eMonth} ${eYear}`;
    }

    // Different years – include years on both sides for clarity
    // Example: "29th December 2025 - 5th of January 2026"
    return `${sDay} ${sMonth} ${sYear} - ${eDay} of ${eMonth} ${eYear}`;
  };

  // Compute dates based on requirements
  const deadlineDate = addDays(now, 14); // 2 weeks from now
  const rangeStart = addDays(now, 21); // 3 weeks from now
  const rangeEnd = addDays(rangeStart, 5); // 5 days after the start

  return {
    deadlineDate,
    deadlineText: formatSingleForDeadline(deadlineDate),
    rangeStart,
    rangeEnd,
    rangeText: formatRange(rangeStart, rangeEnd),
  } as const;
}
