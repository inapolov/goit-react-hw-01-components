import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
    <li class="item" key={friend.id}>        
        <FriendListItem avatar={friend.avatar } name={friend.name} />
    </li>
            ))}
</ul>
    );
};
 
FriendList.propTypes = {
    id: PropTypes.number,
    friends: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;