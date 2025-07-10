var config = {
    // style: 'mapbox://styles/perez-montoro/cmcknecgw002901shgafp1nub',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicGVyZXotbW9udG9ybyIsImEiOiJjbWNrOW92dGYwMDJxMmxxeGIxNDBvcTdjIn0.quz7bpQZTxwpFuXiF27SWw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '¿Quieres trabajar en Extremadura después de obtener tu doctorado?',
    subtitle: 'Escosistema de Spin-offs en la región de Extremadura',
    byline: 'Mario Pérez-Montoro',
    footer: 'Source: en la página se especifica de dónde se han extraido cada uno de los recursos utilizados <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            title: '¿Qué es una Spin-off?',
            description: 'Una empresa derivada, escindida o segregada (en inglés, spin-off) es una empresa nacida a partir de otra mediante la separación de una división subsidiaria o departamento de la empresa para convertirse en una empresa por sí misma. Otras son creadas a partir de la innovación u oportunidades surgidas en ambientes universitarios. <br> Las empresas derivadas incluyen diversos aspectos. Por un lado, una rama diversificada de una compañía más grande. Por lo general los accionistas de la empresa matriz o madre, reciben acciones de la nueva compañía en la misma proporción, de modo que la propiedad del holding permanece inalterable. Y, por otro, una empresa nueva formada por miembros de un centro de investigación, como puede ser una universidad. La finalidad es la transferencia de conocimiento con un ámbito de aplicación ideal para el sector I+D, por lo que gracias a esto ofrece a los investigadores la posibilidad de llevar a la práctica empresarial sus proyectos. <br> <br> Fuente del texto: <a href="https://es.wikipedia.org/wiki/Empresa_derivada" target="_blank">enlace</a> <br> Video ilustrativo: <a href="https://www.youtube.com/watch?v=6Cbwr9dOTBs" target="_blank">enlace</a> ',
            location: {
                center: [-7.004108, 38.886571],
                zoom: 16.5,
                pitch: 55,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fith-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Doctorandos en ciencias y spin-offs: una vía estratégica hacia el mercado laboral',
            description: 'Los estudiantes de doctorado en ciencias se enfrentan a crecientes dificultades para integrarse en el mercado laboral. Aunque su formación es altamente especializada, la salida académica tradicional -postdoctorado y carrera universitaria- es cada vez más limitada y competitiva. <br> <br> Gráfica dinámica e interactiva de los graduados en la década de los 2000 (autoría propia, fuente: INE): <a href="https://public.flourish.studio/visualisation/24154595/" target="_blank">enlace</a> <br> <br> Por otro lado, muchas empresas no comprenden bien el valor que un doctor puede aportar, percibiéndolo como sobrecualificado o poco adaptado a entornos productivos. <br> Ante esta situación, las spin-offs -empresas derivadas de resultados de investigación- se presentan como una alternativa atractiva. Permiten a los doctorandos aplicar su conocimiento científico a problemas reales, desarrollar habilidades empresariales y explorar la transferencia tecnológica. Además, ofrecen una experiencia profesional más dinámica, donde el investigador puede involucrarse en todo el proceso de creación de valor: desde la validación técnica hasta la comercialización. <br> <br> Gráfica dinámica e interactiva sobre el grado de relación entre los estudios de doctorado por campo de doctorado y el trabajo principal (2009) (autoría propia, fuente: INE): <a href="https://public.flourish.studio/visualisation/24155246/" target="_blank">enlace</a> <br> <br> Participar en una spin-off también facilita el desarrollo de competencias clave, como la gestión de proyectos, la captación de financiación o la comunicación con actores del ecosistema de innovación. Esto amplía sus salidas profesionales y contribuye a que el tejido productivo reconozca el valor del doctorado como motor de innovación. <br> Para potenciar esta vía, se requiere apoyo institucional, formación específica y un cambio cultural que legitime el emprendimiento desde la ciencia. Fomentar la creación de spinoffs no solo ayuda a resolver el problema de las salidas profesionales del doctorado, sino que impulsa la transferencia de conocimiento y el desarrollo económico basado en la I+D. <br> <br> <b> Trabajar en una spin-off universitaria en Extremadura: una oportunidad con futuro <b> <br> <br> El sistema universitario de Extremadura, a través de la Universidad de Extremadura (UEx), está impulsando cada vez más la creación de spin-offs como vía para transferir el conocimiento generado en sus laboratorios al entorno productivo. Estas empresas, nacidas de proyectos de investigación desarrollados en la universidad, representan una excelente oportunidad para investigadores jóvenes, especialmente para doctorandos y doctores en ciencias. <br> Trabajar en una spin-off permite aplicar conocimientos científicos en proyectos reales con impacto social y económico, a la vez que se desarrollan competencias clave en innovación, emprendimiento, gestión tecnológica y trabajo en equipo. En un entorno como Extremadura, donde se están promoviendo políticas para retener el talento joven y fomentar un ecosistema innovador, estas iniciativas cobran especial relevancia. <br> Además, integrarse en una spin-off puede ser una forma de generar empleo cualificado sin necesidad de abandonar la región, contribuyendo al desarrollo económico local y creando conexiones con el tejido empresarial. Por todo ello, participar en una spin-off del sistema universitario extremeño no solo es una salida profesional atractiva, sino también una oportunidad para construir futuro desde la ciencia y la innovación.',
            location: {
                center: [-7.004108, 38.886571],
                zoom: 16.5,
                pitch: 55,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fith-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Spin-off de Extremadura',
            description: 'En extremadura podemos localizar cuatro Spin-off, una en Cáceres y tres en Badajoz <br> <br> Mapa coroplético e interactivo sobre la distribución de spin-off en Extremadura (autoría propia, fuente: INE): <a href="https://public.flourish.studio/visualisation/24154795/" target="_blank">enlace</a> <br> <br> A continuación introducimos cada una de esas cuatro spin-off y sus repspectivas localizaciones ',
            location: {
                center: [-7.004108, 38.886571],
                zoom: 16.5,
                pitch: 55,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Spin-off 1: Biobee Microelectronics',
            image: 'https://www.repsol.com/content/dam/repsol-corporate/es/energia-e-innovacion/tipos-de-semiconductores-pureza.jpg',
            description: 'BIOBEE es una empresa de ingeniería de semiconductores de bioimpedancia sin fábrica ubicada en Badajoz, con un circuito integrado de aplicación específica (ASIC) analógico patentado. BIOBEE busca garantizar la satisfacción del cliente, lo que se traduce en la fidelización de clientes mediante la identificación conjunta de sus requisitos y expectativas en términos de calidad, rendimiento, plazos y costes. BIOBEE ofrece dos modelos de negocio complementarios: un suministro de ASIC basado en un kit listo para usar para desarrolladores de dispositivos y un kit de desarrollo de bioimpedancia de hardware y software listo para usar, basado en nuestro ASIC patentado, para fabricantes de equipos originales (OEM) líderes. BIOBEE se fundó en 2012 como una empresa derivada de la Universidad de Extremadura. Su sede se encuentra en Badajoz (España). Actualmente, los clientes de BIOBEE son principalmente empresas OEM, principalmente activas en los sectores de la salud, la alimentación y la agricultura. BIOBEE cuenta con las certificaciones ISO 9001:2015 y EA0047 desde julio de 2022. La visión de BIOBEE es ser la empresa líder en ASIC analógicos para espectroscopía de bioimpedancia (BIS), incorporando la innovación en chips. La visión de I+D+i de BIOBEE es ser una empresa líder en el diseño de semiconductores y circuitos integrados para espectroscopía de bioimpedancia, basada en la investigación, el desarrollo y la innovación en el sector del diseño microelectrónico como herramienta para generar soluciones y productos disruptivos. La misión de BIOBEE es proporcionar ASIC analógicos BIS a desarrolladores de dispositivos de todo el mundo. <br> <br> Más información en <a href="https://biobee.tech" target="_blank">enlace</a> <br> <br> (Imagen extraída de <a href="https://www.repsol.com/content/dam/repsol-corporate/es/energia-e-innovacion/tipos-de-semiconductores-pureza.jpg" target="_blank">enlace</a>)',
            location: {
                center: [-7.004108, 38.886571],
                zoom: 16.5,
                pitch: 55,
                bearing: 10.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Spin-off 2: Metanogenia',
            image: 'https://www.metanogenia.com/storage/images/2024_03/eZ5uny8RUXpHfoZHDASfEJKnkHWsKsvXV7G7woMv.webp',
            description: 'Metanogenia es una Spin-Off de la Universidad de Extremadura ubicada en Badajoz y fundada en 2013. Es una empresa de base tecnológica especializada en la mejora de proceso, optimización y desarrollo de plantas de biogás y biometano. Tiene dos áreas diferenciadas de trabajo. Por un lado y dada la componente investigadora, existe un departamento de I+D+i y laboratorio encargado de desarrollar proyectos de mejora del proceso biológico para diferentes sustratos y aplicando conocimiento biotecnológico. Asu vez se encarga de las analíticas de sustratos y digestatos de plantas de biogás con el objetivo de conocer el estado de los reactores, potencial teórico energético y caracterización de muestras. En el mismo laboratorio tienen lugar ensayos de digestión anaerobia tanto en “batch” como en continuo para determinar la biodegradabilidad, el potencial energético real y la estabilidad de sustratos de clientes con intención de construir una planta de biogás u optimizar una planta ya en operación. La otra área de especialización de Metanogenia es la de Ingeniería de procesos. En este caso, el equipo de Metanogenia consta de profesionales que han realizado 17 proyectos de biogás industrial y 30 referencias en estudios de viabilidad de plantas de biogás y biometano, así diferentes servicios relacionados con la elaboración de proyectos básicos para AAIs y elaboración de memorias técnicas para subvenciones relacionas con la construcción de plantas de biogás. A lo largo de todos los años de actividad, Metanogenia ha trabajado en proyectos de todo tipo, desde pequeñas plantas de autoconsumo térmico, como plantas de gran tamaño de producción de biometano. En todos estos proyectos se ha trabajado con multitud de subproductos. Gracias a este know-how, Metanogenia dispone de un modelo matemático predictivo sobre producciones de biogás por tonelada de residuo. De esta manera, es mucho más fácil aterrizar un proyecto y acotar las condiciones de operación de una planta de biogás o de futuros ensayos de digestión anaerobia si fuera necesario. Nuestro compromiso es acompañar al cliente en todas las fases del proyecto, minimizando riesgos e incertidumbres e implicarnos en el desarrollo de mismo como si fuera nuestro. Hay que tener en cuenta que las plantas de biogás no se pueden regir por criterios estándares y cada una hay que desarrollarla desde la optimización biológica y constructiva. Sólo así se encuentra la rentabilidad que esta tecnología puede aportar. Hay que tener en cuenta las necesidades del cliente, el modelo de negocio óptimo y sobre todo la estabilidad biológica con los subproductos que están disponibles en cada momento. <br> <br> Más información en <a href="https://www.metanogenia.com" target="_blank">enlace</a> <br> <br> (Imagen extraída de <a href="https://www.metanogenia.com/storage/images/2024_03/eZ5uny8RUXpHfoZHDASfEJKnkHWsKsvXV7G7woMv.webp" target="_blank">enlace</a>)',
            location: {
                center: [-7.005386, 38.886536],
                zoom: 16.5,
                pitch: 55,
                bearing: -164,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Spin-off 3: Senergy Products And Services',
            image: 'https://www.activaenergiasrenovables.com/wp-content/uploads/2022/10/MicrosoftTeams-image-4.jpg',
            description: 'Senergy Products and Services (Senergyps) es una empresa Spin-off de la Universidad de Extremadura ubicada en Badajoz que nace en 2015 a partir de un grupo de ingenieros dedicados a la I+D+i en electrónica de potencia y sistemas eléctricos desde 2008 en el sector público y en el privado. El equipo humano de la empresa es mayor valor de Senergyps, pues dado su perfil técnico multidisciplinar y su compromiso en buscar y ofrecer soluciones a la sociedad le confieren un grado superior de confiabilidad y fidelidad. Las principales líneas de negocio de Senergyps son los servicios energéticos, principalmente en el campo de renovable fotovoltaico; movilidad eléctrica, destacando las estaciones de carga; diseño de circuitos electrónicos a medida y sistemas de monitorización en la nube. Con sede en Badajoz, tenemos el know how y ofrecemos enlace directo con la masiva acumulación de potencia renovable fotovoltaica de la zona, así como con la inminente infraestructura de cargadores para vehículo eléctrico circundante. Senergyps tiene la garantía que dan los reconocidos sellos de pyme innovadora y empresa innovadora de base tecnológica. <br> <br> Más información en <a href="https://www.senergyps.com" target="_blank">enlace</a> <br> <br> (Imagen extraída de <a href="https://www.activaenergiasrenovables.com/wp-content/uploads/2022/10/MicrosoftTeams-image-4.jpg" target="_blank">enlace</a>)',
            location: {
                center: [-7.007382, 38.885991],
                zoom: 16.52,
                pitch: 55,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Spin-off 4: Metrikamedia',
            image: 'https://marketing4ecommerce.co/wp-content/uploads/2019/08/nueva-portada-enero.jpeg',
            description: 'MetrikaMedia es una empresa ubicada en Cáceres que nace con el objetivo de ofrecer soluciones a problemas reales en el ámbito de la música y su rentabilidad. Realizan una medición automatizada y personalizable de la música emitida, detectan contenidos propios y libres de derechos colectivos, y generan informes personalizables y listos para su presentación en agencias de gestión de derechos. También ayudan a relacionar la música con la publicidad, generando informes personalizables para agencias. <br> <br> Más información en <a href="https://www.metrikamedia.com" target="_blank">enlace</a> <br> <br> (Imagen extraída de <a href="https://marketing4ecommerce.co/wp-content/uploads/2019/08/nueva-portada-enero.jpeg" target="_blank">enlace</a>)',
            location: {
                center: [-6.344562856310029, 39.4800410128832],
                zoom: 16.5,
                pitch: 55,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
