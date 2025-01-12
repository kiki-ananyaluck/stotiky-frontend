import { searchSong } from "@/_service/search";

export const handleSearchChange = async (
  e: React.ChangeEvent<HTMLInputElement>,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setResults: React.Dispatch<React.SetStateAction<any[]>>,
  accessToken: string
) => {
  const value = e.target.value;
  setQuery(value);

  if (value.trim() !== '') {
    setLoading(true);
    const searchResults = await searchSong(accessToken, value);
    if (searchResults) {
      setResults(searchResults.tracks.items);
    } else {
      setResults([]);
    }
    setLoading(false);
  } else {
    setResults([]);
  }
};