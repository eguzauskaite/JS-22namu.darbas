function addHeaderToApp(app) {
    const headerHTML = `
        <div class="header">
            <h1>Header</h1><br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi eveniet reprehenderit aliquam, deserunt est aliquid praesentium voluptatem expedita, laborum temporibus laudantium eius, a provident in fuga minima qui exercitationem.</p>
        </div>
    `;
    app.innerHTML += headerHTML;
}

// Exportuoja funkciją
export { addHeaderToApp };