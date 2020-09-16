import React, { useState } from "react";
import styled from "styled-components";
import {
  AppBar as React95AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
} from "react95";

const StartWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const StyledList = styled(List)`
  position: absolute;
  left: 0px;
  top: 100%;
`;

function AppBar() {
  const [open, setOpen] = useState(false);

  return (
    <React95AppBar>
      <StyledToolbar>
        <StartWrapper>
          <Button onClick={() => setOpen(!open)} active={open}>
            Start
          </Button>
          {open && (
            <StyledList onClick={() => setOpen(false)}>
              <ListItem>
                <span role="img" aria-label="👨‍💻">
                  👨‍💻
                </span>
                John Doe
              </ListItem>
            </StyledList>
          )}
        </StartWrapper>
        <TextField placeholder="Search..." width={150} />
      </StyledToolbar>
    </React95AppBar>
  );
}

export default AppBar;
