import Link from "next/link";
import Image from "next/image";

export function SubscribeButtons() {
  const platforms = [
    {
      name: "RSS Feed",
      url: "/feed.xml",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Apple Podcasts (soon)",
      url: "#",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Spotify (soon)",
      url: "#",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Google Podcasts (soon)",
      url: "#",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Overcast (soon)",
      url: "#",
      icon: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-3xl mt-6">
      {platforms.map((platform) => (
        <Link
          key={platform.name}
          href={platform.url}
          className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-background hover:bg-accent transition-colors"
        >
          <Image
            src={platform.icon || "/placeholder.svg"}
            width={40}
            height={40}
            alt={platform.name}
            className="rounded-md"
          />
          <span className="text-sm font-medium">{platform.name}</span>
        </Link>
      ))}
    </div>
  );
}
