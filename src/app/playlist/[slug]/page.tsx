'use client'

import PlayListHeader from "@/components/display_song/PlayListHeader"
import TracksPlayList from "@/components/display_song/TracksPlayList"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import NavbarProfile from "@/components/NavbarProfile"
import SearchForPlayList from "@/components/seacrh/SearchForPlayList"
import SideBarList from "@/components/side_bar/SideBarList"
import SongPlay from "@/components/SongPlay"
import { useGetTracksPlaylist } from "@/hook/playlist/useGetTracksPlaylist"
import { useSetAccessToken } from "@/hook/useSetAccessToken"
import React from "react"

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // Use React.use to unwrap the params Promise
  const { slug } = React.use(params); // Unwrap the params

  const { accessToken } = useSetAccessToken();
  const { displayTrack, setDisplayTrack, displayDetail, setDisplayDetail } = useGetTracksPlaylist({ accessToken, slug });

  return (
    <>
      <NavbarProfile />
      <div className="flex">
        <SideBarList />
        <div className="w-full flex flex-col gap-10 bg-[#121212] mx-5">
          <PlayListHeader displayDetail={displayDetail}/>
          {displayTrack.length > 0 ?(
            <TracksPlayList playlistId={slug} displayTrack={displayTrack} setDisplayTrack={setDisplayTrack} setDisplayDetail={setDisplayDetail} displayDetail={displayDetail} />
          ): <></>} 
          <SearchForPlayList playlistId={slug} setDisplayTrack={setDisplayTrack} setDisplayDetail={setDisplayDetail} />
          <Footer /> 
        </div>
      </div>
      {/* <SongPlay /> */}
    </>
  )
}
