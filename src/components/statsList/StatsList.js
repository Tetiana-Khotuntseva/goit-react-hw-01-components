import React from "react";
import PropTypes from "prop-types";
import StatsListItem from "./statsListItem/StatsListItem.js";

// const keyId = Date;
function StatsList({ stats = [] }) {
return (
<ul>
{stats.map((stat) => (
<StatsListItem label={stat.label} quantity={stat.quantity} />
))}
</ul>
);
}

StatsList.propTypes = {
stats: PropTypes.arrayOf(
PropTypes.shape({
label: PropTypes.string.isRequired,
quantity: PropTypes.string.isRequired,
}).isRequired
).isRequired,
};

export default StatsList;