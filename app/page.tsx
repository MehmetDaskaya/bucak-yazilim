import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string | null;
  url: string;
}

export default function Home() {
  let projects: Project[] = [];
  try {
    const dataPath = path.join(process.cwd(), 'public', 'projects.json');
    if (fs.existsSync(dataPath)) {
      projects = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    }
  } catch (err) {
    console.error("Error reading projects:", err);
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-blue-500/20">
              B
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Bucak Yazılım</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Ana Sayfa</a>
            <a href="#projeler" className="hover:text-white transition-colors">Şablonlar</a>
            <a href="#iletisim" className="hover:text-white transition-colors">İletişim</a>
          </div>
          <a href="#iletisim" className="px-5 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors">
            Bizimle Çalışın
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Yapay Zeka Destekli Web Çözümleri
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Geleceğin Web Siteleri <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Bugünden Hazır.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
            Bucak Yazılım olarak işletmeniz için en modern, dönüşüm odaklı ve premium tasarımları saniyeler içinde hazırlıyoruz. Aşağıdaki galeriden beğendiğiniz şablonu seçin.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projeler" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25">
              Şablonları İncele
            </a>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <section id="projeler" className="py-24 px-6 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proje Galerisi</h2>
              <p className="text-slate-400">Farklı sektörler için özel olarak üretilmiş premium şablonlar.</p>
            </div>
            <div className="text-slate-500 text-sm font-medium">
              Toplam {projects.length} şablon listeleniyor
            </div>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-32 border border-slate-800 rounded-2xl bg-slate-800/50">
              <p className="text-slate-400">Henüz listelenecek proje bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden bg-slate-800">
                    {project.thumbnail ? (
                      <img 
                        src={project.thumbnail} 
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600 font-medium">Görsel Yok</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white rounded-md border border-white/10">
                        {project.id.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-6">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 px-4 py-2.5 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-sm font-semibold rounded-lg text-center transition-colors border border-blue-500/20"
                      >
                        Demoyu Gör
                      </a>
                      <a 
                        href="#iletisim"
                        className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg text-center transition-colors border border-slate-700"
                      >
                        Bunu İstiyorum
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="iletisim" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-8 text-2xl">
            💬
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projenizi Başlatalım</h2>
          <p className="text-slate-400 mb-12">Beğendiğiniz şablonu işletmenize özel olarak uyarlayabilir veya yepyeni bir tasarım oluşturabiliriz. Hemen iletişime geçin.</p>
          
          <form action="https://formsubmit.co/mehmettaskaya15@gmail.com" method="POST" className="text-left bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl">
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Ad Soyad</label>
                <input type="text" name="name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">E-posta</label>
                <input type="email" name="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-400 mb-2">İlgilendiğiniz Proje (İsteğe Bağlı)</label>
              <input type="text" name="project" placeholder="Örn: VILLA MARE (site-23)" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-400 mb-2">Mesajınız</label>
              <textarea name="message" rows={4} required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
              Mesajı Gönder
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Bucak Yazılım. Tüm hakları saklıdır.</p>
        <p className="mt-2">Bu portfolyo tamamen Yapay Zeka (Antigravity Meta-Agent) tarafından otomatik olarak inşa edilmektedir.</p>
      </footer>
    </div>
  );
}
