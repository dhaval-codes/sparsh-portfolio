"use client";
import HeroComponent from "@/components/HeroComponent";
import { PageWrpr } from "./style";
import LatestNewsComponent from "@/components/LatestNewsComponent";
import RecentPublicationsComponent from "@/components/RecentPublicationsComponent";

export default function Home() {
  return (
    <PageWrpr>
      <HeroComponent />
      <LatestNewsComponent />
      <RecentPublicationsComponent />
    </PageWrpr>
  );
}
