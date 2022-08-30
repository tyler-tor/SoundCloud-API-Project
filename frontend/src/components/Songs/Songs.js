import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { getSongs } from "../../store/songs";

const Songs = () => {
    const allSongs = useSelector(state => state.songs.Songs)
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getSongs())
            .catch(async res => {
                const data = res.json();
                data.errors && setErrors(data.errors);
            });
    }, [dispatch]);

    return (
        <div>
            <ul>
                {errors && (errors.map(error => {
                    return (
                    <li
                    key={error}>
                        {error}
                    </li>)
                }))}
            </ul>
            {allSongs && (allSongs.map(song => {
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
