import { SiWhatsapp } from "react-icons/si";

export const ChatBubble = () => {
  return (
    <>
      <a
        href={"https://wa.link/pi11ss"}
        className={
          " size-16 fixed bottom-4 btn  right-4 z-50 shadow-2xl" +
          " shadow-green-500 bg-green-400" +
          " rounded-full "
        }
      >
        <SiWhatsapp className={"text-3xl text-white "} />
      </a>
    </>
  );
};
