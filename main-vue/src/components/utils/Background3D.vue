<template>
  <div class="b3d" style="height: 980px">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
      <defs>
        <radialGradient id="gradient-squ530vsa" gradientTransform="rotate(51)">
          <stop offset="0%" stop-color="rgb(40,29,114)"></stop>
          <stop offset="100%" stop-color="rgb(15,26,41)"></stop>
        </radialGradient>
        <filter id="filter-squ530vsa">
          <feTurbulence
            baseFrequency="0.04118 0.02027"
            numOctaves="1"
            seed="975"></feTurbulence>
          <feColorMatrix class="anim" type="hueRotate" values="0">
            <animate
              attributeName="values"
              from="0"
              to="360"
              dur="3s"
              repeatCount="indefinite"></animate>
          </feColorMatrix>
          <feColorMatrix
            values="2.8 1.3 -4.6 -0.8 -4.5 -4 -4.1 -0.2 -4.6 4.8 -3.8 -1.3 4.4 -2 -2.5 -4 0.1 4.1 -4.8 2.5"></feColorMatrix>
          <feSpecularLighting
            result="specOut"
            specularExponent="34"
            lighting-color="rgb(240,229,214)">
            <fePointLight x="528" y="232" z="8"></fePointLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#gradient-squ530vsa)"
        class="bgRect"></rect>
      <rect width="100%" height="100%" filter="url(#filter-squ530vsa)"></rect>
    </svg>
  </div>
</template>

<script></script>
<style lang="css" scoped></style>
