import React from "react";
import PropTypes from "prop-types";
import styles from "./statisticData.module.css";

function StatisticData({ stats = [], title }) {
return (
<section className={styles.statistic}>
<h2 className={styles.title}>{title}</h2>
<ul className={styles.statsList}>
{stats.map((item) => (
<li className={styles.item} key={item.id}>
<span className={styles.label}>{item.label}</span>
<span className={styles.percentage}>{item.percentage}</span>
</li>
))}
</ul>
</section>
);
}

StatisticData.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.string.isRequired,
label: PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
})
),
};

export default StatisticData;
