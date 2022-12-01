import React from 'react'
import { db } from "../db";

const ClearDataBaseButton = () => {
  const clearDataBase = () => {
    db.transaction("rw", db.tables, async () => {
      await Promise.all(db.tables.map(table => table.clear()));
    });
  };

  return (
    <button onClick={clearDataBase}>Clear DataBase</button>
  )
}

export default ClearDataBaseButton