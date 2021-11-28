export default function GradientBackground() {
  return (
    <div className="fixed top-0 w-full h-3/5 overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-t from-gray-50 z-10 gradient" />
    </div>
  );
}
