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
        text: 'Pequeña app para la búsqueda de gif, construida con react.Js, consumiendo la api de Giphy',
        isPublic: true,
        id: '1'
    },
    {
        linkCode: 'https://github.com/Judiazp/portafolio',
        img: `${portfolio}`,
        title: 'Portafolio',
        text: 'Construido con ReactJS utilizando componentes de Material-UI',
        isPublic: false,
        NoInterface: true,
        id: '4'
    },
    {
        linkPage: 'https://judiazp.github.io/app-lista-mercado/',
        linkCode: 'https://github.com/Judiazp/app-lista-mercado',
        img: `${todo}`,
        title: 'Todo List',
        text: 'Crea listas de tareas. Filtra por completadas, no completadas, y mas.',
        isPublic: true,
        id: '3'
    },
    {
        linkPage: 'https://codepen.io/judiazp/full/xxOeEZY',
        linkCode: 'https://github.com/Judiazp/maquetado-web-responsive/tree/master/technical-documentation-page',
        img: `${documentation}`,
        title: 'Documentación JS',
        text: 'Página de documentación técnica de JavaScript construida con HTML5 y CSS3.',
        isPublic: true,
        id: '5'
    },
    {
        linkPage: '',
        linkCode: 'https://github.com/Judiazp/administration-app',
        img: `${finance}`,
        title: 'Finance (En desarrollo)',
        text: 'Administra tus finanzas, lleva un registro de tus ingresos y egresos, toma el control de tu dinero.',
        NoInterface: true,
        id: '2'
    },
];

export default projectList;