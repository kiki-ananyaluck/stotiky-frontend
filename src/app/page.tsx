"use client"
import '@ant-design/v5-patch-for-react-19';
import FooterBanner from "@/components/FooterBanner";
import Navbar from "@/components/Navbar";
import PopularAlbumSection from "@/components/popular_album/PopularAlbumSection";
import PopularSection from "@/components/popular_artists/PopularSection";
import PopularPlaylistSection from "@/components/popular_playlist/PopularPlaylistSection";
import SideBar from "@/components/side_bar/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="w-full p-4 flex flex-col gap-10">
        </div>
      </div>
      <FooterBanner />
    </>
  );
}
