export default function Wallpaper() {
    return (
        <div
            className="wallpaper"
            aria-hidden="true"
        >
            {/* Base gradient layer */}
            <div className="wp-base" />

            {/* Dot pattern layer */}
            <div className="wp-dots" />

            {/* Grid line layer */}
            <div className="wp-grid" />

            {/* Subtle neon glow spots (dark mode mainly) */}
            <div className="wp-glow wp-glow--cyan" />
            <div className="wp-glow wp-glow--purple" />

            {/* Vignette overlay */}
            <div className="wp-vignette" />
        </div>
    );
}
