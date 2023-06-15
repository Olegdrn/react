import { useEffect, useState } from "react"
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';


export function Chats({ chatsList }) {
  // const chatsList = props.chatsList;

  return <>
    <List>
      {chatsList.map((person, i) => (
        <ListItem key={i}>
          <ListItemIcon>{person.icon}</ListItemIcon>
          <ListItemText primary={person.id} />
          <ListItemText primary={person.name} />
        </ListItem>
      ))}
    </List>
  </>
}