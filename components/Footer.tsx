export function Footer() {
  return (
    <footer className="py-16 border-t border-[rgba(0,212,170,0.1)]">
      <div className="container mx-auto px-5">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg"
                style={{
                  background: 'linear-gradient(135deg, #00D4AA 0%, #00B894 50%, #6C5CE7 100%)',
                }}
              >
                🚀
              </div>
              <span className="font-bold text-lg">WebDesign Pro</span>
            </div>
            <p className="text-white text-opacity-60 text-sm">
              Transformando ideias em realidade digital.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 list-none">
              <li>
                <a href="#" className="text-white text-opacity-60 text-sm no-underline transition-colors hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-60 text-sm no-underline transition-colors hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-60 text-sm no-underline transition-colors hover:text-white">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-60 text-sm no-underline transition-colors hover:text-white">
                  Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 list-none">
              <li>
                <a href="#" className="text-white text-opacity-60 text-sm no-underline transition-colors hover:text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-60 text-sm no-underline transition-colors hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-60 text-sm no-underline transition-colors hover:text-white">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-60 text-sm no-underline transition-colors hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[rgba(0,212,170,0.1)] flex items-center justify-center text-white text-opacity-60 no-underline transition-all hover:bg-[rgba(0,212,170,0.2)] hover:text-[#00D4AA]"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[rgba(0,212,170,0.1)] flex items-center justify-center text-white text-opacity-60 no-underline transition-all hover:bg-[rgba(0,212,170,0.2)] hover:text-[#00D4AA]"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[rgba(0,212,170,0.1)] flex items-center justify-center text-white text-opacity-60 no-underline transition-all hover:bg-[rgba(0,212,170,0.2)] hover:text-[#00D4AA]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[rgba(0,212,170,0.1)] flex items-center justify-center text-white text-opacity-60 no-underline transition-all hover:bg-[rgba(0,212,170,0.2)] hover:text-[#00D4AA]"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[rgba(0,212,170,0.1)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-opacity-50 text-sm">
            &copy; 2024 WebDesign Pro. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white text-opacity-50 text-sm no-underline transition-colors hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="text-white text-opacity-50 text-sm no-underline transition-colors hover:text-white">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
