import Link from "next/link";

export function AuthLogo() {
  return (
    <Link href="/" aria-label="Home" className="inline-block w-fit text-lime">
      <svg viewBox="122 35 28.875 31.5" className="h-[31.5px] w-[29px]" aria-hidden="true">
        <path d="M132.5 45.5C132.5 39.701 127.799 35 122 35V56C122 61.799 126.701 66.5 132.5 66.5V45.5Z" fill="currentColor" />
        <path d="M140.375 45.5C146.174 45.5 150.875 50.201 150.875 56H143C137.201 56 132.5 51.299 132.5 45.5L140.375 45.5Z" fill="currentColor" />
        <path d="M140.375 66.5C146.174 66.5 150.875 61.799 150.875 56H143C137.201 56 132.5 60.701 132.5 66.5L140.375 66.5Z" fill="currentColor" />
      </svg>
    </Link>
  );
}