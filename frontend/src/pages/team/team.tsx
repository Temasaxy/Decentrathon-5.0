import React from 'react';
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Основной контент */}
      <main className="pt-40 px-6 pb-20">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            АРХИТЕКТОРЫ <span className="bg-linear-to-r from-[#9945FF] via-[#14F195] to-[#14F195] bg-clip-text text-transparent">ЭКОСИСТЕМЫ</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-light">
            Знакомьтесь с командой, которая стоит за разработкой автономного ИИ-протокола нового поколения для Solana. 
            Наш опыт объединяет традиционные финансы и молниеносный Web3.
          </p>
        </div>

        {/* Секция зигзага */}
        <div className="space-y-32">
          
          {/* Член команды 1 (на основе image_0.png) - Текст СЛЕВА, Фото СПРАВА */}
          <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Текстовый блок */}
            <div className="flex-1 space-y-4">
              <h3 className="text-[#9945FF] font-mono uppercase tracking-widest text-sm">Основатель & Стратег</h3>
              <h2 className="text-5xl font-extrabold tracking-tight">Артем Ли</h2>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                Вдохновленный опытом традиционных финансов и глубоким пониманием механик Соланы, Артем сформировал визионерское направление проекта. 
                Он отвечает за глобальную стратегию и партнерства, обеспечивая синергию между нашим ИИ и классическими финансовыми инструментами.
              </p>
            </div>
            {/* Блок изображения */}
            <div className="flex-1 w-full max-w-md">
              <div className="group relative w-full aspect-4/3 rounded-3xl bg-[#111] border border-white/5 overflow-hidden transition-all hover:border-[#9945FF]/50 hover:scale-105 shadow-[0_0_30px_#9945ff11]">
                <div className="absolute inset-0 bg-linear-to-br from-[#9945FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/image_0.png"
                  alt="Артем Ли"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Член команды 2 (на основе image_1.png) - Текст СПРАВА, Фото СЛЕВА */}
          <section className="flex flex-col-reverse md:flex-row-reverse items-center gap-10 md:gap-20">
            {/* Текстовый блок */}
            <div className="flex-1 space-y-4">
              <h3 className="text-[#14F195] font-mono uppercase tracking-widest text-sm">Технический Директор (CTO)</h3>
              <h2 className="text-5xl font-extrabold tracking-tight">Алексей Смирнов</h2>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                Главный мозг, стоящий за всей нашей инфраструктурой и ИИ-алгоритмами. Управляет базами данных и обеспечивает молниеносную производительность нейросети на блокчейне. 
                Скриншот его рабочего терминала — это его визитная карточка, где каждый запрос оптимизирован до миллисекунд.
              </p>
            </div>
            {/* Блок изображения */}
            <div className="flex-1 w-full max-w-md">
              <div className="group relative w-full aspect-4/3 rounded-3xl bg-[#111] border border-white/5 overflow-hidden transition-all hover:border-[#14F195]/50 hover:scale-105 shadow-[0_0_30px_#14f19511]">
                <div className="absolute inset-0 bg-linear-to-br from-[#14F195]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/image_1.png"
                  alt="Алексей Смирнов"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Член команды 3 (на основе image_2.png) - Текст СЛЕВА, Фото СПРАВА */}
          <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Текстовый блок */}
            <div className="flex-1 space-y-4">
              <h3 className="text-indigo-400 font-mono uppercase tracking-widest text-sm">Главный Аналитик Данных</h3>
              <h2 className="text-5xl font-extrabold tracking-tight">Мария Иванова</h2>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                Мария — эксперт в области макроэкономики и блокчейн-данных. Её исследования в реальном времени позволяют нашему ИИ предсказывать рыночные циклы и оптимизировать стратегии с беспрецедентной точностью. 
                Эта диаграмма излучения — лишь малая часть её глубокого анализа.
              </p>
            </div>
            {/* Блок изображения */}
            <div className="flex-1 w-full max-w-md">
              <div className="group relative w-full aspect-4/3 rounded-3xl bg-[#111] border border-white/5 overflow-hidden transition-all hover:border-indigo-500/50 hover:scale-105 shadow-[0_0_30px_#6366f111]">
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/image_2.png"
                  alt="Мария Иванова"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}