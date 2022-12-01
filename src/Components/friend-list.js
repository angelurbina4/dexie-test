import React from "react";
import { db } from "../db";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";



export function FriendList({ minAge, maxAge }) {
  const friends = useLiveQuery(
    
    async () => {
      //
      // Query Dexie's API
      //
      const friends = await db.friends
        .where("age")
        .between(minAge, maxAge)
        .sortBy("id");

      // Return the result
      return friends;
    },
    //spicify vars that affect the query
    [minAge, maxAge]
  );

  return <ul>
    {friends?.map(friend => 
    <li key={friend.id}>
      {friend.name}, {friend.age}
      <button
        onClick={() =>
          db.friends
            .where({
              id: friend.id
            })
            .modify((f) => ++f.age)
        }
      >
        Birthday!
      </button>
    </li>)}
  </ul>;
}