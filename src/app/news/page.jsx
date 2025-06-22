"use client";
import {
  LatestNewsWrpr,
  NewsCardsWrpr,
  NewsHeading,
} from "@/components/LatestNewsComponent/style";
import NewsCard from "@/components/NewsCard";
import { NewsArray } from "@/data/LatestNews";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import React, { useState, useEffect } from "react";
import { PageWrpr } from "../style";

function NewsPage() {
  const [containerRef, isContainerIntersecting, hasContainerIntersected] =
    useIntersectionObserver();
  const [visibleNewsCards, setVisibleNewsCards] = useState([]);

  useEffect(() => {
    if (hasContainerIntersected) {
      // Stagger the animation of ALL news cards
      NewsArray.forEach((_, index) => {
        setTimeout(() => {
          setVisibleNewsCards((prev) => [...prev, index]);
        }, index * 150); // 150ms delay between each card
      });
    }
  }, [hasContainerIntersected]);

  return (
    <PageWrpr>
      <LatestNewsWrpr ref={containerRef}>
        <NewsHeading>All News</NewsHeading>
        <NewsCardsWrpr>
          {NewsArray.map((item, key) => (
            <NewsCard
              data={item}
              key={key}
              index={key}
              isVisible={visibleNewsCards.includes(key)}
              animationDelay={key * 0.15}
            />
          ))}
        </NewsCardsWrpr>
      </LatestNewsWrpr>
    </PageWrpr>
  );
}

export default NewsPage;
