import { useState, useRef } from "react";
const MessageBox = ({
  setMessageFunc,
}: {
  setMessageFunc: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");
  const messageRef = useRef<any>(null);

  return (
    <div className="border fixed flex items-center bottom-5 right-40 bg-[#FFFFFF] mx-auto border-black w-1/2 h-12">
      <textarea
        className="resize-none h-full w-[90%] p-2 outline-none"
        name=""
        id=""
        placeholder="Write Your Message Here..."
        value={message}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement>
        ) => {
          setMessage(e.target.value);
        }}
        ref={messageRef}
      ></textarea>
      <button
        className="font-medium"
        onClick={() => {
          setMessageFunc(message);
          setMessage("");
          messageRef.current.focus();
        }}
      >
        SEND
      </button>
    </div>
  );
};

export default MessageBox;
