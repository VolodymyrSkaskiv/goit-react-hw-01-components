import PropTypes from 'prop-types';
import css from './friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <img className={css.avatar} src={avatar} alt={name} />
    <span className={css.name}>{name}</span>

    <span
      className={css.status}
      style={{ background: isOnline ? 'green' : 'red' }} //різний колір коли online,offline
    ></span>
  </li>
);

FriendListItem.propTypes = {
  avataar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
