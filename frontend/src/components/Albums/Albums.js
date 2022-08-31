import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getAlbums } from "../../store/albums";
import * as sessionActions from '../../store/session';

const Albums = ({setIsLoaded}) => {
    const albums = useSelector(state => state.albums);
    const dispatch = useDispatch();

    console.log(albums);
    useEffect(() => {
        dispatch(sessionActions.getCurrUser())
        .then(() => setIsLoaded(true));

        dispatch(getAlbums());
    }, [dispatch]);

    if(!albums){
        return null;
    };

    return (
        <div>
            {albums.map(album => (
                <div>
                    {album.title}
                </div>
            ))}
        </div>
    )
}

export default Albums;
