import { config } from "dotenv";
config();

export default {
  PORT: process.env.PORT || 4200,
  APPID: process.env.APPID || "",
};
