import finance from '../multimedia/adminFinance.jpg'
import todo from '../multimedia/listaDeTareas.jpg'
import portfolio from '../multimedia/miPortafolio.jpg'
import documentation from '../multimedia/documentation.jpg'
import develop from '../multimedia/enDesarrollo.jpg'

const projectList = [
    {
        linkPage: 'https://finance-admin.netlify.app/',
        linkCode: 'https://github.com/Judiazp/administration-app',
        img: `${finance}`,
        title: 'Finance (En desarrollo)',
        text: 'Aplicación web para administrar finanzas personales. Agrega egresos e ingresos, lleva un registro de tus gastos.',
        isPublic: true,
        id: '2'
    },
    {
        linkPage: 'https://judiazp.github.io/gif-expert-app/',
        linkCode: 'https://github.com/Judiazp/gif-expert-app',
        img: `${develop}`,
        title: 'GifExpertApp',
        text: 'App para la búsqueda de gif, construida con React.Js, consumiendo la API de GIPHY.',
        isPublic: true,
        id: '1'
    },
    {
        linkPage: 'https://judiazp.github.io/app-lista-mercado/',
        linkCode: 'https://github.com/Judiazp/app-lista-mercado',
        img: `${todo}`,
        title: 'Todo List',
        text: 'Crea listas de tareas. Filtra por completadas, no completadas, y mas. Construida con HTML5, CSS3 y vanilla JavaScript.',
        isPublic: true,
        id: '3'
    },
    {
        linkCode: 'https://github.com/Judiazp/portafolio',
        img: `${portfolio}`,
        title: 'Portafolio',
        text: 'Construido con React.JS utilizando componentes de Material-UI.',
        isPublic: false,
        NoInterface: true,
        id: '4'
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
];

export default projectList;