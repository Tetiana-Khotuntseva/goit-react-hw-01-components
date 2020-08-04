import React from "react";
import PropTypes from "prop-types";

const StatsListItem = ({ label, quantity }) => (
<li>
<span> {label}</span>
<span> {quantity}</span>
</li>
);

StatsListItem.propTypes = {
label: PropTypes.string.isRequired,
quantity: PropTypes.string.isRequired,
};

export default StatsListItem;

