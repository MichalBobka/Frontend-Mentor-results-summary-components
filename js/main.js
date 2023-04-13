const list = document.querySelector('ul')
const button = document.querySelector('button')


fetch('./data/data.json')
	.then(response => response.json())
	.then(data => {
		const container = document.getElementById('container')
		for (let i = 0; i < data.length; i++) {
			const obj = data[i]
			const li = document.createElement('li')
			li.classList.add('summary__piece',`summary__piece--${obj.category.toLowerCase()}`)
            li.innerHTML = `<p><img src="${obj.icon}" alt="">
            ${obj.category} </p>
        <div class="summary__piece-score">
            <p class="summary__piece-score--p">${obj.score} <span>/ 100</span></p>
        </div>`
        console.log(li);
        list.insertBefore(li, button.parentNode);
		}
	})
	.catch(error => console.error(error))
