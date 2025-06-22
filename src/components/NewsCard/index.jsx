"use client";
import React from "react";
import {
  Line,
  NewsCardWrpr,
  NewsDate,
  NewsDescription,
  NewsHeading,
} from "./style";

function NewsCard({ data, index, isVisible, animationDelay }) {
  return (
    <NewsCardWrpr
      isVisible={isVisible}
      animationDelay={animationDelay}
      index={index}
    >
      <NewsHeading>{data.date}</NewsHeading>
      <Line />
      <NewsDescription dangerouslySetInnerHTML={{ __html: data.Description }} />
    </NewsCardWrpr>
  );
}

export default NewsCard;
