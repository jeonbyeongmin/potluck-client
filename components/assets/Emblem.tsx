interface EmblemProps {
  size?: number;
}

export default function Emblem({ size = 50 }: EmblemProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_14_19)">
        <rect width="50" height="50" rx="10" fill="black" />
        <path
          d="M14.2 47.55C13.7333 47.4167 13.4667 46.9167 13.4 46.05C13.2667 45.6167 13.1667 45.1 13.1 44.5C13.0667 43.9 13.05 43.2167 13.05 42.45C13.05 41.75 13.1667 40.7833 13.4 39.55C13.6333 38.35 13.95 36.9833 14.35 35.45C14.7833 33.9167 15.3 32.2667 15.9 30.5C16.5 28.7 17.1667 26.8833 17.9 25.05C18.8 22.75 19.5833 20.7667 20.25 19.1C20.9167 17.4 21.4667 15.9333 21.9 14.7C22.3667 13.4667 22.7333 12.45 23 11.65C23.3 10.85 23.5333 10.1667 23.7 9.6C23.8333 9.2 24.0333 8.71667 24.3 8.15C24.5667 7.58333 24.8667 7.01667 25.2 6.45C25.5667 5.85 25.9333 5.3 26.3 4.8C26.6667 4.26667 27 3.86667 27.3 3.6C28.4667 3.76666 29.5667 4.06666 30.6 4.5C31.6333 4.93333 32.2667 5.35 32.5 5.75C32.0333 6.18333 31.5 6.86667 30.9 7.8C30.3 8.7 29.7167 9.7 29.15 10.8C28.5833 11.8667 28.0667 12.9667 27.6 14.1C27.1333 15.2333 26.7833 16.2333 26.55 17.1C26.8833 16.5333 27.3167 15.9167 27.85 15.25C28.3833 14.5833 29.2 13.6667 30.3 12.5C31.5333 11.2333 32.6833 10.2667 33.75 9.6C34.85 8.9 35.8 8.55 36.6 8.55C37.8667 8.55 38.9 8.9 39.7 9.6C40.5333 10.3 40.95 11.2 40.95 12.3C40.95 14.7 40.55 17.0833 39.75 19.45C38.95 21.7833 37.8 23.9 36.3 25.8C35.7333 26.5333 35.0667 27.2333 34.3 27.9C33.5333 28.5667 32.7333 29.1667 31.9 29.7C31.0667 30.2 30.25 30.6 29.45 30.9C28.65 31.2 27.9333 31.35 27.3 31.35C26.7 31.35 26.1667 31.2333 25.7 31C25.2667 30.7333 24.9667 30.4167 24.8 30.05C26.1 29.2833 27.3667 28.2167 28.6 26.85C29.8333 25.4833 30.9667 23.9167 32 22.15C33.0667 20.35 33.9833 18.4167 34.75 16.35C35.55 14.2833 36.15 12.1833 36.55 10.05C35.2833 10.7167 34.1333 11.45 33.1 12.25C32.1 13.0167 31.1 14.0333 30.1 15.3C28.9 16.7667 27.95 17.95 27.25 18.85C26.55 19.75 25.9667 20.5167 25.5 21.15C25.0667 21.7833 24.7 22.3833 24.4 22.95C24.1333 23.4833 23.8333 24.15 23.5 24.95C23.0333 26.0167 22.4833 27.4333 21.85 29.2C21.25 30.9333 20.6167 32.8833 19.95 35.05C19.3167 37.2167 18.6667 39.5167 18 41.95C17.3667 44.4167 16.75 46.8667 16.15 49.3C15.7833 49.2333 15.4667 48.9667 15.2 48.5C14.9333 48.2 14.7333 47.9833 14.6 47.85C14.5 47.7167 14.3667 47.6167 14.2 47.55Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_19">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
