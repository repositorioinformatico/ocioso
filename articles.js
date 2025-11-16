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
    },
    {
        id: 'mysql-cheatsheet',
        title: 'MySQL Cheatsheet Básico',
        description: 'Comandos esenciales de MySQL que debes conocer',
        content: `
            <h1>MySQL Cheatsheet Básico</h1>
            <div class="article-meta">Los comandos más útiles de MySQL en un solo lugar</div>

            <p>MySQL es uno de los sistemas de gestión de bases de datos más populares. Aquí tienes una guía rápida con los comandos esenciales que necesitas conocer.</p>

            <h2>Conexión y gestión de bases de datos</h2>

            <ul>
                <li><code>mysql -u usuario -p</code> - Conectar a MySQL</li>
                <li><code>SHOW DATABASES;</code> - Listar todas las bases de datos</li>
                <li><code>CREATE DATABASE nombre;</code> - Crear una base de datos</li>
                <li><code>USE nombre;</code> - Seleccionar una base de datos</li>
                <li><code>DROP DATABASE nombre;</code> - Eliminar una base de datos</li>
            </ul>

            <h2>Trabajar con tablas</h2>

            <ul>
                <li><code>SHOW TABLES;</code> - Listar todas las tablas</li>
                <li><code>DESCRIBE tabla;</code> - Ver estructura de una tabla</li>
                <li><code>CREATE TABLE tabla (id INT PRIMARY KEY, nombre VARCHAR(50));</code> - Crear tabla</li>
                <li><code>DROP TABLE tabla;</code> - Eliminar tabla</li>
                <li><code>ALTER TABLE tabla ADD columna VARCHAR(100);</code> - Añadir columna</li>
            </ul>

            <h2>Consultas básicas (SELECT)</h2>

            <ul>
                <li><code>SELECT * FROM tabla;</code> - Seleccionar todos los datos</li>
                <li><code>SELECT columna1, columna2 FROM tabla;</code> - Seleccionar columnas específicas</li>
                <li><code>SELECT * FROM tabla WHERE condicion;</code> - Filtrar con WHERE</li>
                <li><code>SELECT * FROM tabla ORDER BY columna DESC;</code> - Ordenar resultados</li>
                <li><code>SELECT * FROM tabla LIMIT 10;</code> - Limitar resultados</li>
            </ul>

            <h2>Insertar, actualizar y eliminar</h2>

            <ul>
                <li><code>INSERT INTO tabla (col1, col2) VALUES ('val1', 'val2');</code> - Insertar datos</li>
                <li><code>UPDATE tabla SET columna = 'valor' WHERE condicion;</code> - Actualizar datos</li>
                <li><code>DELETE FROM tabla WHERE condicion;</code> - Eliminar datos</li>
            </ul>

            <h2>Joins básicos</h2>

            <ul>
                <li><code>SELECT * FROM tabla1 INNER JOIN tabla2 ON tabla1.id = tabla2.id;</code> - INNER JOIN</li>
                <li><code>SELECT * FROM tabla1 LEFT JOIN tabla2 ON tabla1.id = tabla2.id;</code> - LEFT JOIN</li>
            </ul>

            <h2>Funciones útiles</h2>

            <ul>
                <li><code>COUNT(*)</code> - Contar registros</li>
                <li><code>SUM(columna)</code> - Sumar valores</li>
                <li><code>AVG(columna)</code> - Promedio</li>
                <li><code>MAX(columna)</code> - Valor máximo</li>
                <li><code>MIN(columna)</code> - Valor mínimo</li>
            </ul>

            <h2>Consejos rápidos</h2>

            <p><strong>Siempre usa WHERE en UPDATE y DELETE:</strong> Sin WHERE, ¡modificarás o borrarás TODAS las filas!</p>

            <p><strong>Punto y coma obligatorio:</strong> Todos los comandos SQL deben terminar con <code>;</code></p>

            <p><strong>No distingue mayúsculas:</strong> <code>SELECT</code> y <code>select</code> funcionan igual, pero por convención se escribe en mayúsculas.</p>
        `
    },
    {
        id: 'semantic-commits',
        title: 'Mensajes de Commit Semánticos',
        description: 'Cómo escribir mejores mensajes de commit y ser un mejor programador',
        content: `
            <h1>Semantic Commit Messages</h1>
            <div class="article-meta">Mejora tu estilo de commits y conviértete en mejor programador</div>

            <p>Ver cómo un pequeño cambio en el estilo de tus mensajes de commit puede hacerte un mejor programador.</p>

            <h2>Formato</h2>

            <p><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</code></p>

            <p><code>&lt;scope&gt;</code> es opcional</p>

            <h2>Ejemplo</h2>

            <pre><code>feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Resumen en tiempo presente
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test</code></pre>

            <h2>Tipos de commits</h2>

            <ul>
                <li><code>feat</code> - Nueva funcionalidad para el usuario (no una nueva feature del script de build)</li>
                <li><code>fix</code> - Corrección de un bug para el usuario (no un fix en un script de build)</li>
                <li><code>docs</code> - Cambios en la documentación</li>
                <li><code>style</code> - Formato, punto y coma faltantes, etc. Sin cambios en código de producción</li>
                <li><code>refactor</code> - Refactorización de código de producción, ej. renombrar una variable</li>
                <li><code>test</code> - Añadir tests faltantes, refactorizar tests. Sin cambios en código de producción</li>
                <li><code>chore</code> - Actualizar tareas grunt, etc. Sin cambios en código de producción</li>
            </ul>

            <h2>Más ejemplos</h2>

            <ul>
                <li><code>feat(auth): add login with Google</code></li>
                <li><code>fix(api): resolve null pointer exception</code></li>
                <li><code>docs(readme): update installation instructions</code></li>
                <li><code>style: format code with prettier</code></li>
                <li><code>refactor(utils): rename parseData to transformData</code></li>
                <li><code>test(user): add tests for user registration</code></li>
                <li><code>chore(deps): update dependencies</code></li>
            </ul>

            <h2>Beneficios</h2>

            <p><strong>Historial más legible:</strong> Es mucho más fácil entender qué cambios se hicieron y por qué.</p>

            <p><strong>Automatización:</strong> Puedes generar changelogs automáticamente basándote en los tipos de commits.</p>

            <p><strong>Mejor colaboración:</strong> Tu equipo entiende tus cambios más rápidamente.</p>

            <h2>Referencias</h2>

            <ul>
                <li><a href="https://www.conventionalcommits.org/" target="_blank">Conventional Commits</a></li>
                <li><a href="https://seesparkbox.com/foundry/semantic_commit_messages" target="_blank">Sparkbox - Semantic Commit Messages</a></li>
                <li><a href="http://karma-runner.github.io/1.0/dev/git-commit-msg.html" target="_blank">Karma Git Commit Msg</a></li>
            </ul>
        `
    },
    {
        id: 'git-explicado-facil',
        title: 'Git: Control de Versiones Explicado Fácilmente',
        description: 'Entiende Git con analogías de la vida real',
        content: `
            <h1>Git: Control de Versiones Explicado Fácilmente</h1>
            <div class="article-meta">Porque Git no tiene por qué ser complicado</div>

            <h2>La analogía del videojuego</h2>

            <p>Imagina que estás jugando a un videojuego. Llegas a un punto difícil y decides <strong>guardar la partida</strong>. Si fallas, simplemente cargas desde ese punto guardado y lo intentas de nuevo.</p>

            <p><strong>Git funciona exactamente así, pero con tu código.</strong> Cada vez que haces un "commit", estás guardando la partida de tu proyecto.</p>

            <h2>¿Qué es Git?</h2>

            <p>Git es un sistema de control de versiones. En cristiano: es una máquina del tiempo para tu código que te permite:</p>

            <ul>
                <li>Volver atrás si la cagas</li>
                <li>Ver quién cambió qué y cuándo</li>
                <li>Trabajar en equipo sin pisarse los cambios</li>
                <li>Experimentar sin miedo a romper nada</li>
            </ul>

            <h2>Los conceptos básicos (con ejemplos de la vida real)</h2>

            <p><strong>Repository (Repositorio)</strong> - Tu proyecto completo</p>
            <p>Piensa en tu repositorio como tu <strong>carpeta del proyecto</strong>. Contiene todo: código, imágenes, documentos, y el historial completo de cambios.</p>

            <p><strong>Commit</strong> - Un punto de guardado</p>
            <p>Como sacar una <strong>foto instantánea</strong> de tu proyecto en un momento específico. "Hoy a las 3pm, mi código se veía así". Cada commit tiene un mensaje explicando qué cambiaste.</p>

            <p><strong>Branch (Rama)</strong> - Una realidad alternativa</p>
            <p>Imagina que estás escribiendo un libro. La rama "main" es tu historia principal. Pero quieres probar un final alternativo sin tocar la historia original. Creas una <strong>rama nueva</strong>, experimentas, y si te gusta, la fusionas con la historia principal. Si no, simplemente la eliminas.</p>

            <p><strong>Merge (Fusionar)</strong> - Unir dos realidades</p>
            <p>Siguiendo con el libro: has terminado tu final alternativo y te gusta. Ahora lo <strong>fusionas</strong> con la historia principal. Git intenta combinar ambos automáticamente.</p>

            <p><strong>Pull/Push</strong> - Sincronizar con la nube</p>
            <p>Es como Dropbox o Google Drive. <code>git pull</code> = descargar los cambios de otros. <code>git push</code> = subir tus cambios para que otros los vean.</p>

            <h2>El flujo básico de trabajo</h2>

            <ul>
                <li><strong>1. Modificas archivos</strong> - Escribes código, cambias cosas</li>
                <li><strong>2. git add</strong> - Seleccionas qué cambios quieres guardar (como poner cosas en el carrito de compra)</li>
                <li><strong>3. git commit</strong> - Guardas la partida con un mensaje ("Añadido login de usuarios")</li>
                <li><strong>4. git push</strong> - Subes tus cambios al servidor (GitHub, GitLab, etc.)</li>
            </ul>

            <h2>¿Por qué es tan importante?</h2>

            <p><strong>Sin Git:</strong></p>
            <ul>
                <li>proyecto_final.zip</li>
                <li>proyecto_final_final.zip</li>
                <li>proyecto_final_final_AHORA_SI.zip</li>
                <li>proyecto_final_final_AHORA_SI_v2.zip</li>
            </ul>

            <p><strong>Con Git:</strong></p>
            <p>Un solo proyecto con historial completo de todos los cambios, quién los hizo y por qué. Puedes volver a cualquier punto en el tiempo con un simple comando.</p>

            <h2>El superpoder secreto</h2>

            <p>La verdadera magia de Git es que te permite <strong>experimentar sin miedo</strong>. ¿Quieres probar una idea loca? Crea una rama, pruébala. Si funciona, genial. Si no, simplemente la borras y es como si nunca hubiera existido.</p>

            <p>Es como tener un botón de "deshacer" infinito que recuerda cada paso que has dado en tu proyecto.</p>

            <h2>Comandos esenciales para empezar</h2>

            <ul>
                <li><code>git init</code> - Crear un nuevo repositorio</li>
                <li><code>git status</code> - Ver qué ha cambiado</li>
                <li><code>git add .</code> - Añadir todos los cambios</li>
                <li><code>git commit -m "mensaje"</code> - Guardar la partida</li>
                <li><code>git push</code> - Subir cambios</li>
                <li><code>git pull</code> - Descargar cambios</li>
                <li><code>git clone url</code> - Copiar un proyecto existente</li>
            </ul>

            <p><strong>Recuerda:</strong> Git puede parecer intimidante al principio, pero una vez que lo entiendes, te preguntarás cómo pudiste vivir sin él.</p>
        `
    }
];

// Exportar artículos
window.articlesData = articles;
