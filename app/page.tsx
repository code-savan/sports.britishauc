export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-0.5 h-6 bg-red-600 shrink-0" />
          <span className="text-[10px] font-medium text-white/60 tracking-[0.15em] uppercase">Restricted</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">Access Denied</h1>
        <p className="text-sm md:text-[15px] text-gray-400 leading-relaxed">
          This website is currently not accessible. Please contact the administrator for more information.
        </p>
      </div>
    </div>
  );
}
