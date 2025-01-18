import { GeneratedImagesProps } from "@/interfaces";
const ImageCard: React.FC<GeneratedImagesProps> = ({
  imageURL,
  prompt,
  width,
  action,
}) => {
  return (
    <div
      onClick={() => action(imageURL)}
      className="mt-6 border hover:cursor-pointer"
    >
      <img
        src={imageURL}
        alt={prompt}
        className={`w-full max-w-md rounded-lg shadow-lg`}
      />
      <h2 className={`${width ? "text-sm" : "text-lg"}`}>Your Prompts:</h2>
      <p className={`${width ? "text-xs" : "text-lg"}`}>{prompt}</p>
    </div>
  );
};
export default ImageCard;
