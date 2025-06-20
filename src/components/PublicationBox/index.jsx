"use client";
import React from "react";
import {
  PublicationBoxWrpr,
  PublicationContributors,
  PublicationHeading,
  PublicationLogo,
  PublicationsTextWrpr,
  PublicationText,
  TagButtonWrpr,
} from "./style";
import { SpecialButton } from "../Buttons";

import { CustomColors } from "@/data/RecentPublications";

function PublicationBox({ data, index }) {
  return (
    <PublicationBoxWrpr index={index}>
      <PublicationsTextWrpr>
        <PublicationHeading>{data.heading}</PublicationHeading>
        <PublicationContributors>{data?.contributors}</PublicationContributors>
        <PublicationText>{data.extrainfo}</PublicationText>
        <TagButtonWrpr>
          {Object.entries(data.link).map(
            ([key, value], index) =>
              value && (
                <SpecialButton
                  key={key}
                  text={key.toUpperCase()}
                  color={CustomColors[index % CustomColors.length]} // loop colors if more links
                  onClick={() => window.open(value, "_blank")}
                />
              )
          )}
        </TagButtonWrpr>
      </PublicationsTextWrpr>
      <PublicationLogo>
        {data.place.split("").map((char, idx) => (
          <span key={idx}>{char}</span>
        ))}
        {data.awards && (
          <div className="award">
            🏆 <span>{data.awards}</span>
          </div>
        )}
      </PublicationLogo>
    </PublicationBoxWrpr>
  );
}

export default PublicationBox;
