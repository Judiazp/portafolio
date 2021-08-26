import finance from '../multimedia/finance.jpg'
import todo from '../multimedia/todo-list.jpg'
import portfolio from '../multimedia/portfolio.jpg'
import documentation from '../multimedia/documentation.jpg'
import develop from '../multimedia/img3.jpg'

const projectList = [
    {
        linkPage: 'https://marketscalcule.netlify.app/',
        linkCode: 'https://github.com/Judiazp/market-list-app',
        img: `${develop}`,
        title: 'Market',
        text: 'Aplicación para llevar las cuentas del mercado. Desarrollada con React y CSS3',
        isPublic: true,
        id: '1'
    },
    {
        linkPage: 'https://finance-admin.netlify.app/',
        linkCode: 'https://github.com/Judiazp/administration-app',
        img: `${finance}`,
        title: 'Finance',
        text: 'Aplicación para administrar finanzas personales. Desarrollada con React y CSS3.',
        isPublic: true,
        id: '2'
    },
    {
        linkPage: 'https://giffexpertapp.netlify.app',
        linkCode: 'https://github.com/Judiazp/gif-expert-app',
        img: `https://media3.giphy.com/media/1C8bHHJturSx2/giphy.gif?cid=bba0826bkhxt3mbd5vapjwisagk8rvognq8fwovkbb87ql9w&rid=giphy.gif&ct=g`,
        title: 'GifExpertApp',
        text: 'App para la búsqueda de gif, construida con React.JS, consumiendo la API de GIPHY.',
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
        linkPage: 'https://judiazp.github.io/app-todo-list/',
        linkCode: 'https://github.com/Judiazp/app-lista-mercado',
        img: `${todo}`,
        title: 'Todo List',
        text: 'Aplicación para crear listas de tareas. Construida con HTML5, CSS3 y JavaScript.',
        isPublic: true,
        id: '5'
    },
    {
        linkPage: 'https://judiazp.github.io/documentation-JavaScript/',
        linkCode: 'https://github.com/Judiazp/documentation-JavaScript',
        img: `${documentation}`,
        title: 'Documentación JS',
        text: 'Página de documentación técnica de JavaScript construida con HTML5 y CSS3.',
        isPublic: true,
        id: '6'
    },
];

export default projectList;