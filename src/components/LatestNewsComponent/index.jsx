import React from "react";
import {
  LatestNewsWrpr,
  NewsCardsWrpr,
  NewsHeading,
  SeeMoreButtonWrpr,
} from "./style";
import NewsCard from "../NewsCard";
import { NewsArray } from "@/data/LatestNews";
import { PrimaryButton } from "../Buttons";

function LatestNewsComponent() {
  return (
    <LatestNewsWrpr>
      <NewsHeading>Latest News</NewsHeading>
      <NewsCardsWrpr>
        {NewsArray.map((items, key) => {
          if (key < 5) {
            return <NewsCard data={items} key={key} />;
          }
        })}
      </NewsCardsWrpr>
      <SeeMoreButtonWrpr>
        <PrimaryButton text="See More" />
      </SeeMoreButtonWrpr>
    </LatestNewsWrpr>
  );
}

export default LatestNewsComponent;
