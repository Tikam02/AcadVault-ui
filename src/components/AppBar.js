import React, { useState } from "react";
import {
  TaskBar as React95AppBar,
  Modal,
  List,
  Input
} from "@react95/core";

function AppBar() {
  const [first, toggleFirst] = useState(false);

  const closeFirst = () => toggleFirst(false);

  return (
    <>
      {first && (
        <Modal
          icon="windows_explorer"
          title="Profile"
          closeModal={closeFirst}
          width="300"
          height="200"
        />
      )}
      <React95AppBar
        list={
          <List>
            <List.Item icon="windows_explorer" onClick={() => toggleFirst(true)}>
              Profile
            </List.Item>
          </List>
        }
      />
      <Input placeholder="Search..." width={150}/>
    </>
    
  );
}

export default AppBar;
