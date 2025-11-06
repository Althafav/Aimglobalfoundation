import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import axios from "axios";

const isPreview = process.env.NODE_ENV !== "production";

export const deliveryClient = createDeliveryClient({
  environmentId: "de307379-0b18-004a-e5d5-dee138356386",
  secureApiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZWMyOTVjZTg2ODU0MjU1OGY4YWFhMzNkYThkOGJlNiIsImlhdCI6MTc2MjMyODE0NiwibmJmIjoxNzYyMzI4MTQ2LCJleHAiOjE4NDU5NjMzMDAsInZlciI6IjIuMC4wIiwic2NvcGVfaWQiOiI4NmZmZTFkOTNkNzU0MjI5YmRmMzJjZGEyNGI0NGVhZCIsInByb2plY3RfY29udGFpbmVyX2lkIjoiMzFjZTcxOGU5MzhkMDAwM2NkNmVlZGNhMGM1MmVhYzAiLCJhdWQiOiJkZWxpdmVyLmtvbnRlbnQuYWkifQ.NTTWFCN0z-va0mVphh1rwkK9mwWR-1drpAG6kATUiv4",

  previewApiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NTZhYWMxMzQyMjc0OWY4YmZiZWVjN2MwMmI4ZDJiNyIsImlhdCI6MTc2MjMyNzgwNywibmJmIjoxNzYyMzI3ODA3LCJleHAiOjE4MzU0MjIxNDAsInZlciI6IjIuMC4wIiwic2NvcGVfaWQiOiJiYzc1ZGI0ZGFlYTg0ODc5OTZhYTQwZWJiMmMyMGMyNCIsInByb2plY3RfY29udGFpbmVyX2lkIjoiMzFjZTcxOGU5MzhkMDAwM2NkNmVlZGNhMGM1MmVhYzAiLCJhdWQiOiJkZWxpdmVyLmtvbnRlbnQuYWkifQ.25NG0LCEn-P3UiOApWHtmKXQXt6SH87iRtjHaVSsOzo",
  excludeArchivedItems: !isPreview,
  defaultQueryConfig: {
    usePreviewMode: isPreview,
  },
});

export const EventID = "04f6919c-7c2c-4397-b46c-efcfcab1539a";
export const SITE_NAME = "AIM Global Foundation";
export const SITE_URL = "https://www.aimglobalfoundation.com/";
