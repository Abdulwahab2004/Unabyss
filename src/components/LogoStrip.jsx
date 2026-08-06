const TOOLS = [
  {
    name: 'ChatGPT',
    icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%20100%20100'%3e%3cmask%20id='vscode__a'%20width='100'%20height='100'%20x='0'%20y='0'%20mask-type='alpha'%20maskUnits='userSpaceOnUse'%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M70.912%2099.317a6.223%206.223%200%200%200%204.96-.19l20.589-9.907A6.25%206.25%200%200%200%20100%2083.587V16.413a6.25%206.25%200%200%200-3.54-5.632L75.874.874a6.226%206.226%200%200%200-7.104%201.21L29.355%2038.04%2012.187%2025.01a4.162%204.162%200%200%200-5.318.236l-5.506%205.009a4.168%204.168%200%200%200-.004%206.162L16.247%2050%201.36%2063.583a4.168%204.168%200%200%200%20.004%206.162l5.506%205.01a4.162%204.162%200%200%200%205.318.236l17.168-13.032L68.77%2097.917a6.217%206.217%200%200%200%202.143%201.4ZM75.015%2027.3%2045.11%2050l29.906%2022.701V27.3Z'%20clip-rule='evenodd'/%3e%3c/mask%3e%3cg%20mask='url(%23vscode__a)'%3e%3cpath%20fill='%230065A9'%20d='M96.461%2010.796%2075.857.876a6.23%206.23%200%200%200-7.107%201.207l-67.451%2061.5a4.167%204.167%200%200%200%20.004%206.162l5.51%205.009a4.167%204.167%200%200%200%205.32.236l81.228-61.62c2.725-2.067%206.639-.124%206.639%203.297v-.24a6.25%206.25%200%200%200-3.539-5.63Z'/%3e%3cg%20filter='url(%23vscode__b)'%3e%3cpath%20fill='%23007ACC'%20d='m96.461%2089.204-20.604%209.92a6.229%206.229%200%200%201-7.107-1.207l-67.451-61.5a4.167%204.167%200%200%201%20.004-6.162l5.51-5.009a4.167%204.167%200%200%201%205.32-.236l81.228%2061.62c2.725%202.067%206.639.124%206.639-3.297v.24a6.25%206.25%200%200%201-3.539%205.63Z'/%3e%3c/g%3e%3cg%20filter='url(%23vscode__c)'%3e%3cpath%20fill='%231F9CF0'%20d='M75.858%2099.126a6.232%206.232%200%200%201-7.108-1.21c2.306%202.307%206.25.674%206.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232%206.232%200%200%201%207.108-1.21l20.6%209.908A6.25%206.25%200%200%201%20100%2016.413v67.174a6.25%206.25%200%200%201-3.541%205.633l-20.601%209.906Z'/%3e%3c/g%3e%3cpath%20fill='url(%23vscode__d)'%20fill-rule='evenodd'%20d='M70.851%2099.317a6.224%206.224%200%200%200%204.96-.19L96.4%2089.22a6.25%206.25%200%200%200%203.54-5.633V16.413a6.25%206.25%200%200%200-3.54-5.632L75.812.874a6.226%206.226%200%200%200-7.104%201.21L29.294%2038.04%2012.126%2025.01a4.162%204.162%200%200%200-5.317.236l-5.507%205.009a4.168%204.168%200%200%200-.004%206.162L16.186%2050%201.298%2063.583a4.168%204.168%200%200%200%20.004%206.162l5.507%205.009a4.162%204.162%200%200%200%205.317.236L29.294%2061.96l39.414%2035.958a6.218%206.218%200%200%200%202.143%201.4ZM74.954%2027.3%2045.048%2050l29.906%2022.701V27.3Z'%20clip-rule='evenodd'%20opacity='.25'%20style='mix-blend-mode:overlay'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='vscode__b'%20width='116.727'%20height='92.246'%20x='-8.394'%20y='15.829'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='4.167'/%3e%3cfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='overlay'%20result='effect1_dropShadow'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='vscode__c'%20width='47.917'%20height='116.151'%20x='60.417'%20y='-8.076'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='4.167'/%3e%3cfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='overlay'%20result='effect1_dropShadow'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='vscode__d'%20x1='49.939'%20x2='49.939'%20y1='.258'%20y2='99.742'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23fff'/%3e%3cstop%20offset='1'%20stop-color='%23fff'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3",
    dimmed: true,
  },
  {
    name: 'Grok',
    icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' ...%3c/svg%3e",
  },
  {
    name: 'Hermes',
    icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' ...%3c/svg%3e",
  },
  {
    name: 'GitHub',
    icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' ...%3c/svg%3e",
  },
  {
    name: 'Notion',
    icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' ...%3c/svg%3e",
  },
  {
    name: 'Linear',
    icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' ...%3c/svg%3e",
  },
]

function LogoItem({ tool }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full shrink-0 ${
        tool.dimmed ? 'opacity-40' : ''
      }`}
    >
      <div
        className="w-6 h-6 rounded-full bg-white/10 border border-white/10 shrink-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        {tool.icon && (
          <img
            src={tool.icon}
            alt=""
            loading="lazy"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        )}
      </div>
      <span className="text-sm text-white/90 whitespace-nowrap">{tool.name}</span>
    </div>
  )
}

export default function LogoStrip() {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <div className="flex items-center bg-badge border border-white/10 rounded-full pl-6 pr-2 py-3 overflow-hidden">
        <span className="text-[11px] font-semibold tracking-widest text-white/40 mr-4 shrink-0">
          WORKS WITH
        </span>

        <div
          className="flex-1 overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            {[...TOOLS, ...TOOLS].map((tool, i) => (
              <LogoItem key={`${tool.name}-${i}`} tool={tool} />
            ))}
          </div>
        </div>

        <div className="w-px h-5 bg-white/10 mx-3 shrink-0" aria-hidden="true" />

        <div className="flex items-center gap-2 px-3 py-1.5 shrink-0">
          <div
            className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-purple-900"
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-white/90 whitespace-nowrap">
            750,000+ ITEMS SYNCED
          </span>
        </div>
      </div>

      <p className="text-center text-xs text-white/30 mt-6 tracking-wide">
        BACKED BY{' '}
        <span className="font-bold text-white/50">
          <span className="tracking-tighter">||</span>ElevenLabs
          <span className="font-normal">Grants</span>
        </span>
      </p>
    </div>
  )
}