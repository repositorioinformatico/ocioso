# Ocioso

Una web educativa para aprender cosas interesantes y útiles de forma entretenida.

## 🎯 Propósito

**Ocioso** está diseñado para alumnos que no quieren estudiar, pero que al menos pueden aprovechar su tiempo aprendiendo algo útil. En lugar de perder el tiempo sin más, aquí encontrarás conocimientos fascinantes presentados de forma atractiva y fácil de digerir.

## 💡 ¿Qué encontrarás aquí?

Artículos breves y curiosos sobre temas variados:
- Historia y cultura
- Ciencias y matemáticas
- Lenguajes y símbolos
- Datos curiosos del mundo
- Y mucho más...

Cada artículo está diseñado para ser leído en pocos minutos, con información interesante que realmente vale la pena conocer.

## 🚀 Uso

Simplemente abre la web, haz clic en **"💡 Cosas que no conocías"** y explora los artículos disponibles. Cada uno te enseñará algo nuevo de forma sencilla y entretenida.

## 📝 Estructura del proyecto

```
ocioso/
├── index.html      # Página principal
├── styles.css      # Estilos
├── app.js          # Sistema de navegación
└── articles.js     # Base de datos de artículos
```

## ➕ Cómo añadir nuevos artículos

Edita el archivo `articles.js` y añade un nuevo objeto al array:

```javascript
{
    id: 'nombre-del-articulo',
    title: 'Título del Artículo',
    description: 'Descripción breve que aparecerá en la lista',
    content: `
        <h1>Título del Artículo</h1>
        <p>Contenido del artículo en HTML...</p>
        <h2>Subtítulo</h2>
        <p>Más contenido...</p>
    `
}
```

El sistema automáticamente:
- Generará la URL (`?article=nombre-del-articulo`)
- Lo añadirá al listado de artículos
- Creará la página individual con navegación

## 🌐 GitHub Pages

Esta web está optimizada para GitHub Pages. Para activarla:

1. Ve a **Settings** → **Pages** en tu repositorio
2. Selecciona **"Deploy from a branch"**
3. Elige la rama **main** y carpeta **/ (root)**
4. Guarda y espera unos minutos
5. Tu web estará disponible en `https://tu-usuario.github.io/ocioso/`

## 📚 Artículos disponibles

- **El Alfabeto Griego** - Las 24 letras del alfabeto griego, desde alfa hasta omega

*Más artículos próximamente...*

## 🤝 Contribuir

¿Tienes ideas para nuevos artículos? Simplemente añádelos al archivo `articles.js` y haz un pull request.

---

**Recuerda:** Si vas a estar ocioso, al menos aprende algo útil. 📖✨
