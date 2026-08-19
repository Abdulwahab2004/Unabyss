import { useEffect, useRef, useState } from 'react'
import SpotlightContainer from '../SpotLightContainer'

const CONTEXT_SECTION = {
  // Overall section
  width: '1228px',
  maxWidth: 'calc(100vw - 32px)',
  paddingTop: '10px',
  paddingBottom: '70px',

  // Main grid
  gap: '22px',

  // You own it card
  featuredHeight: '406px',

  // Granular + Never sold cards
  sideCardHeight: '205px',

  // Logo boxes
  logoSize: '64px',
}

const CONTENT = {
  eyebrow: 'Trust',
  heading: 'Your context. Your rules.',

  ownership: {
    title: 'You own it.',
    desc: `Unabyss is an independent context layer - not
memory trapped inside one vendor. Plug in any agent,
connect any source, and take your context anywhere.`,
  },

  granular: {
    title: 'Granular permissions.',
    desc: 'Per app and per data type - confidential, sensitive, private. Each person decides what each tool can see.',
  },

  neverSold: {
    title: 'Never sold.',
    desc: 'Never used to train models. Your context stays yours.',
  },
}

const TOOLS = [
  'unabyss',
  'chatgpt',
  'gemini',
  'other',
  'cube',
  'gmail',
  'notion',
  'slack',
  'calendar',
  'drive',
  'obsidian',
]

const TOOL_LOGOS = {
unabyss: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='257'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20257'%3e%3cpath%20fill='%23D97757'%20d='m50.228%20170.321%2050.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0%20125.796l.583-3.759%205.12-3.434%207.324.648%2016.202%201.101%2024.304%201.685%2017.629%201.037%2026.118%202.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758%207-7.713%209.397.649%202.398.648%209.527%207.323%2020.35%2015.75L94.817%2091.9l3.889%203.24%201.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42%200%2082.05%201.426l4.472%203.888%206.61%2015.101%2010.694%2023.786%2016.591%2032.34%204.861%209.592%202.592%208.879.973%202.722h1.685v-1.556l1.36-18.211%202.528-22.36%202.463-28.776.843-8.1%204.018-9.722%207.971-5.25%206.222%202.981%205.12%207.324-.713%204.73-3.046%2019.768-5.962%2030.98-3.889%2020.739h2.268l2.593-2.593%2010.499-13.934%2017.628-22.036%207.778-8.749%209.073-9.657%205.833-4.601h11.018l8.1%2012.055-3.628%2012.443-11.342%2014.388-9.398%2012.184-13.48%2018.147-8.426%2014.518.778%201.166%202.01-.194%2030.46-6.481%2016.462-2.982%2019.637-3.37%208.88%204.148.971%204.213-3.5%208.62-20.998%205.184-24.628%204.926-36.682%208.685-.454.324.519.648%2016.526%201.555%207.065.389h17.304l32.21%202.398%208.426%205.574%205.055%206.805-.843%205.184-12.962%206.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666%2011.406%2021.387%2019.314%2026.767%2024.887%201.36%206.157-3.434%204.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73%206.935%2025.017%2037.59%201.296%2011.536-1.814%203.76-6.481%202.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194%2077.448-3.37%203.953-7.778%202.981-6.48-4.925-3.436-7.972%203.435-15.749%204.148-20.544%203.37-16.333%203.046-20.285%201.815-6.74-.13-.454-1.49.194-15.295%2020.999-23.267%2031.433-18.406%2019.702-4.407%201.75-7.648-3.954.713-7.064%204.277-6.286%2025.47-32.405%2015.36-20.092%209.917-11.6-.065-1.686h-.583L44.07%20198.125l-12.055%201.555-5.185-4.86.648-7.972%202.463-2.593%2020.35-13.999-.064.065Z'/%3e%3c/svg%3e",
  chatgpt: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='260'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20260'%3e%3cpath%20fill='%23fff'%20d='M239.184%20106.203a64.716%2064.716%200%200%200-5.576-53.103C219.452%2028.459%20191%2015.784%20163.213%2021.74A65.586%2065.586%200%200%200%2052.096%2045.22a64.716%2064.716%200%200%200-43.23%2031.36c-14.31%2024.602-11.061%2055.634%208.033%2076.74a64.665%2064.665%200%200%200%205.525%2053.102c14.174%2024.65%2042.644%2037.324%2070.446%2031.36a64.72%2064.72%200%200%200%2048.754%2021.744c28.481.025%2053.714-18.361%2062.414-45.481a64.767%2064.767%200%200%200%2043.229-31.36c14.137-24.558%2010.875-55.423-8.083-76.483Zm-97.56%20136.338a48.397%2048.397%200%200%201-31.105-11.255l1.535-.87%2051.67-29.825a8.595%208.595%200%200%200%204.247-7.367v-72.85l21.845%2012.636c.218.111.37.32.409.563v60.367c-.056%2026.818-21.783%2048.545-48.601%2048.601Zm-104.466-44.61a48.345%2048.345%200%200%201-5.781-32.589l1.534.921%2051.722%2029.826a8.339%208.339%200%200%200%208.441%200l63.181-36.425v25.221a.87.87%200%200%201-.358.665l-52.335%2030.184c-23.257%2013.398-52.97%205.431-66.404-17.803ZM23.549%2085.38a48.499%2048.499%200%200%201%2025.58-21.333v61.39a8.288%208.288%200%200%200%204.195%207.316l62.874%2036.272-21.845%2012.636a.819.819%200%200%201-.767%200L41.353%20151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466%2041.695-63.08-36.63L161.73%2077.86a.819.819%200%200%201%20.768%200l52.233%2030.184a48.6%2048.6%200%200%201-7.316%2087.635v-61.391a8.544%208.544%200%200%200-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39%208.39%200%200%200-8.492%200L99.98%2099.808V74.587a.716.716%200%200%201%20.307-.665l52.233-30.133a48.652%2048.652%200%200%201%2072.236%2050.391v.205ZM88.061%20139.097l-21.845-12.585a.87.87%200%200%201-.41-.614V65.685a48.652%2048.652%200%200%201%2079.757-37.346l-1.535.87-51.67%2029.825a8.595%208.595%200%200%200-4.246%207.367l-.051%2072.697Zm11.868-25.58%2028.138-16.217%2028.188%2016.218v32.434l-28.086%2016.218-28.188-16.218-.052-32.434Z'/%3e%3c/svg%3e",
  gemini: "data:image/svg+xml,%3csvg%20viewBox='0%200%20296%20298'%20xmlns='http://www.w3.org/2000/svg'%20width='296'%20height='298'%20fill='none'%3e%3cmask%20id='gemini__a'%20width='296'%20height='298'%20x='0'%20y='0'%20maskUnits='userSpaceOnUse'%20style='mask-type:alpha'%3e%3cpath%20fill='%233186FF'%20d='M141.201%204.886c2.282-6.17%2011.042-6.071%2013.184.148l5.985%2017.37a184.004%20184.004%200%200%200%20111.257%20113.049l19.304%206.997c6.143%202.227%206.156%2010.91.02%2013.155l-19.35%207.082a184.001%20184.001%200%200%200-109.495%20109.385l-7.573%2020.629c-2.241%206.105-10.869%206.121-13.133.025l-7.908-21.296a184%20184%200%200%200-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998%20183.998%200%200%200%20133.291%2026.28l7.91-21.394Z'/%3e%3c/mask%3e%3cg%20mask='url(%23gemini__a)'%3e%3cg%20filter='url(%23gemini__b)'%3e%3cellipse%20cx='163'%20cy='149'%20fill='%233689FF'%20rx='196'%20ry='159'/%3e%3c/g%3e%3cg%20filter='url(%23gemini__c)'%3e%3cellipse%20cx='33.5'%20cy='142.5'%20fill='%23F6C013'%20rx='68.5'%20ry='72.5'/%3e%3c/g%3e%3cg%20filter='url(%23gemini__d)'%3e%3cellipse%20cx='19.5'%20cy='148.5'%20fill='%23F6C013'%20rx='68.5'%20ry='72.5'/%3e%3c/g%3e%3cg%20filter='url(%23gemini__e)'%3e%3cpath%20fill='%23FA4340'%20d='M194%2010.5C172%2082.5%2065.5%20134.333%2022.5%20135L144-66l50%2076.5Z'/%3e%3c/g%3e%3cg%20filter='url(%23gemini__f)'%3e%3cpath%20fill='%23FA4340'%20d='M190.5-12.5C168.5%2059.5%2062%20111.333%2019%20112L140.5-89l50%2076.5Z'/%3e%3c/g%3e%3cg%20filter='url(%23gemini__g)'%3e%3cpath%20fill='%2314BB69'%20d='M194.5%20279.5C172.5%20207.5%2066%20155.667%2023%20155l121.5%20201%2050-76.5Z'/%3e%3c/g%3e%3cg%20filter='url(%23gemini__h)'%3e%3cpath%20fill='%2314BB69'%20d='M196.5%20320.5C174.5%20248.5%2068%20196.667%2025%20196l121.5%20201%2050-76.5Z'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='gemini__b'%20width='464'%20height='390'%20x='-69'%20y='-46'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20result='effect1_foregroundBlur_69_17998'%20stdDeviation='18'/%3e%3c/filter%3e%3cfilter%20id='gemini__c'%20width='265'%20height='273'%20x='-99'%20y='6'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20result='effect1_foregroundBlur_69_17998'%20stdDeviation='32'/%3e%3c/filter%3e%3cfilter%20id='gemini__d'%20width='265'%20height='273'%20x='-113'%20y='12'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20result='effect1_foregroundBlur_69_17998'%20stdDeviation='32'/%3e%3c/filter%3e%3cfilter%20id='gemini__e'%20width='299.5'%20height='329'%20x='-41.5'%20y='-130'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20result='effect1_foregroundBlur_69_17998'%20stdDeviation='32'/%3e%3c/filter%3e%3cfilter%20id='gemini__f'%20width='299.5'%20height='329'%20x='-45'%20y='-153'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20result='effect1_foregroundBlur_69_17998'%20stdDeviation='32'/%3e%3c/filter%3e%3cfilter%20id='gemini__g'%20width='299.5'%20height='329'%20x='-41'%20y='91'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20result='effect1_foregroundBlur_69_17998'%20stdDeviation='32'/%3e%3c/filter%3e%3cfilter%20id='gemini__h'%20width='299.5'%20height='329'%20x='-39'%20y='132'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20result='effect1_foregroundBlur_69_17998'%20stdDeviation='32'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",
  other: "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40.1867%202V77.5M20.3051%2025.3721V6.03247L40.1867%2025.3721M40.1867%2025.3721L20.3051%2045.5771V73.4675L40.1867%2053.4426M40.1867%2025.3721L60.0684%206.03247V25.3721'%20stroke='%2320808D'%20stroke-width='1.9359'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20.305%2054.0679H12V25.3721H68.3733V54.0679H60.0683'%20stroke='%2320808D'%20stroke-width='1.9359'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M40.1866%2025.3721L60.0683%2045.577V73.4675L40.1866%2053.4426'%20stroke='%2320808D'%20stroke-width='1.9359'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  cube: "data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27UTF-8%27?%3e%3csvg%20id=%27cursor_dark__Ebene_1%27%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20viewBox=%270%200%20466.73%20532.09%27%3e%3c!--Generator:%20Adobe%20Illustrator%2029.6.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%209)--%3e%3cdefs%3e%3cstyle%3e.cursor_dark__st0{fill:%23edecec}%3c/style%3e%3c/defs%3e%3cpath%20class=%27cursor_dark__st0%27%20d=%27M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z%27/%3e%3c/svg%3e",
  gmail: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%2049.4%20512%20399.42'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cg%20fill-rule='nonzero'%3e%3cpath%20fill='%234285f4'%20d='M34.91%20448.818h81.454V251L0%20163.727V413.91c0%2019.287%2015.622%2034.91%2034.91%2034.91z'/%3e%3cpath%20fill='%2334a853'%20d='M395.636%20448.818h81.455c19.287%200%2034.909-15.622%2034.909-34.909V163.727L395.636%20251z'/%3e%3cpath%20fill='%23fbbc04'%20d='M395.636%2099.727V251L512%20163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z'/%3e%3c/g%3e%3cpath%20fill='%23ea4335'%20d='M116.364%20251V99.727L256%20204.455%20395.636%2099.727V251L256%20355.727z'/%3e%3cpath%20fill='%23c5221f'%20fill-rule='nonzero'%20d='M0%20117.182v46.545L116.364%20251V99.727L83.782%2075.291C49.25%2049.4%200%2074.04%200%20117.18z'/%3e%3c/g%3e%3c/svg%3e",
  notion: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='268'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20268'%3e%3cpath%20fill='%23FFF'%20d='M16.092%2011.538%20164.09.608c18.179-1.56%2022.85-.508%2034.28%207.801l47.243%2033.282C253.406%2047.414%20256%2048.975%20256%2055.207v182.527c0%2011.439-4.155%2018.205-18.696%2019.24L65.44%20267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826%20213.814C2.586%20205.487%200%20199.254%200%20191.97V29.726c0-9.352%204.155-17.153%2016.092-18.188Z'/%3e%3cpath%20d='M164.09.608%2016.092%2011.538C4.155%2012.573%200%2020.374%200%2029.726v162.245c0%207.284%202.585%2013.516%208.826%2021.843l34.789%2045.237c5.715%207.284%2010.912%208.844%2021.825%208.327l171.864-10.404c14.532-1.035%2018.696-7.801%2018.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37%208.409C186.94.1%20182.27-.952%20164.09.608ZM69.327%2052.22c-14.033.945-17.216%201.159-25.186-5.323L23.876%2030.778c-2.06-2.086-1.026-4.69%204.163-5.207l142.274-10.395c11.947-1.043%2018.17%203.12%2022.842%206.758l24.401%2017.68c1.043.525%203.638%203.637.517%203.637L71.146%2052.095l-1.819.125Zm-16.36%20183.954V81.222c0-6.767%202.077-9.887%208.3-10.413L230.02%2060.93c5.724-.517%208.31%203.12%208.31%209.879v153.917c0%206.767-1.044%2012.49-10.387%2013.008l-161.487%209.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377%2089.53c1.034%204.681%200%209.362-4.681%209.897l-7.783%201.542v114.404c-6.758%203.637-12.981%205.715-18.18%205.715-8.308%200-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1%203.646s0%209.362-12.989%209.362l-35.814%202.077c-1.043-2.086%200-7.284%203.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68%201.55-11.439%208.826-11.965l38.426-2.585%2052.958%2081.113v-71.76l-13.498-1.552c-1.043-5.733%203.111-9.896%208.3-10.404l35.84-2.087Z'/%3e%3c/svg%3e",
  slack: "data:image/svg+xml,%3csvg%20enable-background='new%200%200%202447.6%202452.5'%20viewBox='0%200%202447.6%202452.5'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-rule='evenodd'%20fill-rule='evenodd'%3e%3cpath%20d='m897.4%200c-135.3.1-244.8%20109.9-244.7%20245.2-.1%20135.3%20109.5%20245.1%20244.8%20245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1%200%20.1%200%200%200m0%20654h-652.6c-135.3.1-244.9%20109.9-244.8%20245.2-.2%20135.3%20109.4%20245.1%20244.7%20245.3h652.7c135.3-.1%20244.9-109.9%20244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z'%20fill='%2336c5f0'/%3e%3cpath%20d='m2447.6%20899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9%20109.9-244.8%20245.2v245.3h244.8c135.3-.1%20244.9-109.9%20244.8-245.3zm-652.7%200v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9%20109.9-244.8%20245.2v654c-.2%20135.3%20109.4%20245.1%20244.7%20245.3%20135.3-.1%20244.9-109.9%20244.8-245.3z'%20fill='%232eb67d'/%3e%3cpath%20d='m1550.1%202452.5c135.3-.1%20244.9-109.9%20244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1%20135.2%20109.5%20245%20244.8%20245.2zm0-654.1h652.7c135.3-.1%20244.9-109.9%20244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9%20109.9-244.8%20245.2-.1%20135.4%20109.4%20245.2%20244.7%20245.3z'%20fill='%23ecb22e'/%3e%3cpath%20d='m0%201553.2c-.1%20135.3%20109.5%20245.1%20244.8%20245.2%20135.3-.1%20244.9-109.9%20244.8-245.2v-245.2h-244.8c-135.3.1-244.9%20109.9-244.8%20245.2zm652.7%200v654c-.2%20135.3%20109.4%20245.1%20244.7%20245.3%20135.3-.1%20244.9-109.9%20244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4%200-244.9%20109.8-244.8%20245.1%200%200%200%20.1%200%200'%20fill='%23e01e5a'/%3e%3c/g%3e%3c/svg%3e",
  calendar: "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23google_calendar__clip0_5072_3766)'%3e%3cpath%20d='M390.736%20121.264H121.264V390.736H390.736V121.264Z'%20fill='white'/%3e%3cpath%20d='M390.736%20512L512%20390.736L451.368%20380.392L390.736%20390.736L379.67%20446.196L390.736%20512Z'%20fill='%23EA4335'/%3e%3cpath%20d='M0%20390.736V471.578C0%20493.912%2018.088%20512%2040.42%20512H121.264L133.714%20451.368L121.264%20390.736L55.198%20380.392L0%20390.736Z'%20fill='%23188038'/%3e%3cpath%20d='M512%20121.264V40.42C512%2018.088%20493.912%200%20471.58%200H390.736C383.36%2030.072%20379.671%2052.2027%20379.67%2066.392C379.67%2080.58%20383.359%2098.8707%20390.736%20121.264C417.556%20128.944%20437.767%20132.784%20451.368%20132.784C464.969%20132.784%20485.18%20128.945%20512%20121.264Z'%20fill='%231967D2'/%3e%3cpath%20d='M512%20121.264H390.736V390.736H512V121.264Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M390.736%20390.736H121.264V512H390.736V390.736Z'%20fill='%2334A853'/%3e%3cpath%20d='M390.736%200H40.422C18.088%200%200%2018.088%200%2040.42V390.736H121.264V121.264H390.736V0Z'%20fill='%234285F4'/%3e%3cpath%20d='M176.54%20330.308C166.468%20323.504%20159.494%20313.568%20155.688%20300.428L179.066%20290.796C181.186%20298.88%20184.891%20305.145%20190.182%20309.592C195.436%20314.038%20201.836%20316.228%20209.314%20316.228C216.959%20316.228%20223.527%20313.903%20229.018%20309.254C234.51%20304.606%20237.272%20298.678%20237.272%20291.504C237.272%20284.16%20234.375%20278.164%20228.582%20273.516C222.788%20268.868%20215.512%20266.544%20206.822%20266.544H193.314V243.404H205.44C212.917%20243.404%20219.216%20241.382%20224.336%20237.338C229.456%20233.298%20232.016%20227.772%20232.016%20220.732C232.016%20214.468%20229.726%20209.482%20225.146%20205.744C220.566%20202.004%20214.77%20200.118%20207.73%20200.118C200.858%20200.118%20195.402%20201.938%20191.36%20205.608C187.319%20209.289%20184.282%20213.937%20182.534%20219.116L159.394%20209.482C162.458%20200.792%20168.084%20193.112%20176.336%20186.476C184.588%20179.84%20195.132%20176.506%20207.932%20176.506C217.398%20176.506%20225.92%20178.326%20233.466%20181.996C241.01%20185.668%20246.938%20190.754%20251.216%20197.222C255.496%20203.722%20257.616%20210.998%20257.616%20219.082C257.616%20227.334%20255.63%20234.308%20251.656%20240.034C247.682%20245.76%20242.796%20250.138%20237.002%20253.204V254.584C244.483%20257.669%20250.982%20262.735%20255.798%20269.238C260.682%20275.806%20263.142%20283.654%20263.142%20292.818C263.142%20301.978%20260.816%20310.164%20256.168%20317.338C251.52%20324.514%20245.088%20330.172%20236.934%20334.282C228.75%20338.392%20219.554%20340.482%20209.348%20340.482C197.524%20340.514%20186.612%20337.112%20176.54%20330.308ZM320.132%20214.298L294.466%20232.858L281.632%20213.39L327.678%20180.176H345.328V336.842H320.132V214.298Z'%20fill='%234285F4'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='google_calendar__clip0_5072_3766'%3e%3crect%20width='512'%20height='512'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  drive: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2087.3%2078'%3e%3cpath%20fill='%230066da'%20d='m6.6%2066.85%203.85%206.65c.8%201.4%201.95%202.5%203.3%203.3L27.5%2053H0c0%201.55.4%203.1%201.2%204.5z'/%3e%3cpath%20fill='%2300ac47'%20d='M43.65%2025%2029.9%201.2c-1.35.8-2.5%201.9-3.3%203.3l-25.4%2044A9.06%209.06%200%200%200%200%2053h27.5z'/%3e%3cpath%20fill='%23ea4335'%20d='M73.55%2076.8c1.35-.8%202.5-1.9%203.3-3.3l1.6-2.75L86.1%2057.5c.8-1.4%201.2-2.95%201.2-4.5H59.798l5.852%2011.5z'/%3e%3cpath%20fill='%2300832d'%20d='M43.65%2025%2057.4%201.2C56.05.4%2054.5%200%2052.9%200H34.4c-1.6%200-3.15.45-4.5%201.2z'/%3e%3cpath%20fill='%232684fc'%20d='M59.8%2053H27.5L13.75%2076.8c1.35.8%202.9%201.2%204.5%201.2h50.8c1.6%200%203.15-.45%204.5-1.2z'/%3e%3cpath%20fill='%23ffba00'%20d='m73.4%2026.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65%2025%2059.8%2053h27.45c0-1.55-.4-3.1-1.2-4.5z'/%3e%3c/svg%3e",
  obsidian: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20width='200'%20height='200'%20viewBox='0%200%20100%20100'%3e%3cpath%20fill='%23fff'%20d='M1.22541%2061.5228c-.2225-.9485.90748-1.5459%201.59638-.857L39.3342%2097.1782c.6889.6889.0915%201.8189-.857%201.5964C20.0515%2094.4522%205.54779%2079.9485%201.22541%2061.5228ZM.00189135%2046.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503%2099.7085c.2007.2007.4773.3075.7606.2896%202.3692-.1476%204.6938-.46%206.9624-.9259.7645-.157%201.0301-1.0963.4782-1.6481L2.57595%2039.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915%202.2686-.77832%204.5932-.92588465%206.9624ZM4.21093%2029.7054c-.16649.3738-.08169.8106.20765%201.1l64.77602%2064.776c.2894.2894.7262.3742%201.1.2077%201.7861-.7956%203.5171-1.6927%205.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566%2024.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132%201.6684-1.88843%203.3994-2.68399%205.1855ZM12.6587%2018.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795%206.45931%2035.1114%200%2049.9519%200%2077.5927%200%20100%2022.4073%20100%2050.0481c0%2014.8405-6.4593%2028.1724-16.7199%2037.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587%2018.074Z'/%3e%3c/svg%3e",

}


function ToolLogo({ tool }) {
  return (
    <div
      className="
        flex
        shrink-0
        items-center
        justify-center
        rounded-[12px]
        border border-white/[0.10]
        bg-[#292928]
      "
      style={{
        width: CONTEXT_SECTION.logoSize,
        height: CONTEXT_SECTION.logoSize,
      }}
      aria-label={tool}
    >
      <img
        src={TOOL_LOGOS[tool]}
        alt=""
        loading="lazy"
        className="size-[34px] object-contain"
      />
    </div>
  )
}

/* =========================================================
   YOU OWN IT CARD
   ========================================================= */

function OwnershipCard() {
  return (
    <SpotlightContainer
      className="
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[#e4b800]
        bg-[#20201f]
        p-[40px]
        sm:p-[40px]
      "
      style={{
        minHeight: CONTEXT_SECTION.featuredHeight,
      }}
    >
      <h3
        className="
          text-[32px]
          font-semibold
          leading-[1.05]
          tracking-[-0.025em]
          text-white
          sm:text-[36px]
        "
      >
        {CONTENT.ownership.title}
      </h3>

      <p
        className="
          mt-[23px]
          max-w-[530px]
          text-[16px]
          leading-[1.8]
          tracking-[-0.01em]
          text-white/60
          sm:text-[17px]
        "
      >
        {CONTENT.ownership.desc}
      </p>

      {/* Logo grid */}
      <div
        className="
          mt-[34px]
          grid
          w-fit
          grid-cols-4
          gap-[9px]
          sm:grid-cols-6
        "
      >
        {TOOLS.map((tool) => (
          <ToolLogo
            key={tool}
            tool={tool}
          />
        ))}
      </div>
    </SpotlightContainer>
  )
}

/* =========================================================
   INFO CARD
   ========================================================= */

function InfoCard({ title, desc }) {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-white/[0.075]
        bg-[#171717]
        px-[28px]
        py-[28px]
        sm:px-[32px]
        sm:py-[32px]
      "
      style={{
        minHeight: CONTEXT_SECTION.sideCardHeight,
      }}
    >
      <h3
        className="
          text-[17px]
          font-semibold
          leading-[1.2]
          tracking-[-0.01em]
          text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-[18px]
          max-w-[350px]
          text-[15px]
          leading-[1.65]
          tracking-[-0.005em]
          text-white/45
          sm:text-[16px]
        "
      >
        {desc}
      </p>
    </div>
  )
}

/* =========================================================
   MAIN SECTION
   ========================================================= */

export default function ContextOwnership() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current

    if (!element) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsVisible(true)
        observer.unobserve(element)
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0f0f0f]
        px-4
        sm:px-6
      "
      style={{
        paddingTop: CONTEXT_SECTION.paddingTop,
        paddingBottom: CONTEXT_SECTION.paddingBottom,
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          width: CONTEXT_SECTION.width,
          maxWidth: CONTEXT_SECTION.maxWidth,
        }}
      >
        {/* =================================================
            EYEBROW
            ================================================= */}

        <div
          className={`
            text-center
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-5 opacity-0'
            }
          `}
        >
          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-white/35
            "
          >
            {CONTENT.eyebrow}
          </p>
        </div>

        {/* =================================================
            HEADING
            ================================================= */}

        <h2
          className={`
            mt-[24px]
            text-center
            text-[36px]
            font-semibold
            leading-none
            tracking-[-0.035em]
            text-white
            sm:text-[48px]
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }
          `}
          style={{
            transitionDelay: isVisible ? '80ms' : '0ms',
          }}
        >
          {CONTENT.heading}
        </h2>

        {/* =================================================
            CONTENT
            ================================================= */}

        <div
          className="
            mt-[40px]
            grid
            grid-cols-1
            lg:grid-cols-[2.05fr_1fr]
          "
          style={{
            gap: CONTEXT_SECTION.gap,
          }}
        >
          {/* =================================================
              LEFT — YOU OWN IT
              ================================================= */}

          <div
            className={`
              min-w-0
              transition-all
              duration-800
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
            style={{
              transitionDelay: isVisible ? '140ms' : '0ms',
            }}
          >
            <OwnershipCard />
          </div>

          {/* =================================================
              RIGHT — GRANULAR + NEVER SOLD
              ================================================= */}

          <div className="min-w-0">
            {/* Granular permissions */}
            <div
              className={`
                transition-all
                duration-800
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }
              `}
              style={{
                transitionDelay: isVisible ? '200ms' : '0ms',
              }}
            >
              <InfoCard
                title={CONTENT.granular.title}
                desc={CONTENT.granular.desc}
              />
            </div>

            {/* Never sold */}
            <div
              className={`
                mt-[22px]
                transition-all
                duration-800
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }
              `}
              style={{
                transitionDelay: isVisible ? '240ms' : '0ms',
              }}
            >
              <InfoCard
                title={CONTENT.neverSold.title}
                desc={CONTENT.neverSold.desc}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}