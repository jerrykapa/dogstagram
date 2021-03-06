import {useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {addFollowedProfile} from '../../services/firebase'
import {addFollowerProfile} from '../../services/firebase'

export default function SuggestedProfile({userDocId, username, profileId, userId}) {
    const [followed,setFollowed] = useState(false)
    async function handleFollowUser() {
        setFollowed(true)
        await addFollowedProfile(userId,profileId,false)
        await addFollowerProfile(userId,profileId,userDocId,false)

    }
    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img src={`/images/avatars/${username}.jpg`} alt={username}
                className="rounded-full w-8 flex mr-3" />
                <Link to={`/p/${username}`}>
                <p className="font-bold text-sm">{username}</p>
                </Link>
            </div>
                <button className="text-xs font-bold text-blue-500" type="button" onClick={handleFollowUser}>
                    Follow 
                    </button>
        </div>
    ): null
}

SuggestedProfile.propTypes = {
    userDocId : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired,
    profileId : PropTypes.string.isRequired,
    userId : PropTypes.string.isRequired,

}
