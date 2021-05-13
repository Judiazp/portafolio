import human from './resources/human.jpg';
import finance from './resources/adminFinance.jpg'
import todo from './resources/listaDeTareas.jpg'
import portfolio from './resources/miPortafolio.jpg'
import netflix from './resources/netflix.jpg'
import develop from './resources/enDesarrollo.jpg'

const projectList = [
    {
        linkPage: 'https://judiazp.github.io/clon-netflix/',
        img: `${human}`,
        title: 'Human To Dev',
        text: 'Empresa enfocada en la educacion tecnologica.',
        isPublic: false
    },
    {
        linkPage: '',
        linkCode: 'https://github.com/Judiazp/administration-app',
        img: `${finance}`,
        title: 'Finance',
        text: 'Administra tus finanzas, lleva un registro de tus ingresos y egresos, toma el control de tu dinero.',
        NoInterface: true
    },
    {
        linkPage: 'https://judiazp.github.io/app-lista-mercado/',
        linkCode: 'https://github.com/Judiazp/app-lista-mercado',
        img: `${todo}`,
        title: 'Todo List',
        text: 'Crea listas de tareas. Filtra por completadas, no completadas, y mas.',
        isPublic: true
    },
    {
        linkCode: 'https://github.com/Judiazp/portafolio',
        img: `${portfolio}`,
        title: 'Portafolio',
        text: 'Construido con ReactJS utilizando componentes de Material-UI',
        isPublic: false,
        NoInterface: true
    },
    {
        linkPage: 'https://judiazp.github.io/clon-netflix/',
        linkCode: 'https://github.com/Judiazp/clon-netflix',
        img: `${netflix}`,
        title: 'Maqueta de Netflix',
        text: 'Maqueta la pagina principal de Netflix, construida con HTML5 y CSS3.',
        isPublic: true
    },
    {
        linkPage: 'https://judiazp.github.io/clon-netflix/',
        linkCode: 'https://github.com/Judiazp/clon-netflix',
        img: `${develop}`,
        title: 'En desarrollo',
        text: 'Proximamente...',
        isPublic: false
    },
];

export default projectList;