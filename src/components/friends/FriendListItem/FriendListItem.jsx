import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      {/* <isOnline isOnline={isOnline}></isOnline>
      <avatar src={avatar} alt="User avatar" width="48" />
      <name>{name}</name> */}
      <span isOnline={isOnline} class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
