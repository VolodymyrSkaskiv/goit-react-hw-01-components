import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './statistics/Statistics';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { FriendList } from './friendlist/FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './transactionhistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
