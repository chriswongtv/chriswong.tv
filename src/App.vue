<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$max-tablet-width: 768px;
$max-phone-width: 480px;
$link-underline-color: #81ecec;

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
	font-size: 62.5%;

	#app {
		font-family: 'IBM Plex Sans', sans-serif;
		max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
		padding: 0 5.5rem;
		color: #222f3e;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		@media screen and (max-width: $max-tablet-width) {
			padding: 0 2.5rem;
		}
	}
}

.link-underline {
	border-bottom: 2px solid $link-underline-color;
	box-shadow: inset 0 0px 0 $link-underline-color;
	color: inherit;
	transition: all .15s cubic-bezier(.33,.66,.66,1);
	text-decoration: none !important;
}

.link-underline:hover {
	box-shadow: inset 0 -1.3em 0 $link-underline-color;
	color: #fff;
}

@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
</style>
