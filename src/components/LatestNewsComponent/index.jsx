"use client";
import React, { useState, useEffect } from "react";
import {
  LatestNewsWrpr,
  NewsCardsWrpr,
  NewsHeading,
  SeeMoreButtonWrpr,
} from "./style";
import NewsCard from "../NewsCard";
import { NewsArray } from "@/data/LatestNews";
import { PrimaryButton } from "../Buttons";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"; // Same hook we created before

function LatestNewsComponent() {
  const [containerRef, isContainerIntersecting, hasContainerIntersected] =
    useIntersectionObserver();
  const [visibleNewsCards, setVisibleNewsCards] = useState([]);

  useEffect(() => {
    if (hasContainerIntersected) {
      // Stagger the animation of each news card
      NewsArray.slice(0, 5).forEach((_, index) => {
        setTimeout(() => {
          setVisibleNewsCards((prev) => [...prev, index]);
        }, index * 150); // 150ms delay between each card (slightly faster than publications)
      });
    }
  }, [hasContainerIntersected]);

  return (
    <LatestNewsWrpr ref={containerRef}>
      <NewsHeading>Latest News</NewsHeading>
      <NewsCardsWrpr>
        {NewsArray.map((items, key) => {
          if (key < 5) {
            return (
              <NewsCard
                data={items}
                key={key}
                index={key}
                isVisible={visibleNewsCards.includes(key)}
                animationDelay={key * 0.15}
              />
            );
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
