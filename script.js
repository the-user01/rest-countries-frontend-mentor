const body = document.getElementById('body');
const navbar = document.getElementById('navbar');
const navbarh2 = document.getElementById('navbarh2');
const mainSection = document.getElementById('main-section');
const secondSection = document.getElementById('second-section');
const thirdSec = document.getElementById('third-sec');
const darkBtn = document.getElementById('dark-btn');

darkBtn.addEventListener('click', ()=> {

    body.style.backgroundColor = 'hsl(207, 26%, 17%)';
    mainSection.style.backgroundColor = 'hsl(207, 26%, 17%)';
    secondSection.style.backgroundColor = 'hsl(207, 26%, 17%)';
    thirdSec.style.backgroundColor = 'hsl(207, 26%, 17%)';
    navbar.style.backgroundColor = 'hsl(207, 26%, 17%)';
    
    body.style.color = 'white';
    mainSection.style.color = 'white';
    secondSection.style.color = 'white';
    thirdSec.style.color = 'white';
    navbar.style.color = 'white';
    navbarh2.style.color = 'white';

})


fetch('data.json')
    .then(res => res.json())
    .then(data => getCountries(data))

const getCountries = countries => {
    countries.map(country => {

        const { name, flag, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = country;

        const countryDiv = document.createElement('div');

        const countryInfo =
            `
            <div>
                <img src='${flag}'>
            </div>
            <div>
                <h5>${name}</h5>
                <p><b>Population:</b> ${population}</p>
                <p><b>Region:</b> ${region}</p>
                <p><b>Capital:</b> ${capital}</p>
            </div>
        `

        countryDiv.innerHTML = countryInfo;
        countryDiv.className = 'country-div';
        secondSection.appendChild(countryDiv);


        secondSection.addEventListener('click', event => {

            const targetValue = event.target.innerHTML;
            
            
            if (targetValue.toLowerCase() == name.toLowerCase()) {

                mainSection.style.display = 'none';
                
                console.log(targetValue.toLowerCase());
                console.log(name.toLowerCase());

                const countryDiv2 = document.createElement('div');

                const countryInfo2 =
                    `
                    <div>
                        <img src='${flag}'>
                    </div>
        
                    <div class="innerSec">
                        <div>
                            <h3>${name}</h3>
                            <p><b>Population:</b> ${population}</p>
                            <p><b>Region:</b> ${region}</p>
                            <p><b>Sub Region:</b> ${subregion}</p>
                            <p><b>Capital:</b> ${capital}</p>

                            
                            <div class="borders">
                                <p><b>Border Countries:</b> ${borders.map(border => `<span class="borderName">${border}</span>`)}</p>
                            </div>

                            </div>
                            
                            <div class="innerInnerpart">
                                <p><b>Top Level Domain:</b> ${topLevelDomain}</p>
                                <p><b>Currencies:</b> ${currencies[0].name}</p>
                                <p><b>Language:</b> ${languages.map(language => language.name)}</p>
                                </div>  
                    </div>
                `
                countryDiv2.innerHTML = countryInfo2;
                countryDiv2.className = 'countryDiv2';
                thirdSec.appendChild(countryDiv2);
            }

        })


    })
}