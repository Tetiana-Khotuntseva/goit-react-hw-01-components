import React from "react";
import PropTypes from "prop-types";
import styles from "./profile.module.css";

function Profile({ avatar, name, tag, location, alt, stats }) {
return (
<div className={styles.profile}>
<div className={styles.description}>
<img src={avatar} alt={alt} className={styles.avatar} />
<p className={styles.name}>{name}</p>
<p className={styles.tag}>@{tag}</p>
<p className={styles.location}>{location}</p>
</div>
<ul className={styles.stats}>
{Object.keys(stats).map((item) => (
<li className={styles.statsListItem} key={item}>
<span className={styles.label}>{item}</span>
<span className={styles.quantity}>{stats[item]}</span>
</li>
))}
</ul>
</div>
);
}

Profile.defaultProps = {
avatar:
"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
alt: "user ava†ar",
};

Profile.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string,
alt: PropTypes.string,
};
export default Profile;
