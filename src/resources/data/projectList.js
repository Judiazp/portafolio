import finance from '../multimedia/adminFinance.jpg'
import todo from '../multimedia/listaDeTareas.jpg'
import portfolio from '../multimedia/miPortafolio.jpg'
import documentation from '../multimedia/documentation.jpg'
import develop from '../multimedia/enDesarrollo.jpg'

const projectList = [
    {
        linkPage: 'https://judiazp.github.io/gif-expert-app/',
        linkCode: 'https://github.com/Judiazp/gif-expert-app',
        img: `${develop}`,
        title: 'GifExpertApp',
        text: 'App para la búsqueda de gif, construida con React.Js, consumiendo la Api de Giphy.',
        isPublic: true,
        id: '1'
    },
    {
        linkCode: 'https://github.com/Judiazp/portafolio',
        img: `${portfolio}`,
        title: 'Portafolio',
        text: 'Construido con ReactJS utilizando componentes de Material-UI.',
        isPublic: false,
        NoInterface: true,
        id: '4'
    },
    {
        linkPage: 'https://judiazp.github.io/app-lista-mercado/',
        linkCode: 'https://github.com/Judiazp/app-lista-mercado',
        img: `${todo}`,
        title: 'Todo List',
        text: 'Aplicación para listas de tareas. Filtra por completadas, no completadas, y mas.',
        isPublic: true,
        id: '3'
    },
    {
        linkPage: 'https://judiazp.github.io/documentation-JavaScript/',
        linkCode: 'https://github.com/Judiazp/documentation-JavaScript',
        img: `${documentation}`,
        title: 'Documentación JS',
        text: 'Página de documentación técnica de JavaScript construida con HTML5 y CSS3.',
        isPublic: true,
        id: '5'
    },
    {
        linkPage: 'https://finance-develop.netlify.app/',
        linkCode: 'https://github.com/Judiazp/administration-app',
        img: `${finance}`,
        title: 'Finance (En desarrollo)',
        text: 'La plataforma se encuentra en desarrollo y pruebas por lo que recomiendo visitar la app junto al repositorio.',
        isPublic: true,
        id: '2'
    },
];

export default projectList;