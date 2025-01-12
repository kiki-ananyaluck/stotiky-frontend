"use client";
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RxCross2 } from "react-icons/rx";
import { Input } from 'antd';
import { useSetAccessToken } from '@/hook/useSetAccessToken';
import { searchSong } from '@/_service/search';
import DisplaySongRow from '../display_song/DisplaySongRow';
import Footer from '../Footer';
import { handleSearchChange } from '@/utils/handleSearchChange';

interface SearchForPlayListProps {
  playlistId: string;
  setDisplayTrack: any;
  setDisplayDetail:any
}

const SearchForPlayList = ({ playlistId, setDisplayTrack,setDisplayDetail }: SearchForPlayListProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const { accessToken } = useSetAccessToken();


  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <div className='m-4'>
      <div className='flex mb-4'>
        <h2>มาค้นหาเพลงสำหรับเพลย์ลิสต์ของคุณกัน</h2>
      </div>
      <div>
        <Input
          placeholder="Search for tracks"
          style={{
            backgroundColor: '#2A2A2A',
            color: '#afafaf',
            height: '40px',
            width: '400px',
            borderRadius: '5px',
          }}
          prefix={<FiSearch className='w-6 h-6 text-[#afafaf]' />}
          suffix={
            query && <RxCross2 className='w-6 h-6 text-[#afafaf]' onClick={handleClearSearch} />
          }
          value={query}
          onChange={(e)=>handleSearchChange(
            e,
            setQuery,
            setLoading,
            setResults,
            accessToken
          )}
        />
      </div>
      <div className='min-h-[200px]'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {results.length > 0 ? (
              <DisplaySongRow results={results} playlistId={playlistId} setDisplayTrack={setDisplayTrack} setDisplayDetail={setDisplayDetail}/>
            ) : (
              query && <div>No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForPlayList;
