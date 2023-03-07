const MessageBox = () => {
  return (
    <div className="border fixed flex items-center bottom-5 right-40 bg-[#FFFFFF] mx-auto border-black w-1/2 h-12">
      <textarea
        className="resize-none h-full w-[90%] p-2 outline-none"
        name=""
        id=""
        placeholder="Write Your Message Here..."
      ></textarea>
      <button className="font-medium">SEND</button>
    </div>
  );
};

export default MessageBox;
