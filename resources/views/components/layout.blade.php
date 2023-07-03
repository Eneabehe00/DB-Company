<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- SWIPER CSS CDN --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <title>DB_Company</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <x-navbar/>
    <div class="min-vh-100">
        {{$slot}}
    </div>
    <x-footer/>
</body>
{{-- FONTAWESOME CDN --}}
<script src="https://kit.fontawesome.com/34f3319f96.js" crossorigin="anonymous"></script>
{{-- SWIPER CDN --}}
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
</html>