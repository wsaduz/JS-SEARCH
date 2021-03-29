let center = document.querySelector('.center')
    
function geoFindMe() { 

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      let latitude  = position.coords.latitude;
      let longitude = position.coords.longitude;
  
      status.textContent = '';
      // Просмотр своего местоположения
      // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      // Кординаты 
      // mapLink.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
      if(/41.311151/i.test(latitude) && /69.279737/i.test(longitude)) {
        let region = document.querySelector('#region')
        region.innerHTML = 'Ташкент?'
        let btn = document.getElementsByClassName('btn')[0]
        btn.onclick = function() {
            tosh()
            center.classList.add('hide')
            center.classList.remove('center')
        }
      }
      if(/40.78/i.test(latitude) && /72.35/i.test(longitude)) {
        let region = document.querySelector('#region')
        region.innerHTML = 'Андижан?'
        let btn = document.getElementsByClassName('btn')[0]
        btn.onclick = function() {
            and()
            center.classList.add('hide')
            center.classList.remove('center')
        }
      }
      if(/40.3/i.test(latitude) && /71.7/i.test(longitude)) {
        let region = document.querySelector('#region')
        region.innerHTML = 'Фергана?'
        let btn = document.getElementsByClassName('btn')[0]
        btn.onclick = function() {
            far()
            center.classList.add('hide')
            center.classList.remove('center')
        }
      }
      if(/41.000078/i.test(latitude) && /71/i.test(longitude)) {
        let region = document.querySelector('#region')
        region.innerHTML = 'Фергана?'
        let btn = document.getElementsByClassName('btn')[0]
        btn.onclick = function() {
            far()
            center.classList.add('hide')
            center.classList.remove('center')        }
      }
      else {
        let region = document.querySelector('#region')
        region.innerHTML = 'Ташкент?'
        let btn = document.getElementsByClassName('btn')[0]
        btn.onclick = function() {
            tosh()
            center.classList.add('hide')
            center.classList.remove('center')
        }
      }
          
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Геолокация не поддерживается вашим браузером';
    } else {
    //   status.textContent = 'Загрузка...';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  geoFindMe()
//   document.querySelector('#find-me').addEventListener('click', geoFindMe);

navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
   })
  
  function info() {
    // let center = document.querySelector('.center')
    center.classList.add('hide')
    center.classList.remove('center')
    let searchs = document.querySelector('.search')
    searchs.classList.add('block');
  }

  function error() {
    // let center = document.querySelector('.center')
    let searchs = document.querySelector('.search')
    searchs.classList.add('block');
    status.textContent = 'Невозможно определить ваше местоположение';
    center.classList.add('hide')
    window.setTimeout(function() {
      status.textContent = '';
  }, 2000)
  }

  