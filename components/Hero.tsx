'use client'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 relative">
      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[rgba(0,212,170,0.3)] text-[#00D4AA] text-sm"
            style={{
              background: 'rgba(0, 212, 170, 0.1)',
              animation: 'fadeInUp 0.8s ease forwards',
            }}
          >
            <span>✨</span>
            <span>Transforme seu negócio online</span>
          </div>

          {/* Heading */}
          <h1
            className="font-black text-7xl leading-tight mb-6 font-[SpaceGrotesk]"
            style={{
              animation: 'fadeInUp 0.8s ease 0.2s forwards',
              opacity: 0,
            }}
          >
            Sites que <span className="gradient-text">crescem</span> seus negócios
          </h1>

          {/* Description */}
          <p
            className="text-xl text-white text-opacity-70 mb-10 max-w-xl"
            style={{
              animation: 'fadeInUp 0.8s ease 0.4s forwards',
              opacity: 0,
            }}
          >
            Crie presença digital profissional com nossos sites personalizados, otimizados para conversão e SEO.
          </p>

          {/* Buttons */}
          <div
            className="flex gap-5"
            style={{
              animation: 'fadeInUp 0.8s ease 0.6s forwards',
              opacity: 0,
            }}
          >
            <button
              className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.75 border-0 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #00D4AA 0%, #00B894 50%, #6C5CE7 100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 212, 170, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Começar Agora
            </button>

            <button
              className="px-8 py-3.5 rounded-full font-semibold text-white border-2 border-[rgba(255,255,255,0.2)] bg-transparent transition-all duration-300 hover:border-[#00D4AA] hover:text-[#00D4AA] cursor-pointer"
            >
              Ver Portfólio
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex gap-12 mt-16"
            style={{
              animation: 'fadeInUp 0.8s ease 0.8s forwards',
              opacity: 0,
            }}
          >
            <div className="text-center">
              <div className="font-[SpaceGrotesk] text-5xl font-bold gradient-text">150+</div>
              <div className="text-sm text-white text-opacity-50 uppercase tracking-wider">
                Projetos Realizados
              </div>
            </div>
            <div className="text-center">
              <div className="font-[SpaceGrotesk] text-5xl font-bold gradient-text">98%</div>
              <div className="text-sm text-white text-opacity-50 uppercase tracking-wider">
                Taxa de Satisfação
              </div>
            </div>
            <div className="text-center">
              <div className="font-[SpaceGrotesk] text-5xl font-bold gradient-text">12+</div>
              <div className="text-sm text-white text-opacity-50 uppercase tracking-wider">
                Anos de Experiência
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-96 h-96 hidden lg:block">
        <div
          className="absolute top-2 right-2 bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-3xl p-6 w-72"
          style={{
            animation: 'floatCard 6s ease-in-out infinite',
          }}
        >
          <div
            className="w-12 h-12 rounded-3xl flex items-center justify-center text-xl mb-3"
            style={{
              background: 'linear-gradient(135deg, #00D4AA 0%, #00B894 50%, #6C5CE7 100%)',
            }}
          >
            🎨
          </div>
          <h4 className="font-semibold mb-1">Design Moderno</h4>
          <p className="text-sm text-white text-opacity-60 m-0">
            Designs responsivos e atraentes
          </p>
        </div>

        <div
          className="absolute top-32 right-[-20px] bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-3xl p-6 w-72"
          style={{
            animation: 'floatCard 6s ease-in-out infinite',
            animationDelay: '-2s',
          }}
        >
          <div
            className="w-12 h-12 rounded-3xl flex items-center justify-center text-xl mb-3"
            style={{
              background: 'linear-gradient(135deg, #00D4AA 0%, #00B894 50%, #6C5CE7 100%)',
            }}
          >
            ⚡
          </div>
          <h4 className="font-semibold mb-1">Performance</h4>
          <p className="text-sm text-white text-opacity-60 m-0">
            Carregamento rápido e otimizado
          </p>
        </div>

        <div
          className="absolute bottom-2 right-12 bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-3xl p-6 w-72"
          style={{
            animation: 'floatCard 6s ease-in-out infinite',
            animationDelay: '-4s',
          }}
        >
          <div
            className="w-12 h-12 rounded-3xl flex items-center justify-center text-xl mb-3"
            style={{
              background: 'linear-gradient(135deg, #00D4AA 0%, #00B894 50%, #6C5CE7 100%)',
            }}
          >
            🔍
          </div>
          <h4 className="font-semibold mb-1">SEO Otimizado</h4>
          <p className="text-sm text-white text-opacity-60 m-0">
            Ranqueie melhor nos buscadores
          </p>
        </div>
      </div>
    </section>
  )
}
