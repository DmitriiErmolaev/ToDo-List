import React from "react";

export default function DeleteItemButton({id, deleteItem}) {
  return  <button onClick={() => deleteItem(id)}> Delete </button>
}
