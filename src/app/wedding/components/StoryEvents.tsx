import { Event } from "../../data/specialEventsTimeline";
import Cube from '../../../../public/svg/cube.svg'
import Blob from "./Blob";

interface StoryEventProps {
  event: Event,
  index: number
}

const StoryEvents: React.FC<StoryEventProps> = ({ event, index }) => {
  const dateElement =
    <>
      <h3 className='text-2xl font-bold'>{event.date}</h3>
      <p className='text-2xl'>{event.description}</p>
    </>

  let blobRotation = Math.floor(Math.random() * 360)
  let blobMirror = Math.random() > 0.5 ? "scale-x-[-1]" : "";
  let blobColor = "fill-wedding-tertiary-highlight";
  const imageElement =
    <div className="relative h-full">
      <Blob
        index={index}
        alt="simple art to represent the event"
        className={[blobMirror, blobColor].join(" ")}
        style={{
          transform: `rotate(${blobRotation}deg)`
        }} />
      <div className="absolute top-0 flex items-center justify-center w-full h-full">
        <p>hi</p>
      </div>
    </div>

  return (
    <div className='flex items-center justify-center w-full mt-10'>
      <div className="flex flex-col items-end flex-grow w-full">
        {
          index % 2 !== 0
            ? dateElement
            : imageElement
        }
      </div>
      <div className="flex justify-center flex-grow px-20">
        <Cube alt="spacer" width={32} height={32} className="rotate-45 fill-wedding-gray" />
      </div>
      <div className="flex flex-col items-start flex-grow w-full">
        {
          index % 2 === 0
            ? dateElement
            : imageElement
        }
      </div>
    </div>
  );
};

export default StoryEvents;