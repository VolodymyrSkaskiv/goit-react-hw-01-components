import PropTypes from 'prop-types';
import css from './friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={css.status}
      style={{ background: isOnline ? 'green' : 'red' }} //різний колір коли online,offline
    ></span>
    <img className={css.avatar} src={avatar} alt={name} />
    <span className={css.name}>{name}</span>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
