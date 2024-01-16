<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Chatify') }}</title>

        {{--meta tags --}}
        <meta name="title" content="Chatify ">
        <meta name="description" content="Chatify is a unique web application that adds an exciting twist to online messaging. With Chatify, you can send anonymous messages to your crush, friends, or anyone you choose, bringing an element of mystery and fun to your conversations. Enjoy the thrill of expressing yourself freely while maintaining your anonymity. Dive into the world of Chatify and discover a new way to connect with others, fostering playful interactions and sparking interesting conversations without revealing your identity.">
        <meta name="keywords" content="chatify,anonymous,chat">
        <meta name="robots" content="index, follow">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="language" content="English">
        <meta name="author" content="Juniel Husain">

        <meta property="og:image" content="https://chatify-online.elementfx.com/assets/chatify_light.png">
        <meta property="og:image:type" content="image/jpeg">
        <meta property="og:image:width" content="200">
        <meta property="og:image:height" content="200">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        {{-- tab icon --}}
        <link rel="icon" type="image/png" href="/assets/chatify_dark.png">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

        {{-- share social links --}}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
        <script src="{{ asset('js/share.js') }}"></script>
    </head>
    <body class="font-sans antialiased dark">
        @inertia
    </body>
</html>
