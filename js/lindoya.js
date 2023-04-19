



window.onload = function() {
  const details = document.getElementsByClassName('history__timeline__item--details')

  const content = [
    {
      year: '1930',
      title: '',
      description: 'Descoberta da Fonte São Benedito.',
      image: 'item-01.jpg'
    },
    {
      year: '1969',
      title: 'Um marco na história',
      description: 'Fez parte da missão Apollo 11: primeira vez que o homem pisou na Lua.',
      image: 'item-02.jpg'
    },
    {
      year: '1970',
      title: 'Ano de inovações',
      description: 'Primeiro copo de plástico descartável de 200 ml com tampa de alumínio do mercado brasileiro.',
      image: 'item-03.jpg'
    },
    {
      year: '1980',
      title: 'Garrafão de rosca',
      description: 'Primeiro garrafão descartável de 5 L com tampa de rosca do mercado.',
      image: 'item-04.jpg'
    },
    {
      year: '1983',
      title: 'Expedição à Antártica',
      description: 'Acompanhou a 1ª expedição brasileira à Antártica.',
      image: 'item-05.jpg'
    },
    {
      year: '1992',
      title: 'Água com gás',
      description: 'Início da produção de água com gás nas embalagens PET.',
      image: 'item-06.jpg'
    },
    {
      year: '1994',
      title: 'Novas embalagens',
      description: 'Primeira embalagem brasileira com tampa esportiva (Linha Fitness).',
      image: 'item-07.jpg'
    },
    {
      year: '1995',
      title: 'Grande Prêmio de Fórmula 1',
      description: 'Foi a água oficial do Grande Prêmio do Brasil de Fórmula 1.',
      image: 'item-08.jpg'
    },
    {
      year: '1998',
      title: 'Facilitando o descarte',
      description: 'Lançamento da primeira garrafa PET compactável que facilita o descarte.',
      image: 'item-09.jpg'
    },
    {
      year: '2000',
      title: 'A melhor água',
      description: 'Eleita por especialistas da revista Exame VIP como a segunda melhor água com gás entre as principais marcas globais.',
      image: 'item-10.jpg'
    },
    {
      year: '2002',
      title: 'Embalagens para copos',
      description: 'Pioneira no lançamento de novas embalagens para copos.',
      image: 'item-11.jpg'
    },
    {
      year: '2003',
      title: 'Novo sistema',
      description: 'Lançamento do Sistema PHS (Praticidade, Higiene e Segurança) para garrafões.',
      image: 'item-12.jpg'
    },
    {
      year: '2004',
      title: 'Novidades',
      description: 'Lançamento das primeiras embalagens de 240 ml nas versões normal e kids.',
      image: 'item-13.jpg'
    },
    {
      year: '2009',
      title: 'Embalagem rosa',
      description: 'Lançamento da primeira garrafa de 240 ml na versão feminina no mercado brasileiro.',
      image: 'item-14.jpg'
    },
    {
      year: '2010',
      title: 'Nova linha',
      description: 'Lançamento da linha Speciali e da alça Leve Fácil para o pack de 6 unidades de garrafas de 1,5 L.',
      image: 'item-15.jpg'
    },
    {
      year: '2012',
      title: 'Água termal',
      description: 'Lançamento da primeira água termal brasileira em aerossol, a Lindoya Verão Thermal.',
      image: 'item-16.jpg'
    },
    {
      year: '2016',
      title: 'Cuidando do meio ambiente',
      description: 'Lançamento da linha Sense para um consumo consciente.',
      image: 'item-17.jpg'
    },
  ];

  
  handleAllSwipper(content)
  handleAllTimeline(content)
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  handleEventSwiper(swiper, details);
  


  function handleAllSwipper(content){
    content.forEach(element => {
      addNewSwiper(element)
    })
  }

  function handleAllTimeline(content){
    content.forEach((element, index) => {
      addItemTimeLine(element, index)
    })
  }

  function addItemTimeLine(content, index){
    const history__timeline = document.getElementById('history__timeline')
    const history__timeline__item = document.createElement('li')
    history__timeline__item.classList.add('history__timeline__item')

    const history__timeline__item_number = document.createElement('span')
    history__timeline__item_number.classList.add('history__timeline__item--number')
    history__timeline__item_number.innerHTML = content.year

    const history__timeline__item_details = document.createElement('i')
    history__timeline__item_details.classList.add('history__timeline__item--details')
    if(index == 0) {
      history__timeline__item_details.classList.add('active')
    }
    history__timeline__item_details.onclick = function(){
      swiper.slideTo(index)
    }

    history__timeline__item.appendChild(history__timeline__item_number)
    history__timeline__item.appendChild(history__timeline__item_details)
    
    history__timeline.appendChild(history__timeline__item)
  }

  function handleEventSwiper(swiper, details){
    swiper.on('slideChange', function (item) {
      try{
        for (let detail of details) {
          detail.classList.remove('active')
        }
        details[item.activeIndex].classList.add('active')
      }catch(e){console.log(e)}
    });
  }

  function addNewSwiper(content){
    const swiper_wrapper = document.getElementById('swiper-wrapper')
    const swiper_slide = document.createElement('div')
    swiper_slide.classList.add('swiper-slide')
    

    const history__content_item = document.createElement('div')
    history__content_item.classList.add('history__content_item')
    
    const history__content_item__content = document.createElement('div') 
    history__content_item__content.classList.add('history__content_item__content')

    const history__content_item__content__year = document.createElement('h3')
    history__content_item__content__year.classList.add('history__content_item__content--year')
    history__content_item__content__year.innerHTML = content.year
    history__content_item__content.appendChild(history__content_item__content__year)

    const history__content_item__content__title = document.createElement('h4')
    history__content_item__content__title.classList.add('history__content_item__content--title')
    history__content_item__content__title.innerHTML = content.title
    history__content_item__content.appendChild(history__content_item__content__title)

    const history__content_item__content__description = document.createElement('p')
    history__content_item__content__description.classList.add('history__content_item__content--description')
    history__content_item__content__description.innerText = content.description

    const swiper_button_prev = document.createElement('button')
    swiper_button_prev.classList.add('swiper-button-prev')
    history__content_item__content__description.appendChild(swiper_button_prev)

    const swiper_button_next = document.createElement('button')
    swiper_button_next.classList.add('swiper-button-next')
    history__content_item__content__description.appendChild(swiper_button_next)

    history__content_item__content.appendChild(history__content_item__content__description)

    const history__content_item__image = document.createElement('div')
    history__content_item__image.classList.add('history__content_item__image')

    const img_fluid = document.createElement('img')
    img_fluid.classList.add('img-fluid')
    img_fluid.src = 'assets/images/' + content.image
    history__content_item__image.appendChild(img_fluid)

    history__content_item.appendChild(history__content_item__content)
    history__content_item.appendChild(history__content_item__image)

    swiper_slide.appendChild(history__content_item)
    swiper_wrapper.appendChild(swiper_slide)
  }


}