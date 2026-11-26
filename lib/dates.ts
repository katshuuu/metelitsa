const MONTHS_GENITIVE = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const MONTHS_NOMINATIVE = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

export function parseIsoDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month, day, date: new Date(year, month - 1, day) };
}

export function formatDay(iso: string) {
  return String(parseIsoDate(iso).day);
}

export function formatMonthYear(iso: string) {
  const { month, year } = parseIsoDate(iso);
  return `${MONTHS_GENITIVE[month - 1]} ${year}`;
}

export function formatFullDate(iso: string) {
  const { day, month, year } = parseIsoDate(iso);
  return `${day} ${MONTHS_GENITIVE[month - 1]} ${year}`;
}

export function formatRange(start: string, end?: string) {
  if (!end || end === start) return formatFullDate(start);
  const a = parseIsoDate(start);
  const b = parseIsoDate(end);
  if (a.year === b.year && a.month === b.month) {
    return `${a.day}–${b.day} ${MONTHS_GENITIVE[a.month - 1]} ${a.year}`;
  }
  return `${formatFullDate(start)} — ${formatFullDate(end)}`;
}

export function monthKey(iso: string) {
  const { year, month } = parseIsoDate(iso);
  return `${year}-${String(month).padStart(2, "0")}`;
}

export function monthLabel(key: string) {
  const [year, month] = key.split("-").map(Number);
  return `${MONTHS_NOMINATIVE[month - 1]} ${year}`;
}

export function yearsOnStage(now = new Date()) {
  return now.getFullYear() - 1989;
}

export function yearsWord(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "год";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "года";
  return "лет";
}

export function isUpcoming(endOrStart: string, now = new Date()) {
  const { date } = parseIsoDate(endOrStart);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return date >= today;
}
