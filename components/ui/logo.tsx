import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Mrs
          </span>
          <span className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">Dev</span>
        </div>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
      </div>
    </Link>
  )
}
