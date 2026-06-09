import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500/30 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl shadow-lg shadow-blue-500/20">
          ✨
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Bu Bir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Ön İzleme</span> Sayfasıdır
        </h1>
        
        <p className="text-lg text-slate-400 leading-relaxed mb-12">
          İncelediğiniz web sitesi şablonunun diğer alt sayfaları ve tüm özellikleri, projeye özel olarak sizin istekleriniz doğrultusunda geliştirilecektir. Şablonu beğendiyseniz ve tam sürümünü projenize uyarlamak istiyorsanız aşağıdaki formu doldurarak bize ulaşabilirsiniz.
        </p>

        <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl text-left mb-8 shadow-2xl">
          <form action="https://formsubmit.co/mehmettaskaya15@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Şablon Hakkında Detaylı Bilgi Talebi" />
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Ad Soyad</label>
                <input type="text" name="name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">E-posta Adresi</label>
                <input type="email" name="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-400 mb-2">Nasıl Bir Web Sitesine İhtiyacınız Var?</label>
              <textarea name="message" rows={3} required placeholder="Beğendiğiniz şablon adını veya projenizi kısaca anlatabilirsiniz..." className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25">
              Hemen İletişime Geçin
            </button>
          </form>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Portfolyo Galerisine Dön
        </Link>
      </div>
    </div>
  );
}
