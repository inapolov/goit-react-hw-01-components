import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'

function FriendListItem({ avatar, name,isOnline }) {    
    return (
        <>
        <span className={styles.status} style={{backgroundColor:isOnline?`green`:`red`}}></span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
        </>
    )
};
 
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
};

export default FriendListItem;