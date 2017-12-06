<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel 5.5 with vue js</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>

<div class="panel-body table-responsive">
    <router-view name="companiesIndex"></router-view>
    <router-view></router-view>
</div>

<div id="app">

</div>
<script src="{{asset('js/app.js')}}">

</script>
</body>
</html>