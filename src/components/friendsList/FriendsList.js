import React from "react";
import PropTypes from "prop-types";
import styles from "./friends.module.css";
import FriendListItem from "./friendListItem/FriendListItem";

function FriendsList({ friends = [], title }) {
return (
<>
<h2 className={styles.title}>{title}</h2>
<ul className={styles.friendsList}>
{friends.map((item) => (
<FriendListItem
id={item.id}
avatar={item.avatar}
name={item.name}
isOnline={item.isOnline}
/>
))}
</ul>
</>
);
}

FriendsList.defaultProps = {
avatar:
"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
alt: "friend ava†ar",
};

FriendsList.propTypes = {
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

export default FriendsList;
