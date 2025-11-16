// Base de datos de artículos
// Para añadir nuevos artículos, simplemente agrega un nuevo objeto a este array

const articles = [
    {
        id: 'alfabeto-griego',
        title: 'El Alfabeto Griego',
        description: 'Descubre las 24 letras del alfabeto griego, desde alfa hasta omega',
        content: `
            <h1>El Alfabeto Griego</h1>
            <div class="article-meta">Una guía completa de las 24 letras griegas</div>

            <p>El alfabeto griego es uno de los sistemas de escritura más antiguos y ha sido fundamental en el desarrollo de la civilización occidental. Utilizado desde el siglo VIII a.C., no solo dio origen al alfabeto latino que usamos hoy, sino que sus letras se utilizan ampliamente en matemáticas, física, astronomía y muchas otras ciencias.</p>

            <h2>Las 24 letras del alfabeto griego</h2>

            <p>Aquí está la lista completa del alfabeto griego con sus nombres y pronunciación aproximada:</p>

            <ul>
                <li><span class="greek-letter">Α α</span> <span class="letter-name">Alfa</span> <span class="letter-transliteration">(alpha)</span></li>
                <li><span class="greek-letter">Β β</span> <span class="letter-name">Beta</span> <span class="letter-transliteration">(beta)</span></li>
                <li><span class="greek-letter">Γ γ</span> <span class="letter-name">Gamma</span> <span class="letter-transliteration">(gamma)</span></li>
                <li><span class="greek-letter">Δ δ</span> <span class="letter-name">Delta</span> <span class="letter-transliteration">(delta)</span></li>
                <li><span class="greek-letter">Ε ε</span> <span class="letter-name">Épsilon</span> <span class="letter-transliteration">(epsilon)</span></li>
                <li><span class="greek-letter">Ζ ζ</span> <span class="letter-name">Zeta</span> <span class="letter-transliteration">(zeta)</span></li>
                <li><span class="greek-letter">Η η</span> <span class="letter-name">Eta</span> <span class="letter-transliteration">(eta)</span></li>
                <li><span class="greek-letter">Θ θ</span> <span class="letter-name">Theta</span> <span class="letter-transliteration">(theta)</span></li>
                <li><span class="greek-letter">Ι ι</span> <span class="letter-name">Iota</span> <span class="letter-transliteration">(iota)</span></li>
                <li><span class="greek-letter">Κ κ</span> <span class="letter-name">Kappa</span> <span class="letter-transliteration">(kappa)</span></li>
                <li><span class="greek-letter">Λ λ</span> <span class="letter-name">Lambda</span> <span class="letter-transliteration">(lambda)</span></li>
                <li><span class="greek-letter">Μ μ</span> <span class="letter-name">Mu</span> <span class="letter-transliteration">(mu)</span></li>
                <li><span class="greek-letter">Ν ν</span> <span class="letter-name">Nu</span> <span class="letter-transliteration">(nu)</span></li>
                <li><span class="greek-letter">Ξ ξ</span> <span class="letter-name">Xi</span> <span class="letter-transliteration">(xi)</span></li>
                <li><span class="greek-letter">Ο ο</span> <span class="letter-name">Ómicron</span> <span class="letter-transliteration">(omicron)</span></li>
                <li><span class="greek-letter">Π π</span> <span class="letter-name">Pi</span> <span class="letter-transliteration">(pi)</span></li>
                <li><span class="greek-letter">Ρ ρ</span> <span class="letter-name">Rho</span> <span class="letter-transliteration">(rho)</span></li>
                <li><span class="greek-letter">Σ σ/ς</span> <span class="letter-name">Sigma</span> <span class="letter-transliteration">(sigma)</span></li>
                <li><span class="greek-letter">Τ τ</span> <span class="letter-name">Tau</span> <span class="letter-transliteration">(tau)</span></li>
                <li><span class="greek-letter">Υ υ</span> <span class="letter-name">Ípsilon</span> <span class="letter-transliteration">(upsilon)</span></li>
                <li><span class="greek-letter">Φ φ</span> <span class="letter-name">Fi</span> <span class="letter-transliteration">(phi)</span></li>
                <li><span class="greek-letter">Χ χ</span> <span class="letter-name">Ji</span> <span class="letter-transliteration">(chi)</span></li>
                <li><span class="greek-letter">Ψ ψ</span> <span class="letter-name">Psi</span> <span class="letter-transliteration">(psi)</span></li>
                <li><span class="greek-letter">Ω ω</span> <span class="letter-name">Omega</span> <span class="letter-transliteration">(omega)</span></li>
            </ul>

            <h2>Curiosidades</h2>

            <p><strong>¿Por qué "de alfa a omega"?</strong> Esta expresión significa "del principio al fin" porque alfa (Α) es la primera letra del alfabeto griego y omega (Ω) es la última.</p>

            <p><strong>En las ciencias:</strong> Muchas letras griegas se utilizan como símbolos en ciencias. Por ejemplo, π (pi) para la constante matemática 3.14159..., Σ (sigma) para sumatorias, Δ (delta) para cambios o diferencias, y λ (lambda) en física para longitud de onda.</p>

            <p><strong>Sigma tiene dos formas minúsculas:</strong> La letra sigma (σ) tiene una forma especial (ς) que se usa únicamente al final de las palabras.</p>
        `
    }
];

// Exportar artículos
window.articlesData = articles;
