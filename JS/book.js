
document.querySelectorAll('.book-item').forEach(item => {
    item.addEventListener('click', function() {
        const cover = this.dataset.cover;
        const title = this.dataset.title;
        const author = this.dataset.author;
        const desc = this.dataset.desc;
        document.getElementById('book-details').innerHTML = `
            <div class="flex items-center mb-4">
                <img src="${cover}" alt="Capa do livro" class="w-48 h-64  object-cover rounded-md mr-4">
                <h3 class="text-2xl font-bold">${title}</h3>
            </div>
            <p class="text-gray-600 mb-2">Autor: ${author}</p>
            <p class="text-gray-500">${desc}</p>
        `;
    });
});


document.querySelectorAll('.book-item').forEach(item => {
    item.addEventListener('click', function() {
        const { cover, title, author, desc } = this.dataset; // Destructuring para limpar o código

        document.getElementById('book-details').innerHTML = `
            <div class="p-6 border border-gray-200 rounded-lg shadow-sm bg-white"> 
                <div class="flex flex-col md:flex-row items-start gap-6 mb-4">
                    <img src="${cover}" alt="${title}" class="w-48 h-64 object-cover rounded-md shadow-md">
                    <div>
                        <h3 class="text-3xl font-extrabold text-gray-900">${title}</h3>
                        <p class="text-lg text-indigo-600 font-medium mt-1">Autor: ${author}</p>
                    </div>
                </div>
                <hr class="my-4 border-gray-100">
                <p class="text-gray-700 leading-relaxed text-justify">${desc}</p>
            </div>
        `;
    });
});
