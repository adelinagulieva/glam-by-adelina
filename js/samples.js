new Vue({
  el: '#services',
  data: {
    active: 'bridal',
    lightbox: '',
    type: {
      bridal: {
        samples: [
          {
            image: 'img/bridal/bride1.jpg'
          },
          {
            image: 'img/bridal/bride2.jpg'
          },
          {
            image: 'img/bridal/bride3.jpg'
          },
          {
            image: 'img/bridal/bride4.jpg'
          },
          {
            image: 'img/bridal/bride5.jpg'
          },
          {
            image: 'img/bridal/bride6.jpg'
          },
          {
            image: 'img/bridal/bride7.jpg'
          },
          {
            image: 'img/bridal/bride8.jpg'
          },
          {
            image: 'img/bridal/bride9.jpg'
          },
          {
            image: 'img/bridal/bride10.jpg'
          },
          {
            image: 'img/bridal/bride11.jpg'
          },
          {
            image: 'img/bridal/bride12.jpg'
          },
          {
            image: 'img/bridal/bride13.jpg'
          }
        ],
      },
      makeup: {
        samples: [
          {
            image: 'img/makeup/makeup1.jpg'
          },
          {
            image: 'img/makeup/makeup2.jpg'
          },
          {
            image: 'img/makeup/makeup3.jpg'
          },
          {
            image: 'img/makeup/makeup4.jpg'
          },
          {
            image: 'img/makeup/makeup5.jpg'
          },
          {
            image: 'img/makeup/makeup6.jpg'
          },
          {
            image: 'img/makeup/makeup7.jpg'
          },
          {
            image: 'img/makeup/makeup8.jpg'
          },
          {
            image: 'img/makeup/makeup9.jpg'
          },
          {
            image: 'img/makeup/makeup10.jpg'
          },
          {
            image: 'img/makeup/makeup11.jpg'
          },
          {
            image: 'img/makeup/makeup12.jpg'
          },
          {
            image: 'img/makeup/makeup13.jpg'
          },
          {
            image: 'img/makeup/makeup14.jpg'
          },
          {
            image: 'img/makeup/makeup15.jpg'
          },
          {
            image: 'img/makeup/makeup16.jpg'
          }
        ]
      },
      hair: {
        samples: [
          {
            image: 'img/hair/hair1.jpg'
          },
          {
            image: 'img/hair/hair2.jpg'
          },
          {
            image: 'img/hair/hair3.jpg'
          },
          {
            image: 'img/hair/hair4.jpg'
          },
          {
            image: 'img/hair/hair5.jpg'
          },
          {
            image: 'img/hair/hair6.jpg'
          },
          {
            image: 'img/hair/hair7.jpg'
          },
          {
            image: 'img/hair/hair8.jpg'
          },
          {
            image: 'img/hair/hair9.jpg'
          },
          {
            image: 'img/hair/hair10.jpg'
          },
          {
            image: 'img/hair/hair11.jpg'
          },
          {
            image: 'img/hair/hair12.jpg'
          }
        ]
      },
      eastern: {
        samples: [
          {
            image: 'img/eastern/eastern1.jpg'
          },
          {
            image: 'img/eastern/eastern2.jpg'
          },
          {
            image: 'img/eastern/eastern3.jpg'
          },
          {
            image: 'img/eastern/eastern4.jpg'
          },
          {
            image: 'img/eastern/eastern5.jpg'
          },
          {
            image: 'img/eastern/eastern6.jpg'
          },
          {
            image: 'img/eastern/eastern7.jpg'
          },
          {
            image: 'img/eastern/eastern8.jpg'
          },
          {
            image: 'img/eastern/eastern9.jpg'
          },
          {
            image: 'img/eastern/eastern10.jpg'
          },
          {
            image: 'img/eastern/eastern11.jpg'
          },
          {
            image: 'img/eastern/eastern12.jpg'
          }
        ]
      }
    }
  }
})

new Vue({
  el: '#contact',
  data: {
    bridal: false,
    event: false,
    bridalServices: [],
    party: false
  }
})