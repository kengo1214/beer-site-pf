// // libs/util.js
// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(utc);
// dayjs.extend(timezone);

// // UTC -> "2022_04" のフォーマットに変換
// export const formatDate = (date) => {
//   const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM");
//   return formattedDate;
// };

// export const groupBy = function (contents) {
//   return contents.reduce(function (group, x) {
//     const yearMonthString = formatDate(new Date(x["publishedAt"]));
//     (group[yearMonthString] = group[yearMonthString] || []).push(x);
//     return group;
//   }, {});
// };

//🔥chatGPTで1回目の修正

// import dayjs, { Dayjs } from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(utc);
// dayjs.extend(timezone);

// // UTC -> "2022_04" のフォーマットに変換
// export const formatDate = (date: Date): string => {
//   const formattedDate: string = dayjs
//     .utc(date)
//     .tz("Asia/Tokyo")
//     .format("YYYY_MM");
//   return formattedDate;
// };

// interface GroupedContents {
//   [key: string]: any[];
// }

// export const groupBy = (contents: any[]): GroupedContents => {
//   return contents.reduce((group: GroupedContents, x: any) => {
//     const yearMonthString: string = formatDate(new Date(x["publishedAt"]));
//     (group[yearMonthString] = group[yearMonthString] || []).push(x);
//     return group;
//   }, {});
// };

//🔥chatGPTで2回目の修正

import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

type Content = {
  publishedAt: string;
  // 他にもプロパティがある可能性があるため、必要に応じて追加する
};

type GroupedContents = {
  [key: string]: Content[];
};

const formatDate = (date: Date): string => {
  const formattedDate: string = dayjs
    .utc(date)
    .tz("Asia/Tokyo")
    .format("YYYY_MM");
  return formattedDate;
};

export const groupBy = (contents: Content[]): GroupedContents => {
  return contents.reduce((group: GroupedContents, x: Content) => {
    const yearMonthString: string = formatDate(new Date(x.publishedAt));
    (group[yearMonthString] = group[yearMonthString] || []).push(x);
    return group;
  }, {});
};
