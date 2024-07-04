<script lang="js">
</script>

<div class="container">
	<div class="header">
		<img src="/black.jpg" alt="temp img" />
	</div>
	<div class="body">
		<p class="titulo">Titulo de la card</p>
		<p class="subtitulo">Subtitulo</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 10px;
		/* width: 800px; */
        width: 50vw;
		height: auto;
		background-color: white;
	}

	.header img {
        width: 50vw;
		height: auto;
	}

    .body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 6px;
    }

    .body .titulo {
        font-size: 2.7rem;
        font-weight: 700;
    }

    .body .subtitulo {
        font-size: 1.5rem;
        font-weight: 400;
    }
</style>
