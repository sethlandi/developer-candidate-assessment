<template>
  <div id="app">
    <the-header />
    <router-view class="page-content" />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
*,
:after,
:before {
  box-sizing: border-box;
}

:root {
  --theme-primary: #fffffd;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
main,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
}

body,
html {
  font-family: 'Roboto', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page-content {
  height: calc(100vh - 72px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 72px;
}
</style>
