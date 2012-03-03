function twitter() {new TWTR.Widget({
  version: 2,
  type: 'search',
  search: '#isys100',
  interval: 300000,
  title: 'ISYS100',
  subject: 'IT &amp; Society',
  width: 250,
  height: 350,
  theme: {
    shell: {
      background: '#333333',
      color: '#99cc33'
    },
    tweets: {
      background: '#686461',
      color: '#000000',
      links: '#99cc00'
    }
  },
  features: {
    scrollbar: false,
    loop: true,
    live: true,
    behavior: 'default'
  }
}).render().start();}
