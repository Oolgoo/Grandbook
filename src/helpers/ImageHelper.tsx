import { useState } from 'react';
import Image from 'next/image';

interface Image {
  key: any;
  src: any;
  alt: any;
  width?: any;
  height?: any;
  onClick?: (any) => any;
  onMouseEnter?: (any) => any;
  onMouseLeave?: (any) => any;
  layout?: any;
  objectFit?: any;
  className?: string;
  priority?: any;
  objectPosition?: any;
  isCropCenter?: boolean;
}

export const Crop = (url, width, height, isCropCenter) => {
  const image = url?.replace(
    '.jpg?',
    `_${width}x${height}${isCropCenter == false ? '' : '_crop_center'}.jpg?`
  );
  return image;
};

export const ResizeImage: React.FC<Image> = ({
  key,
  layout,
  isCropCenter,
  src,
  className,
  objectFit,
  objectPosition,
  alt,
  width,
  height,
  priority,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [loadFinish, setLoadFinish] = useState(false);

  if (!src) return null;

  if (width != null) {
    return (
      <Image
        // sizes='100vw'
        quality={75}
        key={key}
        src={Crop(src, width, height, isCropCenter)}
        alt={alt == null ? 'Grandbook' : alt}
        width={width}
        priority={priority == null ? false : priority}
        height={height}
        objectFit={objectFit != null ? objectFit : 'cover'}
        objectPosition={objectPosition}
        loading={priority == null ? "lazy" : undefined}
        layout={layout == null ? 'responsive' : layout}
        onLoadingComplete={() => {
          setLoadFinish(true);
        }}
        className={loadFinish ? `fade-in-image ${className}` : 'opacity-0'}
        onClick={() => {
          if (onClick != null) {
            onClick('');
          }
        }}
        onMouseEnter={() => {
          if (onMouseEnter != null) {
            onMouseEnter('');
          }
        }}
        onMouseLeave={() => {
          if (onMouseLeave != null) {
            onMouseLeave('');
          }
        }}
      // placeholder="blur"
      // blurDataURL={Crop(src, 50, 75)}
      />
    );
  }
  return (
    <Image
      quality={75}
      key={key}
      src={src}
      alt={alt == null ? 'grandbook' : alt}
      objectFit={objectFit != null ? objectFit : 'cover'}
      objectPosition={objectPosition}
      loading={priority == null ? "lazy" : undefined}
      priority={priority == null ? false : priority}
      layout={layout == null ? 'responsive' : layout}
      onLoadingComplete={() => {
        setLoadFinish(true);
      }}
      className={loadFinish ? `fade-in-image ${className}` : 'opacity-0'}
      onClick={() => {
        if (onClick != null) {
          onClick('');
        }
      }}
      onMouseEnter={() => {
        if (onMouseEnter != null) {
          onMouseEnter('');
        }
      }}
      onMouseLeave={() => {
        if (onMouseLeave != null) {
          onMouseLeave('');
        }
      }}
    // placeholder="blur"
    // blurDataURL={Crop(src, 50, 75)}
    />
  );
};
