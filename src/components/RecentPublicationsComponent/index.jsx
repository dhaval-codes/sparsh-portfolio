"use client";
import React from "react";
import {
  PublicationHeading,
  RecentPublicationsWrpr,
  SeeMoreButtonWrpr,
} from "./style";
import { RecentPublicationsArray } from "@/data/RecentPublications";
import PublicationBox from "../PublicationBox";
import { PrimaryButton } from "../Buttons";

function RecentPublicationsComponent() {
  return (
    <RecentPublicationsWrpr>
      <PublicationHeading>Recent Publications</PublicationHeading>
      {RecentPublicationsArray.map((items, key) => {
        if (key < 3) {
          return <PublicationBox data={items} key={key} index={key} />;
        }
      })}
      <SeeMoreButtonWrpr>
        <PrimaryButton text="See More" />
      </SeeMoreButtonWrpr>
    </RecentPublicationsWrpr>
  );
}

export default RecentPublicationsComponent;
