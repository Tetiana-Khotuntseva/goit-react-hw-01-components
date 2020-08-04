import React from "react";
import PropTypes from "prop-types";
import styles from "../../friendsList/friends.module.css";

function FriendlistItem({ id, isOnline, name, avatar }) {
return (
<li className={styles.friendListItem} key={id}>
<span className={isOnline ? styles.isOnline : styles.isOfline}></span>
<p className={styles.name}>{name}</p>
<img className={styles.avatar} src={avatar} alt="" width="48" />
</li>
);
}

FriendlistItem.defaultProps = {
avatar:
"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
alt: "friend ava†ar",
};

FriendlistItem.propTypes = {
title: PropTypes.string,
friends: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.number.isRequired,
isOnline: PropTypes.bool.isRequired,
name: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
}).isRequired
).isRequired,
};

export default FriendlistItem;
