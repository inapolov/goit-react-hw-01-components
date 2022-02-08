import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from './FriendList.module.css';

function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
    <li className={styles.item} key={friend.id}>        
        <FriendListItem avatar={friend.avatar } name={friend.name} isOnline={friend.isOnline} />
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