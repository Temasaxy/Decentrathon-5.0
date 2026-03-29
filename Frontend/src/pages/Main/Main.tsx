import react from 'react';
export default function Main(){
    return(
        <div className="w-full pb-28 px-4 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-block px-4 py-1.5 mt-36   text-sm font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full">
                    Next-Gen Blockchain AI
                </div>
                <h1 className="text-4xl md:text-7xl font-bold mb-10 p-3 bg-linear-to-r from-indigo-200 via-indigo-300 to-slate-400 bg-clip-text text-transparent">
                    SOLANA AI AGENT
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                    Автономная нейросеть для разработки и управления высокоскоростными смарт-контрактами. 
                    Масштабируемость Solana встретилась с интеллектом нового поколения.
                </p>
            <div className="flex justify-center gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105">
                    Начать работу
                </button>
                <button className="bg-black hover:bg-emerald-500 border border-white/10 text-white hover:scale-105 px-8 py-4 rounded-2xl font-bold transition-all">
                    Документация
                </button>
            </div>
            </div>
            <div className="p-8 my-36 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>   
              </div>
              <h3 className="text-xl text-white font-bold mb-4">Создает контракты</h3>
              <p className="text-slate-400 leading-relaxed">
                 Наш ИИ автоматически генерирует безопасные и оптимизированные смарт-контракты под ваши задачи, исключая человеческие ошибки в коде.  
              </p>
            </div>
        
            <div className="p-8 mb-36 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl text-white font-bold mb-4">Автономное управление</h3>
              <p className="text-slate-400 leading-relaxed">
                Система самостоятельно мониторит состояние контрактов и управляет ими в реальном времени, обеспечивая бесперебойную работу.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#0a0a0a]   border border-white/5 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
              </div>
              <h3 className="text-xl text-white font-bold mb-4">Анализ рынка</h3>
              <p className="text-slate-400 leading-relaxed">
                Глубокое обучение позволяет ИИ сканировать рынок, предсказывать волатильность и адаптировать стратегии для максимальной эффективности.
              </p>
            </div>
        </div>
    )
}