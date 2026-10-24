<script lang="ts">
    import { page } from '$app/state';
</script>

<svelte:head>
    <!-- Es mejor colocar los estilos y metas dentro de svelte:head -->
    <link rel="stylesheet" href="/CSS/error.css">
</svelte:head>

<div class="contenidoerror">
    <span class="error-codigo">404</span>
    <h2>Página no encontrada</h2>
    <p>La ruta a la que intentas acceder es incorrecta o inexistente.</p>
    
    <!-- Cambiamos el <li> suelto por un enlace directo y quitamos el class:active innecesario -->
    <a href="/" class="btn-volver">Volver al inicio</a>
</div>