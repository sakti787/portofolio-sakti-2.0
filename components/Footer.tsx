export default function Footer() {
    return (
        <footer className="relative py-8 border-t border-foreground/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-foreground/40">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-foreground/60 font-medium">Portfolio</span>. All
                        rights reserved.
                    </p>
                    <p className="text-xs text-foreground/30">
                        Built with Next.js, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
