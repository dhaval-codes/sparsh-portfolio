"use client";
import { PageWrpr } from "./style";
import HeroComponent from "../components/HeroComponent/index.jsx";
import LatestNewsComponent from "../components/LatestNewsComponent/index.jsx";
import RecentPublicationsComponent from "../components/RecentPublicationsComponent/index.jsx";

export default function Home() {
  return (
    <PageWrpr>
      <HeroComponent />
      <LatestNewsComponent />
      <RecentPublicationsComponent />
    </PageWrpr>
  );
}
