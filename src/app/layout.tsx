// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Karure',
  description: 'movie_creaters,portfolio_website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-black text-white font-sans h-screen overflow-hidden">
        {/* 横並びの全体ラッパー */}
        <div className="flex h-screen">
          
          {/* 左側ナビゲーション */}
          <aside className="w-[30%] p-40 flex flex-col justify-center">
            <div className="text-[25px] font-light mb-12" style={{ fontFamily: "Futura PT Light", color: "#E6E6E6" }}>
              Karure-Works
            </div>
            <nav className="flex flex-col space-y-6 text-[15px]" style={{ fontFamily: "Futura PT Light" }}>
              <a href="#" className="text-[#E6E6E6] hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out">Works</a>
              <a href="#" className="text-[#E6E6E6] hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out">Reel</a>
              <a href="#" className="text-[#E6E6E6] hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out">About</a>
              <a href="#" className="text-[#E6E6E6] hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out">Contact</a>
            </nav>
          </aside>

          {/* 右側メイン */}
          <main className="flex-1 p-10 overflow-auto">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
