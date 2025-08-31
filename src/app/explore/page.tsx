// src/app/dashboard/page.tsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Explore My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {sections.map((section) => (
          <Link key={section.name} href={section.href}>
            <Card>
              <CardContent>
                {section.name}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
