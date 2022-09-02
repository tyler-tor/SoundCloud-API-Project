import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import MyAlbums from "./MyAlbums";
import MyPlaylists from "./MyPlaylists";
import MySongs from "./MySongs";
import { mySongs, myAlbums, myPlaylists } from '../../store/session';


const HomePage = () => {
    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    useEffect(() => {
        if(currentUser){
            dispatch(mySongs());
            dispatch(myAlbums());
            dispatch(myPlaylists());
        }
}, [dispatch, currentUser]);

    return (currentUser ? (
        <div
            className="homepage-contain">
            <div
                className="songs-contain">
                <MySongs  />
            </div>
            <div
                className="albums-contain">
                <MyAlbums  />
            </div>
            <div
                className="playlists-contain">
                <MyPlaylists />
            </div>
        </div >
    ) :
        (
            <div>
                HomePage
            </div>
        ))
}


export default HomePage
