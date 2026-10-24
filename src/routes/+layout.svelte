<script lang="ts">
	import favicon from '#lib/assets/logovelmora.webp';
	import type { LayoutProps } from './$types';
	import '../../static/CSS/dona.css'
	import '../../static/CSS/error.css'
	import '../../static/CSS/logito.css'
	import '../../static/CSS/styles.css'
	import { page } from '$app/state'

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title></title>
    <meta name="description" content="">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
</svelte:head>
<header>
        <img class="logo"src="img/logocompletodevelmor.webp" alt="">
        <div class="cabeza">
            <nav>
                <ul>
                    <li><a href="/" class:active={page.url.pathname==='/'}>Inicio</a></li>
                    <li><a href="/Descargas" class:active={page.url.pathname==='/Descargas'}>Descargas</a></li>
                    <li><a href="/Donar" class:active={page.url.pathname==='/Donar'}>Donar</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main id="content">
		{@render children()}
	</main>
<footer><div class="footer-copy">
    <p>&copy; 2026 Velmora Coding. Desarrollado por <strong>jdlzo</strong>.</p>
</div></footer>
