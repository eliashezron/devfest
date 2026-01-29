'use client';

/**
 * Reusable blockchain-themed background (honeycomb + node grid).
 * Use in sections that share the same look as the hero.
 */
export default function BlockchainBackground() {
  return (
    <>
      <div
        className="absolute inset-0 bg-blue-950"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, transparent 40%, transparent 60%, rgba(15, 23, 42, 0.6) 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(15, 23, 42, 0.5) 100%)',
        }}
        aria-hidden
      />
      {/* Honeycomb (hexagon) pattern */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='42' viewBox='0 0 36 42'%3E%3Cpath d='M18 1 L34 11 L34 31 L18 41 L2 31 L2 11 Z' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: '36px 42px',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='42' viewBox='0 0 36 42'%3E%3Cpath d='M18 1 L34 11 L34 31 L18 41 L2 31 L2 11 Z' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: '36px 42px',
          backgroundPosition: '18px 21px',
        }}
        aria-hidden
      />
      {/* Node/connection grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(29, 78, 216, 0.15) 0%, transparent 70%),
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
        aria-hidden
      />
    </>
  );
}
