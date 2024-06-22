<script>
    import "../app.css";

    let activeLink = "inicio";

    function setActive(link) {
        activeLink = link;
    }
</script>


<div class="wrapper">
    <nav>
        <ul>
            <li>
                <a 
                    class:active={activeLink === "inicio"}
                    href="/" 
                    on:click={(e) => {
                        setActive("inicio");
                    }}
                >
                    inicio
                </a>
            </li>
            <li>
                <a 
                    class:active={activeLink === "about"} 
                    href="/about" 
                    on:click={(e) => {
                        setActive("about");
                    }}
                >
                    sobre mi
                </a>
            </li>
            <li>
                <a 
                    class:active={activeLink === "works"} 
                    href="/works" 
                    on:click={(e) => {
                        setActive("works");
                    }}
                >
                    trabajos
                </a>
            </li>
        </ul>
    </nav>
    
    <slot></slot>
</div>

<style>
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        list-style: none;
    }

    .logo {
        font-weight: bold;
        color: var(--violet-10);
    }

    a {
        text-decoration: none;
        color: var(--gray-12);
    }

    a:hover {
        color: var(--violet-10);
    }

    .active {
        font-weight: bold;
    }
</style>

