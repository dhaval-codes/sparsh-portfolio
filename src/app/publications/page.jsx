"use client";
import React, { useState, useEffect } from "react";

import { RecentPublicationsArray } from "@/data/RecentPublications";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PublicationHeading } from "@/components/RecentPublicationsComponent/style";
import { RecentPublicationsWrpr } from "@/components/RecentPublicationsComponent/style";

import { PageWrpr } from "../style";
import PublicationBox from "@/components/PublicationBox";

function PublicationsPage() {
  const [containerRef, isContainerIntersecting, hasContainerIntersected] =
    useIntersectionObserver();
  const [visiblePublications, setVisiblePublications] = useState([]);

  useEffect(() => {
    if (hasContainerIntersected) {
      // Stagger the animation of each publication box
      RecentPublicationsArray.forEach((_, index) => {
        setTimeout(() => {
          setVisiblePublications((prev) => [...prev, index]);
        }, index * 200); // 200ms delay between each box
      });
    }
  }, [hasContainerIntersected]);

  // Reset animations when container leaves viewport (optional)
  useEffect(() => {
    if (!isContainerIntersecting && hasContainerIntersected) {
      // Optional: Reset animations when scrolling away
      // setVisiblePublications([]);
    }
  }, [isContainerIntersecting, hasContainerIntersected]);

  return (
    <PageWrpr>
      <RecentPublicationsWrpr ref={containerRef}>
        <PublicationHeading>All Publications</PublicationHeading>
        {RecentPublicationsArray.map((items, key) => {
          return (
            <PublicationBox
              data={items}
              key={key}
              index={key}
              isVisible={visiblePublications.includes(key)}
              animationDelay={key * 0.2}
            />
          );
        })}
      </RecentPublicationsWrpr>
    </PageWrpr>
  );
}

export default PublicationsPage;
