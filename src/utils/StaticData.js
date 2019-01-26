const linkValue = [
    {
        id : 'homeTarget',
        link : '#home',
        tilte : 'HOME',
        isActive : true,
        isScroll : false
    },
    {
        id : 'aboutTarget',
        link : '#about',
        tilte : 'ABOUT',
        isActive : false,
        isScroll : false
    },
    {
        id : 'serviceTarget',
        link : '#service',
        tilte : 'SERVICE',
        isActive : false,
        isScroll : false
    },
    {
        id : 'resumeTarget',
        link : '#resume',
        tilte : 'RESUME',
        isActive : false,
        isScroll : false
    },
    {
        id : 'workTarget',
        link : '#my_work',
        tilte : 'MY WORK',
        isActive : false,
        isScroll : false
    },
    {
        id : 'contactTarget',
        link : '#contact',
        tilte : 'CONTACT',
        isActive : false,
        isScroll : false
    }
]

const socialLinks = [
    {
        id : 0,
        href : 'https://www.instagram.com/roinujetsugua_sama/',
        icon : 'fa-instagram'
    },
    {
        id : 1,
        href : 'https://www.pinterest.fr/akaaugustejunior/',
        icon : 'fa-pinterest'
    },
    {
        id : 2,
        href : 'https://www.linkedin.com/in/junior-tiemle-324701160/',
        icon : 'fa-linkedin-in'
    }
]


const services = [
    {
        id : 0,
        icon : "fas fa-paint-brush",
        text : "Avec ses connaissances en python, Auguste Tiemele peut réaliser des applications intuitif et facile à utilisation avec une bonne interface graphique",
        title : "DESKTOP APP"
    },
    {
        id : 1,
        icon : "fas fa-mobile-alt",
        text : "Avec ses connaissances en react native, java et aussi python, Auguste Tiemele peut réaliser des applications très fiables et ergonomiques sur les différents plateformes Android/IOS",
        title : "MOBILE APPS"
    },
    {
        id : 2,
        icon : "fas fa-code",
        text : "Avec ses connaissances en reactjs , firebase et python, Auguste Tiemele peut se permet de faire des applications ou site web fullstack (client et serveur) de façon efficace et rapide",
        title : "WEB APPS"
    }
]



export {
    linkValue,
    socialLinks,
    services
}