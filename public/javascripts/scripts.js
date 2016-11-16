$('.ui.sidebar').sidebar({
    context: $('.pushable.segment'),
    transition: 'overlay'
}).sidebar('attach events', 'a#hamburger-link');
