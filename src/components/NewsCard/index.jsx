import React from "react";
import {
  Line,
  NewsCardWrpr,
  NewsDate,
  NewsDescription,
  NewsHeading,
} from "./style";

function NewsCard({ data }) {
  return (
    <NewsCardWrpr>
      <NewsHeading>{data.date}</NewsHeading>
      {/* <NewsDate>{data.date}</NewsDate> */}
      <Line />
      <NewsDescription dangerouslySetInnerHTML={{ __html: data.Description }} />
    </NewsCardWrpr>
  );
}

export default NewsCard;
