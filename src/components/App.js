import React from "react";
import user from "./profile/user.json";
import Profile from "./profile/Profile.js";
import StatsData from "./statisticData/statsData.json";
import StatisticData from "./statisticData/StatistiсData";
import FriendsList from "./friendsList/FriendsList";
import friends from "./friendsList/friends.json";
import transactions from "./transactionHistory/transactionHistory.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";

const App = () => (
<>
<Profile
avatar={user.avatar}
name={user.name}
tag={user.tag}
location={user.location}
stats={user.stats}
/>
<StatisticData title="Upload stats" stats={StatsData} />
<FriendsList title="My friends" friends={friends} />
<TransactionHistory items={transactions} />,
</>
);

export default App;
