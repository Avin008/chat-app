import { useState } from "react";
import MessageBox from "../components/MessageBox";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);

  console.log(messages);

  const pushMessageFunc = (message: string) => {
    if (message) {
      setMessages((prev) => [...prev, message]);
    }
  };

  return (
    <div className="">
      <div className="border border-black w-[50%] right-40 h-[70%] bottom-20 absolute">
        <ul className="relative gap-2 px-2 h-full overflow-y-scroll">
          {messages?.map((x: any, index) =>
            index % 2 === 0 ? (
              <li className="flex justify-end border-black left-0 right-0">
                {x}
              </li>
            ) : (
              <li className="left-0 right-0">{x}</li>
            )
          )}
        </ul>
      </div>
      <MessageBox setMessageFunc={pushMessageFunc} />
    </div>
  );
};

export default Chat;
