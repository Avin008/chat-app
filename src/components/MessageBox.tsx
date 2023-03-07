const MessageBox = () => {
  return (
    <div className="border fixed bottom-5 right-40 mx-auto border-black w-1/2 h-12">
      <textarea
        className="resize-none h-full w-full p-2"
        name=""
        id=""
        placeholder="Write Your Message Here..."
      ></textarea>
    </div>
  );
};

export default MessageBox;
