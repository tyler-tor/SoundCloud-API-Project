import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getSongs } from "../../store/songs";

const Songs = () => {
    const songs = Object.values(useSelector(state => state.songs.allSongs))
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getSongs());
    }, [dispatch]);

    if(!songs) {
        return null;
    }

    return (
        <div>
            {songs && (songs.map(song => {
                return (
                    <div
                    key={song.id}>
                        {song.title}
                    </div>
                )
            }))}
        </div>
    )
};

export default Songs;
