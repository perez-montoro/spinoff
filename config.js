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
    title: '¿Quieres trabajar en Extremadura después de sacarte un doctorado?',
    subtitle: 'Escosistema de SpinOffs en la región de Extremadura',
    byline: 'Mario Pérez-Montoro',
    footer: 'Source: en la página se especifica de dónde se han extraido cada uno de los recuros utilizados <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Biobee Microelectronics',
            image: 'https://www.repsol.com/content/dam/repsol-corporate/es/energia-e-innovacion/tipos-de-semiconductores-pureza.jpg',
            description: 'BIOBEE es una empresa de ingeniería de semiconductores de bioimpedancia sin fábrica, con un circuito integrado de aplicación específica (ASIC) analógico patentado. BIOBEE busca garantizar la satisfacción del cliente, lo que se traduce en la fidelización de clientes mediante la identificación conjunta de sus requisitos y expectativas en términos de calidad, rendimiento, plazos y costes. BIOBEE ofrece dos modelos de negocio complementarios: un suministro de ASIC basado en un kit listo para usar para desarrolladores de dispositivos y un kit de desarrollo de bioimpedancia de hardware y software listo para usar, basado en nuestro ASIC patentado, para fabricantes de equipos originales (OEM) líderes. BIOBEE se fundó en 2012 como una empresa derivada de la Universidad de Extremadura. Su sede se encuentra en Badajoz (España). Actualmente, los clientes de BIOBEE son principalmente empresas OEM, principalmente activas en los sectores de la salud, la alimentación y la agricultura. BIOBEE cuenta con las certificaciones ISO 9001:2015 y EA0047 desde julio de 2022. La visión de BIOBEE es ser la empresa líder en ASIC analógicos para espectroscopía de bioimpedancia (BIS), incorporando la innovación en chips. La visión de I+D+i de BIOBEE es ser una empresa líder en el diseño de semiconductores y circuitos integrados para espectroscopía de bioimpedancia, basada en la investigación, el desarrollo y la innovación en el sector del diseño microelectrónico como herramienta para generar soluciones y productos disruptivos. La misión de BIOBEE es proporcionar ASIC analógicos BIS a desarrolladores de dispositivos de todo el mundo. Más información en https://biobee.tech. (Imagen extraída de https://www.repsol.com/content/dam/repsol-corporate/es/energia-e-innovacion/tipos-de-semiconductores-pureza.jpg)',
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
            title: 'Metanogenia',
            image: 'https://www.metanogenia.com/storage/images/2024_03/eZ5uny8RUXpHfoZHDASfEJKnkHWsKsvXV7G7woMv.webp',
            description: 'Metanogenia es una Spin-Off de la Universidad de Extremadura fundada en 2013. Es una empresa de base tecnológica especializada en la mejora de proceso, optimización y desarrollo de plantas de biogás y biometano. Tiene dos áreas diferenciadas de trabajo. Por un lado y dada la componente investigadora, existe un departamento de I+D+i y laboratorio encargado de desarrollar proyectos de mejora del proceso biológico para diferentes sustratos y aplicando conocimiento biotecnológico. Asu vez se encarga de las analíticas de sustratos y digestatos de plantas de biogás con el objetivo de conocer el estado de los reactores, potencial teórico energético y caracterización de muestras. En el mismo laboratorio tienen lugar ensayos de digestión anaerobia tanto en “batch” como en continuo para determinar la biodegradabilidad, el potencial energético real y la estabilidad de sustratos de clientes con intención de construir una planta de biogás u optimizar una planta ya en operación. La otra área de especialización de Metanogenia es la de Ingeniería de procesos. En este caso, el equipo de Metanogenia consta de profesionales que han realizado 17 proyectos de biogás industrial y 30 referencias en estudios de viabilidad de plantas de biogás y biometano, así diferentes servicios relacionados con la elaboración de proyectos básicos para AAIs y elaboración de memorias técnicas para subvenciones relacionas con la construcción de plantas de biogás. A lo largo de todos los años de actividad, Metanogenia ha trabajado en proyectos de todo tipo, desde pequeñas plantas de autoconsumo térmico, como plantas de gran tamaño de producción de biometano. En todos estos proyectos se ha trabajado con multitud de subproductos. Gracias a este know-how, Metanogenia dispone de un modelo matemático predictivo sobre producciones de biogás por tonelada de residuo. De esta manera, es mucho más fácil aterrizar un proyecto y acotar las condiciones de operación de una planta de biogás o de futuros ensayos de digestión anaerobia si fuera necesario. Nuestro compromiso es acompañar al cliente en todas las fases del proyecto, minimizando riesgos e incertidumbres e implicarnos en el desarrollo de mismo como si fuera nuestro. Hay que tener en cuenta que las plantas de biogás no se pueden regir por criterios estándares y cada una hay que desarrollarla desde la optimización biológica y constructiva. Sólo así se encuentra la rentabilidad que esta tecnología puede aportar. Hay que tener en cuenta las necesidades del cliente, el modelo de negocio óptimo y sobre todo la estabilidad biológica con los subproductos que están disponibles en cada momento. Más información en https://www.metanogenia.com. (Imagen extraída de https://www.metanogenia.com/storage/images/2024_03/eZ5uny8RUXpHfoZHDASfEJKnkHWsKsvXV7G7woMv.webp)',
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
            title: 'Senergy Products And Services',
            image: 'https://www.activaenergiasrenovables.com/wp-content/uploads/2022/10/MicrosoftTeams-image-4.jpg',
            description: 'Senergy Products and Services (Senergyps) es una empresa Spin-off de la Universidad de Extremadura que nace en 2015 a partir de un grupo de ingenieros dedicados a la I+D+i en electrónica de potencia y sistemas eléctricos desde 2008 en el sector público y en el privado. El equipo humano de la empresa es mayor valor de Senergyps, pues dado su perfil técnico multidisciplinar y su compromiso en buscar y ofrecer soluciones a la sociedad le confieren un grado superior de confiabilidad y fidelidad. Las principales líneas de negocio de Senergyps son los servicios energéticos, principalmente en el campo de renovable fotovoltaico; movilidad eléctrica, destacando las estaciones de carga; diseño de circuitos electrónicos a medida y sistemas de monitorización en la nube. Con sede en Badajoz, tenemos el know how y ofrecemos enlace directo con la masiva acumulación de potencia renovable fotovoltaica de la zona, así como con la inminente infraestructura de cargadores para vehículo eléctrico circundante. Senergyps tiene la garantía que dan los reconocidos sellos de pyme innovadora y empresa innovadora de base tecnológica. Más información en https://www.senergyps.com. (Imagen extraída de https://www.activaenergiasrenovables.com/wp-content/uploads/2022/10/MicrosoftTeams-image-4.jpg)',
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
            title: 'Metrikamedia',
            image: 'https://marketing4ecommerce.co/wp-content/uploads/2019/08/nueva-portada-enero.jpeg',
            description: 'MetrikaMedia es una empresa que nace con el objetivo de ofrecer soluciones a problemas reales en el ámbito de la música y su rentabilidad. Realizan una medición automatizada y personalizable de la música emitida, detectan contenidos propios y libres de derechos colectivos, y generan informes personalizables y listos para su presentación en agencias de gestión de derechos. También ayudan a relacionar la música con la publicidad, generando informes personalizables para agencias. Más información en https://www.metrikamedia.com. (Imagen extraída de https://marketing4ecommerce.co/wp-content/uploads/2019/08/nueva-portada-enero.jpeg)',
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
