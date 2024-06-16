
import Blobs from "../../../../public/svg/blobs";

interface BlobProps {
  index: number;
  alt: string;
  className: string;
  style: {
    transform: string;
  };
}

const Blob: React.FC<BlobProps> = (props) => {
  let blobElement = null;

  switch ((props.index + 1) % 3) {
    case 1:
      blobElement = <Blobs.blob1 width={75} height={75} {...props}></Blobs.blob1>;
      break;
    case 2:
      blobElement = <Blobs.blob2 width={75} height={75} {...props}></Blobs.blob2>;
      break;
    default:
      blobElement = <Blobs.blob3 width={75} height={75} {...props}></Blobs.blob3>;
      break;
  }

  return blobElement;
}

export default Blob;