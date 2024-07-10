document.addEventListener('DOMContentLoaded', () => {
     const options = {
         root: null,
         rootMargin: '0px',
         threshold: 0.1
     };
 
     const callback = (entries, observer) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add('in-view');
                 observer.unobserve(entry.target);
             }
         });
     };
 
     const observer = new IntersectionObserver(callback, options);
 
     // const targets = document.querySelectorAll('.image-container-potrait, .description, ..chart-content-description-mofo, .chart-container');
     const targets = document.querySelectorAll('.image-container-potrait, .description, .chart-content-description-mofo, .chart-container');
     targets.forEach(target => observer.observe(target));
 });