import images from '../data/images.json';
type Props = React.ImgHTMLAttributes<HTMLImageElement>;
export default function ResponsiveImage({
  src,
  alt = '',
  loading = 'lazy',
  ...props
}: Props) {
  const id =
    typeof src === 'string'
      ? src.replace(/^\//, '').replace(/\.(jpg|webp)$/, '')
      : '';
  const info = images[id as keyof typeof images];
  if (!info) return <img {...props} src={src} alt={alt} loading={loading} />;
  return (
    <img
      {...props}
      src={`/${id}.webp`}
      srcSet={[480, 960, 1600]
        .map((w) => `/${id}-${w}.webp ${Math.min(w, info.width)}w`)
        .filter(
          (s, i, a) =>
            a.findIndex((x) => x.split(' ')[1] === s.split(' ')[1]) === i,
        )
        .join(', ')}
      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 800px"
      width={info.width}
      height={info.height}
      alt={alt}
      loading={loading}
      decoding="async"
    />
  );
}
