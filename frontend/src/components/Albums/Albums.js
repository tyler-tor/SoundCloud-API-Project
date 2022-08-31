import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getAlbums } from "../../store/albums";
import * as sessionActions from '../../store/session';

const Albums = () => {
    const albums = Object.values(useSelector(state => state.albums));
    const dispatch = useDispatch();

    // console.log(albums);
    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch]);

    if(!albums){
        return null;
    };

    return (
        <div>
            {albums && (albums.map(album => (
                <div
                key={album.id}>
                    {album.title}
                </div>
            )))}
        </div>
    )
}

export default Albums;
