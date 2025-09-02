// MenuIcon.jsx
export default function MenuIcon({ size = 24, color = "black" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="0.8">
      <circle cx="12" cy="12" r="11" />
      <line x1="7" y1="9" x2="17" y2="9" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="7" y1="15" x2="17" y2="15" />
    </svg>
  );
}