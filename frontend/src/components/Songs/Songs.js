import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { getSongs } from "../../store/songs";

const Songs = () => {
    const allSongs = useSelector(state => state.songs.Songs)
    const [songs, setSongs] = useState([]);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    // console.log('allSongs', allSongs)

    useEffect(() => {
        const getAllSongs = async () => {
            const songData = await dispatch(getSongs())
            .catch(async res => {
                const data = await res.json();
                data.errors && setErrors(data.errors);
            });
            console.log('songData', songData.Songs)
            return songData.Songs
        };
        // console.log(getAllSongs());
        setSongs(getAllSongs());
    }, []);

    console.log('songs', songs)
    return (
        <div>
            {/* <ul>
                {errors.map(error => {
                    return (<li
                    key={error}>
                        {error}
                    </li>)
                })}
            </ul> */}
            {/* <div>
            {allSongs && (allSongs.map(song => {
                return (
                    <div
                    key={song}>
                        {song}
                    </div>
                )
            }))}
            </div> */}
        </div>
    )
};

export default Songs;
