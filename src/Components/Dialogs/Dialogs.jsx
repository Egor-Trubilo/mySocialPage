import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem  name ={dialog.name} id={dialog.id}/>)



    let messagesElements = props.state.messagesData.map(mess => <Message message={mess.message}/>)


  return (
      <div className={d.dialogs}>
          <div className={d.dialogsItems}>
              <ul>
                  {dialogsElements}
              </ul>
          </div>
          <div className={d.messages}>
              {messagesElements}
          </div>
      </div>

  )
}

export default Dialogs ;