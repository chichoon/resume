interface Params {
  startDateYear: number;
  startDateMonth: number;
  startDateDay?: number;
  endDateYear?: number;
  endDateMonth?: number;
  endDateDay?: number;
}

export function getPeriodString({
  startDateYear,
  startDateMonth,
  startDateDay,
  endDateYear,
  endDateMonth,
  endDateDay,
}: Params) {
  return `${startDateYear}. ${startDateMonth.toString().padStart(2, '0')}${
    startDateDay ? `. ${startDateDay.toString().padStart(2, '0')}` : ''
  } ~ ${endDateYear ?? ''}${endDateMonth ? `. ${endDateMonth.toString().padStart(2, '0')}` : ''}${
    endDateDay ? `. ${endDateDay.toString().padStart(2, '0')}` : ''
  }`;
}
