type SquiggleProps = {
  className?: string;
};

export default function Squiggle({ className }: SquiggleProps) {
  return (
    <svg className={className} viewBox="0 0 100 12" fill="none" aria-hidden="true">
      <path
        d="M2 6c10-8 20 8 30 0s20 8 30 0s15 8 16 0s15 8 20 0"
        stroke="#e8734a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
