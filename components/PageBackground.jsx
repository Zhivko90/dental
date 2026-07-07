export default function PageBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "linear-gradient(135deg, #e2eff9 0%, #eef6fc 50%, #c8e0f4 100%)",
      }}
    />
  );
}