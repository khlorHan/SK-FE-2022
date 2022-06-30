export function Spinner({ image, children }) {
  return (
    <figure
      role="alert"
      style={{
        position: 'absolute',
        zIndex: 1000,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <img src={image} alt="" />
      <figcaption>{children}</figcaption>
    </figure>
  );
}
