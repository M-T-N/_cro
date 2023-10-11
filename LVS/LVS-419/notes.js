// featured offers
document.querySelectorAll('.glide__slide-content__cta').forEach(function(el){
  fetch(el.href)
  .then(function (response) {
      switch (response.status) {
          // status "OK"
          case 200:
              return response.text();
          // status "Not Found"
          case 404:
              throw response;
      }
  })
  .then(function (template) {
      const parser = new DOMParser();
      const html = parser.parseFromString(template, 'text/html');
      console.log(html.querySelector('.offer-details__dates h4'));
      html.querySelectorAll('.offer-details__list li').forEach(function(el){
          console.log(el.innerText)
      });
  })
  .catch(function (response) {
      // "Not Found"
      console.log(response.statusText);
  });
})


// exclusive offers
document.querySelectorAll('.general-notification-cta').forEach(function(el){
  fetch(el.href)
  .then(function (response) {
      switch (response.status) {
          // status "OK"
          case 200:
              return response.text();
          // status "Not Found"
          case 404:
              throw response;
      }
  })
  .then(function (template) {
      const parser = new DOMParser();
      const html = parser.parseFromString(template, 'text/html');
      console.log(html);
  })
  .catch(function (response) {
      // "Not Found"
      console.log(response.statusText);
  });
})