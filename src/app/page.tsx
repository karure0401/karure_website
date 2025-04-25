import Image from 'next/image';

const works = [
  {
    title: "サンプル1",
    date: "2024/11/10",
    image: "/works/1.png", // public/works/ フォルダに配置
  },
  {
    title: "sample2",
    date: "2024/12/01",
    image: "/works/2.png",
  },
  // 追加OK
];

export default function Home() {
  return (
    <div className="flex justify-right min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ml-2 mt-20">
        {works.map((work, i) => (
          <div
            key={i}
            className="p-0.5 w-80 h-45 bg-neutral-900/0 hover:bg-neutral-900/20 transform hover:scale-102 transition-all duration-300"
          >
            {/* next/image を使用して画像を最適化 */}
            <Image
              src={work.image}
              alt={work.title}
              width={320} // 任意の幅
              height={180} // 任意の高さ
              className="w-full h-auto rounded"
            />
            <div
              className="mt-2"
              style={{
                fontFamily: "sans-serif",
                color: "#E6E6E6 hover:text-blue-400 transition-all duration-300 ease-in-out",
                fontSize: "16px",
              }}
            >
              {work.title}
            </div>
            <div
              className="text-xs"
              style={{
                fontFamily: "Futura PT Light",
                color: "#E6E6E6",
                fontSize: "8px",
              }}
            >
              {work.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
