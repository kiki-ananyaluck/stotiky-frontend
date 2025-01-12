import { delTrackPlaylist } from "@/_service/playlist";
import { fetchTrackPlaylist } from "./fetchTrackPlaylist";

export const handleDeleteTrack = async (
  track_id: any,
  snapshot_id: string,
  playlistId: string,
  accessToken: string,
  setDisplayTrack: any
  ,setDisplayDetail:any
) => {
  console.log("playlistId",playlistId)
  console.log("snapshot_id",snapshot_id)
  const tracks = Array.isArray(track_id) ? track_id : [track_id];

  const playlistData = {
    tracks: tracks.map((track: string) => ({ uri: track })),
    snapshot_id: snapshot_id,
  };

  try {
    const response = await delTrackPlaylist(accessToken, playlistData, playlistId);
    if (response) {
      await fetchTrackPlaylist(accessToken, playlistId, setDisplayTrack,setDisplayDetail);
    }
  } catch (error) {
    console.error("Error during track deletion:", error);
    // Optionally, you can display a user-friendly message to the UI here
  }
};


