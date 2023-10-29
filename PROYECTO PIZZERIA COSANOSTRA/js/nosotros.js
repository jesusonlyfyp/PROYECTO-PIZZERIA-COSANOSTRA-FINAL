window.addEventListener('load', ()=>{
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(posicion =>{
            // console.log(posicion.coord.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            // ubicaicion actual

            // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=af35dee3ae8a9622dc80afb1d8a20577`

            //ubicacion por ciudad
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Argentina&lang=es&units=metric&appid=af35dee3ae8a9622dc80afb1d8a20577`

            //console.log(url)

            fetch(url)
                .then (response => { return response.json() })
                .then (data => {
                    
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} ºC`

                

                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()

                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`

                    // console.log (data.wind.speed)


                    //para iconos estaticos
                    // console.log (data.weather[0].icon)
                    // let iconCode = data.weather[0].icon
                    // const urlIcon = `https://api.openweathermap.org/img/wn/${}.png`
                    // console.log(urlIcon)

                    //para iconos animados
                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                          iconoAnimado.src='../media/iconos/animated/thunder.svg'
                          console.log('TORMENTA');
                          break;
                        case 'Drizzle':
                          iconoAnimado.src='../media/iconos/animated/rainy-2.svg'
                          console.log('LLOVIZNA');
                          break;
                        case 'Rain':
                          iconoAnimado.src='../media/iconos/animated/rainy-7.svg'
                          console.log('LLUVIA');
                          break;
                        case 'Snow':
                          iconoAnimado.src='../media/iconos/animated/snowy-6.svg'
                            console.log('NIEVE');
                          break;                        
                        case 'Clear':
                            iconoAnimado.src='../media/iconos/animated/day.svg'
                            console.log('LIMPIO');
                          break;
                        case 'Atmosphere':
                          iconoAnimado.src='../media/iconos/animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;  
                        case 'Clouds':
                            iconoAnimado.src='../media/iconos/animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;  
                        default:
                          iconoAnimado.src='../media/iconos/animated/cloudy-day-1.svg'
                          console.log('por defecto');
                      
                    
                    }
                    





                })
                .catch (error => {
                    console.log(error)
                })
       })
    }
})