import Image from 'next/image';

export default function MyImage() {
  return (
    <Image
      src="/images/profile.jpg" // Route of the image file
      height={600} // Desired size with correct aspect ratio
      width={400} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  )
};