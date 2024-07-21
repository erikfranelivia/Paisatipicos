body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
}

header {
    background-color: #f8f8f8;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: #007BFF;
    font-weight: bold;
}

nav ul li a:hover {
    text-decoration: underline;
}

.hero {
    text-align: center;
    padding: 50px 20px;
    background-color: #e9ecef;
}

.hero h1 {
    font-size: 2.5em;
    margin: 0;
}

.hero p {
    font-size: 1.2em;
    margin: 20px 0;
}

.btn-principal {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
}

.btn-principal:hover {
    background-color: #0056b3;
}

section {
    padding: 40px 20px;
}

h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

.servico, .trabalho, .portfolio-item {
    margin-bottom: 20px;
}

.servico img, .trabalho img, .portfolio-item img {
    width: 100%;
    height: auto;
}

.galeria-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

.galeria-grid img {
    width: 100%;
    height: auto;
}

form {
    display: flex;
    flex-direction: column;
}

form label {
    margin-top: 10px;
}

form input, form textarea {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form button {
    margin-top: 20px;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background-color: #218838;
}

footer {
    background-color: #f8f8f8;
    padding: 10px 20px;
    text-align: center;
    border-top: 1px solid #ddd;
}
