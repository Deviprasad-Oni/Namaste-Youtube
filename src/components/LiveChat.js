import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1500);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[900px] ml-2 p-2 font-medium border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            /* {Disclaimer: Dont use indexes as keys */
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on form submit", liveMessage);
          dispatch(addMessage({ name: "Akshay", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-[270px]"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="px-2 mx-2 bg-green-100"
          onSubmit={() => {
            dispatch(addMessage({ name: "Akshay", message: liveMessage }));
            setLiveMessage("");
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
