import { FriendListItem } from 'components/friends/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return friends.map(friend => (
    <FriendListItem
      key={friend.id}
      id={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
