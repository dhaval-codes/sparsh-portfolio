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

function PublicationBox({ data, index, isVisible, animationDelay }) {
  return (
    <PublicationBoxWrpr
      index={index}
      isVisible={isVisible}
      animationDelay={animationDelay}
    >
      <PublicationsTextWrpr>
        <PublicationHeading>{data?.heading}</PublicationHeading>
        <PublicationContributors>{data?.contributors}</PublicationContributors>
        <PublicationText>{data.extrainfo}</PublicationText>
        <TagButtonWrpr>
          {Object.entries(data.link).map(
            ([key, value], index) =>
              value && (
                <SpecialButton
                  key={key}
                  text={key.toUpperCase()}
                  color={CustomColors[index % CustomColors.length]}
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
