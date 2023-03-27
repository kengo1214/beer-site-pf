import dayjs, { ConfigType } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

// UTC -> "2022_04" のフォーマットに変換
export const formatDate = (date: ConfigType): string => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM");

  return formattedDate;
};

interface Content {
  publishedAt: string;
  // 他にもプロパティがあると仮定
}

interface Group {
  [yearMonthString: string]: Content[];
}

// 記事をグルーピングする処理（グループ化）
export const groupBy = function (contents: Content[]): Group {
  return contents.reduce(function (group: Group, x: Content) {
    const yearMonthString = formatDate(x.publishedAt);
    (group[yearMonthString] = group[yearMonthString] || []).push(x);
    return group;
  }, {});
};
