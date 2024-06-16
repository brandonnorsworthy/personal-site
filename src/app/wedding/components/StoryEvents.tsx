import { Event } from "../../data/specialEventsTimeline";
import Cube from '../../../../public/svg/cube.svg'
import Blob from "./Blob";
import Engage from '../../../../public/svg/timeline/engage.svg';
import House from '../../../../public/svg/timeline/house.svg';
import Ringbox from '../../../../public/svg/timeline/ringbox.svg';
import Key from '../../../../public/svg/timeline/key.svg';

interface StoryEventProps {
  event: Event,
  index: number
}

const StoryEvents: React.FC<StoryEventProps> = ({ event, index }) => {

  const getEventIcon = (icon: string) => {
    switch (icon) {
      case 'engage':
        return <Engage alt="icon for event" className="fill-wedding-primary-shadow" width={70} height={70} />;
      case 'house':
        return <House alt="icon for event" className="fill-wedding-primary-shadow" width={70} height={70} />;
      case 'ringbox':
        return <Ringbox alt="icon for event" className="fill-wedding-primary-shadow" width={70} height={70} />;
      case 'key':
        return <Key alt="icon for event" className="fill-wedding-primary-shadow" width={70} height={70} />;
      default:
        return <span>hi</span>;
    }
  }

  const dateElement =
    <>
      <h3 className='text-lg font-bold md:text-2xl'>{event.date}</h3>
      <p className='text-lg md:text-2xl'>{event.description}</p>
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
        {getEventIcon(event.icon)}
      </div>
    </div>

  return (
    <div className='flex items-center justify-center w-full mt-10 text-black'>
      <div className="flex flex-col items-end flex-grow w-full text-right">
        {
          index % 2 !== 0
            ? dateElement
            : imageElement
        }
      </div>
      <div className="flex justify-center px-4 md:px-20">
        <Cube alt="spacer" width={32} height={32} className="rotate-45 fill-wedding-gray" />
      </div>
      <div className="flex flex-col items-start flex-grow w-full text-left">
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