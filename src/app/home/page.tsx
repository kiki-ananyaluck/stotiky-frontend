"use client"

import '@ant-design/v5-patch-for-react-19';
import Navbar from "@/components/Navbar";
import FooterBanner from "@/components/FooterBanner";
import SideBar from "@/components/side_bar/SideBar";
import PopularSection from "@/components/popular_artists/PopularSection";
import PopularAlbumSection from "@/components/popular_album/PopularAlbumSection";
import PopularPlaylistSection from "@/components/popular_playlist/PopularPlaylistSection";
import NavbarProfile from '@/components/NavbarProfile';

export default function Home() {

  return (
    <>
      <NavbarProfile />
      <div className="flex">
        <SideBar />
        <div className="w-full p-4 flex flex-col gap-10">
          <PopularSection />
          <PopularAlbumSection />
          <PopularPlaylistSection />
        </div>
      </div>
      {/* <FooterBanner /> */}
    </>
  );
}
