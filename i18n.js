/* Fragaria i18n — shared across all pages */
const i18n = {
  es: {
    /* ── NAV (common) ── */
    'nav.empresa':'Nuestra Empresa','nav.productos':'Productos','nav.valores':'Valores','nav.vm':'Visión y Misión',
    'nav.presencia':'Presencia','nav.contacto':'Contacto','nav.inicio':'Inicio',
    /* ── INDEX hero ── */
    'hero.badge':'Agro · Tecnología · Sustentabilidad',
    'hero.h1.1':'Innovación','hero.h1.2':'para una','hero.h1.3':'agricultura','hero.h1.4':'eficiente',
    'hero.desc':'Fragaria S.A. desarrolla, produce y comercializa fertilizantes biológicos, coadyuvantes y especialidades agropecuarias con más de 37 años de trayectoria.',
    'hero.btn1':'Productos','hero.btn2':'Ver empresa',
    /* ── INDEX metrics card ── */
    'card.title':'Fragaria en cifras','card.tray':'Trayectoria','card.anos':'años',
    'card.intl.label':'Presencia internacional','card.intl.val':'Comercio exterior','card.nat.label':'Presencia nacional',
    /* ── INDEX empresa section ── */
    'emp.label':'Empresa','emp.h2':'Una compañía argentina con evolución constante',
    'emp.p1':'Desde hace más de 37 años participamos activamente del mercado agropecuario, brindando soluciones para mejorar rendimiento, eficiencia y sustentabilidad en campo.',
    'emp.p2':'Nuestra propuesta combina desarrollo propio, producción y comercialización de insumos con foco técnico, respaldo comercial y cercanía con productores y distribuidores.',
    'emp.item1.t':'Diseño y desarrollo','emp.item1.d':'Equipo propio de I+D que convierte ciencia de suelo en soluciones aplicables a campo.',
    'emp.item2.t':'Calidad en formulación','emp.item2.d':'Procesos productivos rigurosos que garantizan consistencia y desempeño en cada lote.',
    'emp.item3.t':'Compromiso ambiental','emp.item3.d':'Prácticas responsables que reducen nuestra huella en cada etapa de producción.',
    /* ── INDEX valores/productos ── */
    'val.label':'Nuestros productos','val.h2':'Soluciones para cada etapa del cultivo',
    'val.c1.t':'Coadyuvantes','val.c1.d':'Optimizadores de mezclas y correctores de agua para aplicaciones más eficaces.','val.c1.l':'Ver productos →',
    'val.c2.t':'Tratamiento de Semillas','val.c2.d':'Inoculantes y curasemillas para una implantación segura y mayor nodulación.','val.c2.l':'Ver productos →',
    'val.c3.t':'Bioestimulantes y Fertilizantes','val.c3.d':'Bioestimulante y fertilizante para potenciar el crecimiento y rendimiento del cultivo.','val.c3.l':'Ver productos →',
    'val.c4.t':'Otras Soluciones','val.c4.d':'Fungicidas, insecticidas y productos complementarios para el manejo integral del cultivo.','val.c4.l':'Ver productos →',
    /* ── INDEX líneas ── */
    'lin.label':'Líneas de trabajo','lin.h2':'Nuestras especialidades','lin.wa':'Consultar por WhatsApp',
    /* ── INDEX instagram ── */
    'ig.h2':'Novedades de Fragaria','ig.desc':'Seguinos para ver lanzamientos, ensayos y contenido técnico en tiempo real.','ig.btn':'Ver en Instagram',
    /* ── INDEX contacto ── */
    'con.label':'Contacto','con.h2':'¿Querés trabajar con Fragaria?',
    'con.desc':'Contactanos para recibir asesoramiento sobre nuestras especialidades agropecuarias. Te respondemos a la brevedad.',
    'con.dir':'Dirección','con.form.h3':'Envianos un mensaje','con.form.sub':'Te respondemos en menos de 24 hs.',
    'con.form.name.l':'Nombre completo','con.form.name.p':'Juan García',
    'con.form.email.l':'Email','con.form.email.p':'juan@ejemplo.com',
    'con.form.phone.l':'Teléfono (opcional)','con.form.phone.p':'+54 9 ...',
    'con.form.msg.l':'Mensaje','con.form.msg.p':'Contanos en qué podemos ayudarte...',
    'con.form.btn':'Enviar mensaje →','con.form.or':'O escribinos directo por',
    /* ── FOOTER ── */
    'ft.nav':'Navegación','ft.inicio':'Inicio','ft.empresa':'Nuestra Empresa',
    'ft.catalogo':'Catálogo de Productos','ft.presencia':'Presencia','ft.contacto':'Contacto',
    'ft.dev':'Desarrollado por','ft.copy':'© 2026 Fragaria S.A. Todos los derechos reservados.',
    /* ── EMPRESA PAGE ── */
    'ep.badge':'Conocé','ep.h1a':'Nuestra','ep.h1b':'Empresa',
    'ep.desc':'Empresa argentina con más de 30 años en el mercado agropecuario. Desarrollamos, producimos y comercializamos fertilizantes biológicos, bioestimulantes y coadyuvantes con planta propia, exportando a Asia, Europa y África.',
    'ep.logo.title':'El significado de nuestro logo',
    'ep.logo.sub':'Cada elemento representa un pilar de nuestra identidad.',
    'ep.logo.etica.t':'La Ética','ep.logo.etica.d':'Nunca permite quebrar la ley, pero la complementa y la humaniza, por eso es más importante.',
    'ep.logo.empresa.t':'Nuestra Empresa','ep.logo.empresa.d':'Representada por una conífera, crece lento pero incesantemente y con una velocidad creciente de desarrollo, soportando todos los climas.',
    'ep.logo.dios.t':'Dios','ep.logo.dios.d':'Todo lo crea y alimenta, es nuestra raíz, nuestro sustento.',
    'ep.logo.ley.t':'La Ley','ep.logo.ley.d':'Muy importante, permite interpretaciones, la ética no.',
    'ep.hist.title':'Nuestra historia en evolución',
    'ep.hist.sub':'Más de 30 años impulsando innovación científica y crecimiento sustentable.',
    'ep.hist.footer':'Fuerte presencia nacional e internacional.',
    'ep.proposito.label':'Propósito','ep.proposito.h2':'Propósito',
    'ep.proposito.p':'Contribuir al sistema de alimentación del mundo poniendo al servicio del productor décadas de investigación en biología del suelo y formulaciones agronómicas, para lograr una agricultura más productiva, sostenible y rentable. Contribuimos así a un sistema alimentario más sano, más eficiente y más respetuoso del ambiente.',
    'ep.mision.h2':'Misión',
    'ep.mision.p1':'Desarrollamos y comercializamos productos de microbiología agrícola y coadyuvantes para el agro, acompañando a distribuidores y productores del Cono Sur con soluciones eficaces y respaldo técnico de un equipo comprometido con los resultados de quienes confían en nosotros y con el medio ambiente.',
    'ep.vision.h2':'Visión',
    'ep.vision.p':'Ser una empresa referente en bioinsumos y coadyuvantes agrícolas del Cono Sur, reconocida por la calidad e innovación de sus productos, la solidez de su equipo humano, su compromiso con el medio ambiente y su capacidad de crecer de forma ordenada y sostenida.',
    'ep.val.h2':'Nuestros Valores',
    'ep.val.v1.t':'RESPONSABILIDAD Y COMPROMISO','ep.val.v1.s':'Responsabilidad sobre los resultados','ep.val.v1.d':'Asumimos un compromiso directo con cada meta y decisión. Cada integrante de nuestro equipo responde por el impacto de su trabajo, garantizando excelencia, transparencia y solidez en los resultados que entregamos.',
    'ep.val.v2.t':'EXCELENCIA Y POTENCIAL','ep.val.v2.s':'Exigencia con respeto','ep.val.v2.d':'Buscamos la máxima calidad impulsando el talento de nuestra gente. Promovemos un entorno de desafiante superación personal y profesional, siempre sobre la base de la empatía, la valoración y el respeto mutuo.',
    'ep.val.v3.t':'MEJORA CONTINUA','ep.val.v3.s':'Evolución constante','ep.val.v3.d':'Entendemos cada logro como el punto de partida hacia un nuevo desafío. Nos reinventamos de manera permanente, optimizando procesos y tecnologías para superar siempre nuestros propios estándares.',
    'ep.val.v4.t':'TRABAJO EN EQUIPO','ep.val.v4.s':'Sinergia y colaboración','ep.val.v4.d':'Concebimos el éxito como un logro colectivo. Trabajamos de manera integrada y colaborativa, sabiendo que el verdadero valor surge cuando potenciamos nuestras capacidades en función de un objetivo común.',
    'ep.cal.h2':'Políticas de calidad',
    'ep.cal.cert.label':'Certificación','ep.cal.cert.h3':'Sistema de Gestión de la Calidad certificado',
    'ep.cal.cert.btn1':'Ver certificado IRAM','ep.cal.cert.btn2':'Ver certificado IQNET',
    /* ── PRESENCIA PAGE ── */
    'pres.badge':'Nuestra Presencia','pres.h1a':'Argentina','pres.h1b':'y el mundo',
    'pres.desc':'Contamos con representantes en las principales zonas agrícolas del país. Hacé click en tu provincia para conocer a la persona de tu zona.',
    'pres.btn1':'Argentina','pres.btn2':'Comercio exterior',
    'pres.world.title':'Presencia Internacional','pres.world.desc':'Cada burbuja marca un país donde Fragaria tiene presencia comercial o desarrollo de mercado.',
  },

  en: {
    'nav.empresa':'Our Company','nav.productos':'Products','nav.valores':'Values','nav.vm':'Vision & Mission',
    'nav.presencia':'Presence','nav.contacto':'Contact','nav.inicio':'Home',
    'hero.badge':'Agro · Technology · Sustainability',
    'hero.h1.1':'Innovation','hero.h1.2':'for an','hero.h1.3':'efficient','hero.h1.4':'agriculture',
    'hero.desc':'Fragaria S.A. develops, produces and markets biological fertilizers, adjuvants and agricultural specialties with over 37 years of experience.',
    'hero.btn1':'Products','hero.btn2':'View Company',
    'card.title':'Fragaria in numbers','card.tray':'Experience','card.anos':'years',
    'card.intl.label':'International presence','card.intl.val':'Foreign trade','card.nat.label':'National presence',
    'emp.label':'Company','emp.h2':'An Argentine company in constant evolution',
    'emp.p1':'For more than 37 years we have actively participated in the agricultural market, providing solutions to improve yield, efficiency and sustainability in the field.',
    'emp.p2':'Our proposal combines in-house development, production and marketing of inputs with a technical focus, commercial support and closeness to producers and distributors.',
    'emp.item1.t':'Design and development','emp.item1.d':'In-house R&D team that turns soil science into field-ready solutions.',
    'emp.item2.t':'Formulation quality','emp.item2.d':'Rigorous production processes that ensure consistency and performance in every batch.',
    'emp.item3.t':'Environmental commitment','emp.item3.d':'Responsible practices that reduce our footprint at every stage of production.',
    'val.label':'Our products','val.h2':'Solutions for every stage of cultivation',
    'val.c1.t':'Adjuvants','val.c1.d':'Mixture optimizers and water correctors for more effective applications.','val.c1.l':'View products →',
    'val.c2.t':'Seed Treatment','val.c2.d':'Inoculants and seed treatments for safe establishment and greater nodulation.','val.c2.l':'View products →',
    'val.c3.t':'Biostimulation and Nutrition','val.c3.d':'Biofertilizers and stimulants to boost crop growth and yield.','val.c3.l':'View products →',
    'val.c4.t':'Other Solutions','val.c4.d':'Fungicides, insecticides and complementary products for integrated crop management.','val.c4.l':'View products →',
    'lin.label':'Lines of work','lin.h2':'Our specialties','lin.wa':'Consult via WhatsApp',
    'ig.h2':'Fragaria News','ig.desc':'Follow us to see launches, trials and technical content in real time.','ig.btn':'View on Instagram',
    'con.label':'Contact','con.h2':'Want to work with Fragaria?',
    'con.desc':'Contact us for advice on our agricultural specialties. We respond promptly.',
    'con.dir':'Address','con.form.h3':'Send us a message','con.form.sub':'We respond within 24 hours.',
    'con.form.name.l':'Full name','con.form.name.p':'John Smith',
    'con.form.email.l':'Email','con.form.email.p':'john@example.com',
    'con.form.phone.l':'Phone (optional)','con.form.phone.p':'+54 9 ...',
    'con.form.msg.l':'Message','con.form.msg.p':'Tell us how we can help you...',
    'con.form.btn':'Send message →','con.form.or':'Or write to us directly on',
    'ft.nav':'Navigation','ft.inicio':'Home','ft.empresa':'Our Company',
    'ft.catalogo':'Product Catalog','ft.presencia':'Presence','ft.contacto':'Contact',
    'ft.dev':'Developed by','ft.copy':'© 2026 Fragaria S.A. All rights reserved.',
    'ep.badge':'About','ep.h1a':'Our','ep.h1b':'Company',
    'ep.desc':'Argentine company with over 30 years in the agricultural market. We develop, produce and market biological fertilizers, biostimulants and adjuvants with our own plant, exporting to Asia, Europe and Africa.',
    'ep.logo.title':'The meaning of our logo',
    'ep.logo.sub':'Each element represents a pillar of our identity.',
    'ep.logo.etica.t':'Ethics','ep.logo.etica.d':'It never allows breaking the law, but complements and humanizes it — that is why it matters most.',
    'ep.logo.empresa.t':'Our Company','ep.logo.empresa.d':'Represented by a conifer: it grows slowly but relentlessly, with an increasing pace of development, withstanding every climate.',
    'ep.logo.dios.t':'God','ep.logo.dios.d':'Creates and nourishes everything; it is our root, our sustenance.',
    'ep.logo.ley.t':'The Law','ep.logo.ley.d':'Very important, it allows interpretations — ethics does not.',
    'ep.hist.title':'Our evolving history',
    'ep.hist.sub':'More than 30 years driving scientific innovation and sustainable growth.',
    'ep.hist.footer':'Strong national and international presence.',
    'ep.proposito.label':'Purpose','ep.proposito.h2':'Purpose',
    'ep.proposito.p':'To contribute to the world\'s food system by putting decades of research in soil biology and agronomic formulations at the service of producers, achieving more productive, sustainable and profitable agriculture. In doing so, we contribute to a healthier, more efficient and more environmentally respectful food system.',
    'ep.mision.h2':'Mission',
    'ep.mision.p1':'We develop and market agricultural microbiology products and adjuvants, supporting distributors and producers across the Southern Cone with effective solutions and the technical backing of a team committed to the results of those who trust us and to the environment.',
    'ep.vision.h2':'Vision',
    'ep.vision.p':'To be a leading company in biological inputs and agricultural adjuvants in the Southern Cone, recognized for the quality and innovation of its products, the strength of its team, its commitment to the environment and its ability to grow in an orderly and sustained way.',
    'ep.val.h2':'Our Values',
    'ep.val.v1.t':'RESPONSIBILITY AND COMMITMENT','ep.val.v1.s':'Accountable for results','ep.val.v1.d':'We take direct ownership of every goal and decision. Every member of our team is accountable for the impact of their work, guaranteeing excellence, transparency and solidity in the results we deliver.',
    'ep.val.v2.t':'EXCELLENCE AND POTENTIAL','ep.val.v2.s':'Demanding, with respect','ep.val.v2.d':'We pursue the highest quality by driving the talent of our people. We foster an environment of challenging personal and professional growth, always grounded in empathy, appreciation and mutual respect.',
    'ep.val.v3.t':'CONTINUOUS IMPROVEMENT','ep.val.v3.s':'Constant evolution','ep.val.v3.d':'We see every achievement as the starting point for a new challenge. We reinvent ourselves permanently, optimizing processes and technologies to always exceed our own standards.',
    'ep.val.v4.t':'TEAMWORK','ep.val.v4.s':'Synergy and collaboration','ep.val.v4.d':'We see success as a collective achievement. We work in an integrated and collaborative way, knowing that real value emerges when we combine our capabilities toward a common goal.',
    'ep.cal.h2':'Quality Policies',
    'ep.cal.cert.label':'Certification','ep.cal.cert.h3':'Certified Quality Management System',
    'ep.cal.cert.btn1':'View IRAM certificate','ep.cal.cert.btn2':'View IQNET certificate',
    'pres.badge':'Our Presence','pres.h1a':'Argentina','pres.h1b':'and the world',
    'pres.desc':'We have representatives in the main agricultural zones of the country. Click on your province to meet the person in your area.',
    'pres.btn1':'Argentina','pres.btn2':'Foreign trade',
    'pres.world.title':'International Presence','pres.world.desc':'Each bubble marks a country where Fragaria has commercial presence or market development.',
  },

  pt: {
    'nav.empresa':'Nossa Empresa','nav.productos':'Produtos','nav.valores':'Valores','nav.vm':'Visão e Missão',
    'nav.presencia':'Presença','nav.contacto':'Contato','nav.inicio':'Início',
    'hero.badge':'Agro · Tecnologia · Sustentabilidade',
    'hero.h1.1':'Inovação','hero.h1.2':'para uma','hero.h1.3':'agricultura','hero.h1.4':'eficiente',
    'hero.desc':'Fragaria S.A. desenvolve, produz e comercializa fertilizantes biológicos, coadjuvantes e especialidades agropecuárias com mais de 37 anos de trajetória.',
    'hero.btn1':'Produtos','hero.btn2':'Ver empresa',
    'card.title':'Fragaria em números','card.tray':'Trajetória','card.anos':'anos',
    'card.intl.label':'Presença internacional','card.intl.val':'Comércio exterior','card.nat.label':'Presença nacional',
    'emp.label':'Empresa','emp.h2':'Uma empresa argentina em evolução constante',
    'emp.p1':'Há mais de 37 anos participamos ativamente do mercado agropecuário, oferecendo soluções para melhorar rendimento, eficiência e sustentabilidade no campo.',
    'emp.p2':'Nossa proposta combina desenvolvimento próprio, produção e comercialização de insumos com foco técnico, suporte comercial e proximidade com produtores e distribuidores.',
    'emp.item1.t':'Design e desenvolvimento','emp.item1.d':'Equipe própria de P&D que transforma ciência do solo em soluções aplicáveis no campo.',
    'emp.item2.t':'Qualidade na formulação','emp.item2.d':'Processos produtivos rigorosos que garantem consistência e desempenho em cada lote.',
    'emp.item3.t':'Compromisso ambiental','emp.item3.d':'Práticas responsáveis que reduzem nossa pegada em cada etapa da produção.',
    'val.label':'Nossos produtos','val.h2':'Soluções para cada etapa do cultivo',
    'val.c1.t':'Coadjuvantes','val.c1.d':'Otimizadores de misturas e corretores de água para aplicações mais eficazes.','val.c1.l':'Ver produtos →',
    'val.c2.t':'Tratamento de Sementes','val.c2.d':'Inoculantes e curasementes para implantação segura e maior nodulação.','val.c2.l':'Ver produtos →',
    'val.c3.t':'Bioestimulação e Nutrição','val.c3.d':'Bioestimulante e fertilizante para potencializar o crescimento e rendimento da cultura.','val.c3.l':'Ver produtos →',
    'val.c4.t':'Outras Soluções','val.c4.d':'Fungicidas, inseticidas e produtos complementares para o manejo integrado da cultura.','val.c4.l':'Ver produtos →',
    'lin.label':'Linhas de trabalho','lin.h2':'Nossas especialidades','lin.wa':'Consultar pelo WhatsApp',
    'ig.h2':'Novidades da Fragaria','ig.desc':'Siga-nos para ver lançamentos, ensaios e conteúdo técnico em tempo real.','ig.btn':'Ver no Instagram',
    'con.label':'Contato','con.h2':'Quer trabalhar com Fragaria?',
    'con.desc':'Entre em contato para receber consultoria sobre nossas especialidades agropecuárias. Respondemos em breve.',
    'con.dir':'Endereço','con.form.h3':'Envie-nos uma mensagem','con.form.sub':'Respondemos em menos de 24h.',
    'con.form.name.l':'Nome completo','con.form.name.p':'João Silva',
    'con.form.email.l':'Email','con.form.email.p':'joao@exemplo.com',
    'con.form.phone.l':'Telefone (opcional)','con.form.phone.p':'+55 ...',
    'con.form.msg.l':'Mensagem','con.form.msg.p':'Diga-nos como podemos ajudá-lo...',
    'con.form.btn':'Enviar mensagem →','con.form.or':'Ou escreva-nos diretamente pelo',
    'ft.nav':'Navegação','ft.inicio':'Início','ft.empresa':'Nossa Empresa',
    'ft.catalogo':'Catálogo de Produtos','ft.presencia':'Presença','ft.contacto':'Contato',
    'ft.dev':'Desenvolvido por','ft.copy':'© 2026 Fragaria S.A. Todos os direitos reservados.',
    'ep.badge':'Conheça','ep.h1a':'Nossa','ep.h1b':'Empresa',
    'ep.desc':'Empresa argentina com mais de 30 anos no mercado agropecuário. Desenvolvemos, produzimos e comercializamos fertilizantes biológicos, bioestimulantes e coadjuvantes com planta própria, exportando para Ásia, Europa e África.',
    'ep.logo.title':'O significado do nosso logo',
    'ep.logo.sub':'Cada elemento representa um pilar da nossa identidade.',
    'ep.logo.etica.t':'A Ética','ep.logo.etica.d':'Nunca permite quebrar a lei, mas a complementa e a humaniza; por isso é mais importante.',
    'ep.logo.empresa.t':'Nossa Empresa','ep.logo.empresa.d':'Representada por uma conífera: cresce devagar, mas incessantemente, com velocidade crescente de desenvolvimento, suportando todos os climas.',
    'ep.logo.dios.t':'Deus','ep.logo.dios.d':'Cria e alimenta tudo; é a nossa raiz, o nosso sustento.',
    'ep.logo.ley.t':'A Lei','ep.logo.ley.d':'Muito importante, permite interpretações; a ética não.',
    'ep.hist.title':'Nossa história em evolução',
    'ep.hist.sub':'Mais de 30 anos impulsionando inovação científica e crescimento sustentável.',
    'ep.hist.footer':'Forte presença nacional e internacional.',
    'ep.proposito.label':'Propósito','ep.proposito.h2':'Propósito',
    'ep.proposito.p':'Contribuir com o sistema de alimentação do mundo, colocando a serviço do produtor décadas de pesquisa em biologia do solo e formulações agronômicas, para alcançar uma agricultura mais produtiva, sustentável e rentável. Contribuímos assim para um sistema alimentar mais saudável, mais eficiente e mais respeitoso com o ambiente.',
    'ep.mision.h2':'Missão',
    'ep.mision.p1':'Desenvolvemos e comercializamos produtos de microbiologia agrícola e coadjuvantes para o agro, acompanhando distribuidores e produtores do Cone Sul com soluções eficazes e suporte técnico de uma equipe comprometida com os resultados de quem confia em nós e com o meio ambiente.',
    'ep.vision.h2':'Visão',
    'ep.vision.p':'Ser uma empresa referência em bioinsumos e coadjuvantes agrícolas do Cone Sul, reconhecida pela qualidade e inovação de seus produtos, pela solidez de sua equipe, pelo compromisso com o meio ambiente e pela capacidade de crescer de forma ordenada e sustentada.',
    'ep.val.h2':'Nossos Valores',
    'ep.val.v1.t':'RESPONSABILIDADE E COMPROMISSO','ep.val.v1.s':'Responsabilidade pelos resultados','ep.val.v1.d':'Assumimos um compromisso direto com cada meta e decisão. Cada integrante de nossa equipe responde pelo impacto de seu trabalho, garantindo excelência, transparência e solidez nos resultados que entregamos.',
    'ep.val.v2.t':'EXCELÊNCIA E POTENCIAL','ep.val.v2.s':'Exigência com respeito','ep.val.v2.d':'Buscamos a máxima qualidade impulsionando o talento de nossa gente. Promovemos um ambiente de superação pessoal e profissional desafiadora, sempre com base na empatia, na valorização e no respeito mútuo.',
    'ep.val.v3.t':'MELHORIA CONTÍNUA','ep.val.v3.s':'Evolução constante','ep.val.v3.d':'Entendemos cada conquista como o ponto de partida para um novo desafio. Nos reinventamos permanentemente, otimizando processos e tecnologias para superar sempre nossos próprios padrões.',
    'ep.val.v4.t':'TRABALHO EM EQUIPE','ep.val.v4.s':'Sinergia e colaboração','ep.val.v4.d':'Concebemos o sucesso como uma conquista coletiva. Trabalhamos de forma integrada e colaborativa, sabendo que o verdadeiro valor surge quando potencializamos nossas capacidades em função de um objetivo comum.',
    'ep.cal.h2':'Políticas de qualidade',
    'ep.cal.cert.label':'Certificação','ep.cal.cert.h3':'Sistema de Gestão da Qualidade certificado',
    'ep.cal.cert.btn1':'Ver certificado IRAM','ep.cal.cert.btn2':'Ver certificado IQNET',
    'pres.badge':'Nossa Presença','pres.h1a':'Argentina','pres.h1b':'e o mundo',
    'pres.desc':'Contamos com representantes nas principais zonas agrícolas do país. Clique em sua província para conhecer a pessoa da sua zona.',
    'pres.btn1':'Argentina','pres.btn2':'Comércio exterior',
    'pres.world.title':'Presença Internacional','pres.world.desc':'Cada bolha marca um país onde Fragaria tem presença comercial ou desenvolvimento de mercado.',
  },

  ru: {
    'nav.empresa':'Наша компания','nav.productos':'Продукты','nav.valores':'Ценности','nav.vm':'Видение и Миссия',
    'nav.presencia':'Присутствие','nav.contacto':'Контакт','nav.inicio':'Главная',
    'hero.badge':'Агро · Технологии · Устойчивость',
    'hero.h1.1':'Инновации','hero.h1.2':'для','hero.h1.3':'эффективного','hero.h1.4':'сельского хозяйства',
    'hero.desc':'Fragaria S.A. разрабатывает, производит и реализует биологические удобрения, адъюванты и сельскохозяйственные специальности с более чем 37-летним опытом.',
    'hero.btn1':'Продукты','hero.btn2':'О компании',
    'card.title':'Fragaria в цифрах','card.tray':'Опыт','card.anos':'лет',
    'card.intl.label':'Международное присутствие','card.intl.val':'Внешняя торговля','card.nat.label':'Национальное присутствие',
    'emp.label':'Компания','emp.h2':'Аргентинская компания в постоянном развитии',
    'emp.p1':'Более 37 лет мы активно участвуем в сельскохозяйственном рынке, предлагая решения для улучшения урожайности, эффективности и устойчивости в полевых условиях.',
    'emp.p2':'Наше предложение сочетает собственные разработки, производство и реализацию средств с техническим фокусом, коммерческой поддержкой и близостью к производителям.',
    'emp.item1.t':'Дизайн и разработка','emp.item1.d':'Собственная команда R&D превращает науку о почве в решения, готовые к применению в поле.',
    'emp.item2.t':'Качество формуляции','emp.item2.d':'Строгие производственные процессы, гарантирующие стабильность и эффективность каждой партии.',
    'emp.item3.t':'Экологическая ответственность','emp.item3.d':'Ответственные практики, снижающие наш след на каждом этапе производства.',
    'val.label':'Наши продукты','val.h2':'Решения для каждого этапа выращивания',
    'val.c1.t':'Адъюванты','val.c1.d':'Оптимизаторы смесей и корректоры воды для более эффективного применения.','val.c1.l':'Смотреть продукты →',
    'val.c2.t':'Обработка семян','val.c2.d':'Инокулянты и протравители семян для безопасного укоренения и большей нодуляции.','val.c2.l':'Смотреть продукты →',
    'val.c3.t':'Биостимуляция и питание','val.c3.d':'Биоудобрения и стимуляторы для повышения роста и урожайности культуры.','val.c3.l':'Смотреть продукты →',
    'val.c4.t':'Другие решения','val.c4.d':'Фунгициды, инсектициды и дополнительные продукты для комплексного управления культурой.','val.c4.l':'Смотреть продукты →',
    'lin.label':'Направления работы','lin.h2':'Наши специальности','lin.wa':'Консультация в WhatsApp',
    'ig.h2':'Новости Fragaria','ig.desc':'Следите за нами, чтобы видеть запуски, испытания и технический контент в реальном времени.','ig.btn':'Смотреть в Instagram',
    'con.label':'Контакт','con.h2':'Хотите работать с Fragaria?',
    'con.desc':'Свяжитесь с нами для консультации по нашим сельскохозяйственным специальностям. Ответим быстро.',
    'con.dir':'Адрес','con.form.h3':'Отправьте нам сообщение','con.form.sub':'Ответим менее чем за 24 часа.',
    'con.form.name.l':'Полное имя','con.form.name.p':'Иван Иванов',
    'con.form.email.l':'Email','con.form.email.p':'ivan@primer.ru',
    'con.form.phone.l':'Телефон (необязательно)','con.form.phone.p':'+7 ...',
    'con.form.msg.l':'Сообщение','con.form.msg.p':'Расскажите, чем мы можем вам помочь...',
    'con.form.btn':'Отправить сообщение →','con.form.or':'Или напишите нам напрямую в',
    'ft.nav':'Навигация','ft.inicio':'Главная','ft.empresa':'Наша компания',
    'ft.catalogo':'Каталог продуктов','ft.presencia':'Присутствие','ft.contacto':'Контакт',
    'ft.dev':'Разработано','ft.copy':'© 2026 Fragaria S.A. Все права защищены.',
    'ep.badge':'О нас','ep.h1a':'Наша','ep.h1b':'Компания',
    'ep.desc':'Аргентинская компания с более чем 30-летним опытом на сельскохозяйственном рынке. Разрабатываем, производим и реализуем биологические удобрения, биостимуляторы и адъюванты на собственном заводе, экспортируя в Азию, Европу и Африку.',
    'ep.logo.title':'Значение нашего логотипа',
    'ep.logo.sub':'Каждый элемент отражает одну из основ нашей идентичности.',
    'ep.logo.etica.t':'Этика','ep.logo.etica.d':'Никогда не позволяет нарушать закон, но дополняет и очеловечивает его — поэтому она важнее всего.',
    'ep.logo.empresa.t':'Наша компания','ep.logo.empresa.d':'Представлена хвойным деревом: растёт медленно, но неуклонно, со всё возрастающей скоростью развития, выдерживая любой климат.',
    'ep.logo.dios.t':'Бог','ep.logo.dios.d':'Всё создаёт и питает; это наш корень, наша опора.',
    'ep.logo.ley.t':'Закон','ep.logo.ley.d':'Очень важен, допускает толкования — этика нет.',
    'ep.hist.title':'Наша история в развитии',
    'ep.hist.sub':'Более 30 лет продвигаем научные инновации и устойчивый рост.',
    'ep.hist.footer':'Сильное национальное и международное присутствие.',
    'ep.proposito.label':'Предназначение','ep.proposito.h2':'Предназначение',
    'ep.proposito.p':'Вносить вклад в мировую продовольственную систему, предоставляя производителям десятилетия исследований в области биологии почвы и агрономических формуляций для достижения более продуктивного, устойчивого и рентабельного сельского хозяйства. Тем самым мы способствуем более здоровой, эффективной и экологичной продовольственной системе.',
    'ep.mision.h2':'Миссия',
    'ep.mision.p1':'Мы разрабатываем и продаем продукты сельскохозяйственной микробиологии и адъюванты, поддерживая дистрибьюторов и производителей Южного конуса эффективными решениями и технической поддержкой команды, приверженной результатам тех, кто нам доверяет, и заботе об окружающей среде.',
    'ep.vision.h2':'Видение',
    'ep.vision.p':'Стать ведущей компанией в области биопрепаратов и сельскохозяйственных адъювантов Южного конуса, признанной за качество и инновационность продукции, надежность команды, приверженность окружающей среде и способность расти упорядоченно и устойчиво.',
    'ep.val.h2':'Наши ценности',
    'ep.val.v1.t':'ОТВЕТСТВЕННОСТЬ И ПРИВЕРЖЕННОСТЬ','ep.val.v1.s':'Ответственность за результаты','ep.val.v1.d':'Мы берем на себя прямую ответственность за каждую цель и решение. Каждый член нашей команды отвечает за результат своей работы, гарантируя качество, прозрачность и надежность предоставляемых результатов.',
    'ep.val.v2.t':'СОВЕРШЕНСТВО И ПОТЕНЦИАЛ','ep.val.v2.s':'Требовательность с уважением','ep.val.v2.d':'Мы стремимся к максимальному качеству, раскрывая потенциал наших людей. Мы создаем среду для профессионального и личного роста, основанную на эмпатии, признании и взаимном уважении.',
    'ep.val.v3.t':'ПОСТОЯННОЕ УЛУЧШЕНИЕ','ep.val.v3.s':'Постоянная эволюция','ep.val.v3.d':'Мы рассматриваем каждое достижение как отправную точку для нового вызова. Мы постоянно совершенствуемся, оптимизируя процессы и технологии, чтобы всегда превосходить собственные стандарты.',
    'ep.val.v4.t':'КОМАНДНАЯ РАБОТА','ep.val.v4.s':'Синергия и сотрудничество','ep.val.v4.d':'Мы рассматриваем успех как коллективное достижение. Мы работаем слаженно и совместно, зная, что настоящая ценность возникает, когда мы объединяем наши возможности ради общей цели.',
    'ep.cal.h2':'Политика качества',
    'ep.cal.cert.label':'Сертификация','ep.cal.cert.h3':'Сертифицированная система управления качеством',
    'ep.cal.cert.btn1':'Сертификат IRAM','ep.cal.cert.btn2':'Сертификат IQNET',
    'pres.badge':'Наше присутствие','pres.h1a':'Аргентина','pres.h1b':'и мир',
    'pres.desc':'У нас есть представители в основных сельскохозяйственных зонах страны. Нажмите на свою провинцию, чтобы узнать о представителе в вашем регионе.',
    'pres.btn1':'Аргентина','pres.btn2':'Внешняя торговля',
    'pres.world.title':'Международное присутствие','pres.world.desc':'Каждый пузырь обозначает страну, где Fragaria имеет коммерческое присутствие или развивает рынок.',
  }
};

/* ── Shared language-switcher HTML (injected per page) ── */
const LANG_FLAGS_HTML = `
  <span class="h-4 w-px bg-ink-900/20 hidden md:block"></span>
  <div class="hidden items-center gap-1.5 md:flex">
    <button onclick="setLang('en')" id="lang-en" title="English"
      class="lang-btn h-7 overflow-hidden rounded transition hover:scale-110 hover:opacity-90 focus:outline-none">
      <img src="https://flagcdn.com/w40/us.png" width="28" alt="English" class="block h-full w-auto">
    </button>
    <button onclick="setLang('pt')" id="lang-pt" title="Português"
      class="lang-btn h-7 overflow-hidden rounded transition hover:scale-110 hover:opacity-90 focus:outline-none">
      <img src="https://flagcdn.com/w40/br.png" width="28" alt="Português" class="block h-full w-auto">
    </button>
    <button onclick="setLang('ru')" id="lang-ru" title="Русский"
      class="lang-btn h-7 overflow-hidden rounded transition hover:scale-110 hover:opacity-90 focus:outline-none">
      <img src="https://flagcdn.com/w40/ru.png" width="28" alt="Русский" class="block h-full w-auto">
    </button>
  </div>`;

function setLang(lang) {
  const t = i18n[lang] || i18n.es;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  document.documentElement.lang = { en:'en', pt:'pt', ru:'ru', es:'es' }[lang] || 'es';
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.style.outline = 'none';
    b.style.opacity = '0.65';
  });
  const btn = document.getElementById('lang-' + lang);
  if (btn) { btn.style.opacity = '1'; btn.style.outline = '2px solid #334155'; btn.style.outlineOffset = '2px'; }
  localStorage.setItem('fragaria-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('fragaria-lang');
  if (saved && saved !== 'es') setLang(saved);
});
