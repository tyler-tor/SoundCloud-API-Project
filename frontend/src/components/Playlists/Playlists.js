import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPlaylists } from '../../store/playlists';
import CreatePlaylistModal from '../CreatePlaylist/CreatePlaylistModal';
import DeletePlaylist from './DeletePlaylist';
import UpdatePlaylistModal from './UpdatePlaylistModal';
// import AddSongModal from './AddSongModal'
import './Playlists.css';

function Playlists() {
    const playlists = Object.values(useSelector(state => state.playlists.playlists)).reverse();
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlaylists());
    }, [dispatch]);

    if (!playlists) {
        return null;
    };

    const checkValidation = (playlist) => {
        if (user.id === playlist.userId) {
            return (
                <div className='ind-playlist-actions'>
                    {/* <AddSongModal playlist={playlist} userId={user.id} /> */}
                    <UpdatePlaylistModal playlist={playlist} userId={user.id} />
                    <DeletePlaylist playlist={playlist} userId={user.id} />
                </div>
            )
        }
    }

    return playlists && (
        <div className='cp-div' >
            <div className='entire-playlists-container'>
                {user && <CreatePlaylistModal />}
                {playlists && playlists.map(playlist => {
                    return (
                        <div className='playlist-container'
                            key={playlist.id}>
                            <div className='ind-playlist-info'>
                                <img src={playlist.previewImage} alt={playlist.name}
                                    className='playlist-img' />
                                <NavLink to={`/playlists/${playlist.id}`}
                                    className='playlist-titles'
                                >
                                    {playlist.name}
                                </NavLink>
                            </div>
                            {user && checkValidation(playlist)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Playlists
