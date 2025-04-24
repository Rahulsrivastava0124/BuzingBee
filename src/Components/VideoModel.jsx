import React from "react";
import buzingVideo from "../assets/buzingVideo.mp4";

export default function VideoModel() {
  return (
    <>
      <dialog id="video_model" className="modal">
        <div className="modal-box p-2 rounded-2xl max-w-5xl">
          <video controls className="rounded-2xl" alt="buzing video">
            <source src={buzingVideo} type="video/mp4" />
          </video>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
      </dialog>
    </>
  );
}
