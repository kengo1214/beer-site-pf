import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

type Content = {
  publishedAt: string;
};

type GroupedContents = {
  [key: string]: Content[];
};

const formatDate = (date: Date): string => {
  const formattedDate: string = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM");
  return formattedDate;
};

export const groupBy = (contents: Content[]): GroupedContents => {
  return contents.reduce((group: GroupedContents, x: Content) => {
    const yearMonthString: string = formatDate(new Date(x.publishedAt));
    (group[yearMonthString] = group[yearMonthString] || []).push(x);
    return group;
  }, {});
};
