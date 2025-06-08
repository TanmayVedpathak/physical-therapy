import { useEffect } from "react";

export default function YouTubeModal({ videoId, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
        >
          ✕
        </button>
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
