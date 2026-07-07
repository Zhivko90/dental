export default function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e2eff9] via-[#eef6fc] to-[#c8e0f4]" />
      <div className="absolute -right-24 -top-10 h-[600px] w-[600px] rounded-full bg-[#a9d0ef]/45 blur-3xl" />
      <div className="absolute -left-28 top-40 h-[460px] w-[460px] rounded-full bg-[#c2ddf5]/40 blur-3xl" />
    </div>
  );
}