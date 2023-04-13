const [input, setInput] = useState("");

  const responseFromBot = async () => {
    const { data } = await axios.post("http://localhost:4000/message", {
      input,
    });

    setMessages((prev) => [
      ...prev,
      {
        msg: data.input,
        type: "bot",
        time: formatRelative(new Date(), new Date()),
      },
    ]);
  };

  const submitMsgAndPost = async (e) => {
    e.preventDefault();

    if (!input) return;

    setMessages((prev) => [
      ...prev,
      {
        msg: input,
        type: "user",
        time: formatRelative(new Date(), new Date()),
      },
    ]);
    setInput("");

    await responseFromBot();
  };

  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your query related to pharmacy here please!"
      />
      <button type="submit" onClick={submitMsgAndPost}>
        <SendButtonLogo />
      </button>
    </form>
  );