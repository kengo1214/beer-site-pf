import { createClient } from "microcms-js-sdk";

// メニュー（Menu）
export const clientMenu = createClient({
  serviceDomain: "beer-menu",
  apiKey: process.env.API_KEY_MENU || "",
});

//ブログ（Blog）
export const clientBlog = createClient({
  serviceDomain: "beer-blog",
  apiKey: process.env.API_KEY_BLOG || "",
});
